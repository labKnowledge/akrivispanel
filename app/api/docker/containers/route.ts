import { NextRequest, NextResponse } from "next/server";
import Docker from "dockerode";
import { getSessionUser } from "../../../../lib/auth";

const docker = new Docker();

export async function GET(req: NextRequest) {
  if (!getSessionUser(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const containers = await docker.listContainers({ all: true });
    return NextResponse.json({ containers });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!getSessionUser(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();
    const {
      image,
      name,
      env = [],
      volumes = [],
      ports = [],
      command = "",
      args = "",
      restart = "no",
    } = body;

    if (!image) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 });
    }

    // Check if image exists locally
    let imageExists = false;
    try {
      await docker.getImage(image).inspect();
      imageExists = true;
    } catch {
      imageExists = false;
    }

    let pullLogs: string[] = [];
    if (!imageExists) {
      // Pull the image and collect progress
      pullLogs.push(`Pulling image ${image}...`);
      await new Promise<void>((resolve, reject) => {
        docker.pull(image, (err: any, stream: any) => {
          if (err) return reject(err);
          docker.modem.followProgress(
            stream,
            (err, output) => {
              if (err) {
                pullLogs.push(`Error pulling image: ${err.message}`);
                return reject(err);
              }
              pullLogs.push(`Image ${image} pulled successfully.`);
              resolve();
            },
            (event) => {
              if (event.status) {
                let msg = event.status;
                if (event.progress) msg += ` ${event.progress}`;
                if (event.id) msg = `[${event.id}] ${msg}`;
                pullLogs.push(msg);
              }
            },
          );
        });
      });
    }

    // Prepare Env
    const envArr = env
      .filter((e: any) => e.key)
      .map((e: any) => `${e.key}=${e.value}`);

    // Prepare Volumes
    const binds = volumes
      .filter((v: any) => v.host && v.container)
      .map((v: any) => `${v.host}:${v.container}`);

    // Prepare Ports
    const exposedPorts: Record<string, {}> = {};
    const portBindings: Record<string, any> = {};
    ports.forEach((p: any) => {
      if (p.host && p.container) {
        const containerPort = `${p.container}/tcp`;
        exposedPorts[containerPort] = {};
        portBindings[containerPort] = [{ HostPort: p.host.toString() }];
      }
    });

    // Prepare Cmd/Entrypoint
    const cmdArr = args ? args.split(" ").filter(Boolean) : undefined;
    const entrypointArr = command
      ? command.split(" ").filter(Boolean)
      : undefined;

    // Create container
    const container = await docker.createContainer({
      Image: image,
      name: name || undefined,
      Env: envArr.length ? envArr : undefined,
      HostConfig: {
        Binds: binds.length ? binds : undefined,
        PortBindings: Object.keys(portBindings).length
          ? portBindings
          : undefined,
        RestartPolicy: { Name: restart },
      },
      ExposedPorts: Object.keys(exposedPorts).length ? exposedPorts : undefined,
      Cmd: cmdArr,
      Entrypoint: entrypointArr,
    });

    // Start container
    await container.start();

    return NextResponse.json({ id: container.id, pullLogs });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
