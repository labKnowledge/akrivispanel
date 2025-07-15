import { NextRequest } from "next/server";
import Docker from "dockerode";
import { exec } from "child_process";
import util from "util";

const docker = new Docker();
const execAsync = util.promisify(exec);

async function getContainerInspectWithSize(id: string) {
  const container = docker.getContainer(id);
  const inspect = await container.inspect();
  const stats = await container.stats({ stream: false });
  return { inspect, stats };
  // return new Promise<any>((resolve, reject) => {
  //   container.modem.dial(
  //     {
  //       path: `/containers/${id}/json?size=true`,
  //       method: 'GET',
  //     },
  //     (err: any, data: any) => {
  //       if (err) return reject(err);
  //       resolve(data);
  //     }
  //   );
  // });
}

async function getContainerSize(containerId: string) {
  try {
    const { stdout } = await execAsync(
      `docker ps --size --filter "id=${containerId}"`,
    );
    const sizeLine = stdout.split("\n").find((line) => line.includes("Size:"));
    if (sizeLine) {
      const sizeMatch = sizeLine.match(/Size:\s+(\d+(\.\d+)?\s+\w+)/);
      if (sizeMatch) {
        return sizeMatch[1];
      }
    }
    return null;
  } catch (error) {
    console.error(`Failed to get size for container ${containerId}:`, error);
    return null;
  }
}

async function getContainerDetails(containerId: string) {
  try {
    const { stdout } = await execAsync(`docker inspect ${containerId}`);
    const containerInfo = JSON.parse(stdout)[0];

    const { Id, Image, Name, Command, Created, Ports } = containerInfo;
    const size = await getContainerSize(containerId);

    return {
      containerID: Id,
      image: Image,
      name: Name,
      command: Command,
      size: size,
      created: Created,
      port: Ports,
    };
  } catch (error) {
    console.error(`Failed to get details for container ${containerId}:`, error);
    return null;
  }
}

async function getStorageData() {
  let images: any[] = [];
  let containers: any[] = [];
  let volumes: any[] = [];
  let errors: string[] = [];

  // Images
  try {
    const imgs = await docker.listImages();
    images = imgs.map((img) => ({
      Id: img.Id,
      RepoTags: img.RepoTags,
      Size: img.Size,
      Created: img.Created,
    }));
  } catch (e: any) {
    errors.push("Failed to fetch images: " + e.message);
  }

  // Containers
  try {
    const containersRaw = await docker.listContainers({ all: true });
    containers = await Promise.all(
      containersRaw.map(async (c) => {
        try {
          const inspect = await getContainerDetails(c.Id);
          return {
            Id: c.Id,
            Names: c.Names,
            Image: c.Image,
            State: c.State,
            Status: c.Status,
            SizeRootFs: inspect?.size,
            SizeRw: inspect?.size,
          };
        } catch (e: any) {
          return {
            Id: c.Id,
            Names: c.Names,
            Image: c.Image,
            State: c.State,
            Status: c.Status,
            SizeRootFs: null,
            SizeRw: null,
            error: e.message,
          };
        }
      }),
    );
  } catch (e: any) {
    errors.push("Failed to fetch containers: " + e.message);
  }

  // Volumes
  try {
    const volumesRaw = await docker.listVolumes();
    volumes = await Promise.all(
      (volumesRaw.Volumes || []).map(async (v: any) => {
        let size = null;
        let error = null;
        try {
          const { stdout } = await execAsync(`du -sb ${v.Mountpoint}`);
          size = parseInt(stdout.split(/\s+/)[0], 10);
        } catch (e: any) {
          error = e.message;
        }
        return {
          Name: v.Name,
          Driver: v.Driver,
          Mountpoint: v.Mountpoint,
          CreatedAt: v.CreatedAt,
          Labels: v.Labels,
          size,
          error,
        };
      }),
    );
  } catch (e: any) {
    errors.push("Failed to fetch volumes: " + e.message);
  }

  return { images, containers, volumes, errors };
}

export async function GET(req: NextRequest) {
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();

  let interval: NodeJS.Timeout;
  let stopped = false;

  async function sendStorage() {
    if (stopped) return;
    try {
      const data = await getStorageData();
      try {
        await writer.write(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
      } catch (err) {
        // Writer likely closed (client disconnected)
        stopped = true;
        clearInterval(interval);
        writer.close();
      }
    } catch (err: any) {
      try {
        await writer.write(
          encoder.encode(
            `event: error\ndata: ${JSON.stringify({ error: err.message })}\n\n`,
          ),
        );
      } catch {
        // Writer likely closed
      }
      stopped = true;
      clearInterval(interval);
      writer.close();
    }
  }

  // Start sending updates
  sendStorage();
  interval = setInterval(sendStorage, 2000);

  // Cleanup on connection close
  req.signal.addEventListener("abort", () => {
    stopped = true;
    clearInterval(interval);
    writer.close();
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
