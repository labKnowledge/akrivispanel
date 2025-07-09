import { NextRequest, NextResponse } from 'next/server';
import Docker from 'dockerode';
import { exec } from 'child_process';
import util from 'util';

const docker = new Docker();
const execAsync = util.promisify(exec);

async function getContainerInspectWithSize(id: string) {
  // Use Dockerode's modem.dial to get ?size=true
  return new Promise<any>((resolve, reject) => {
    docker.modem.dial(
      {
        path: `/containers/${id}/json?size=true`,
        method: 'GET',
      },
      (err: any, data: any) => {
        if (err) return reject(err);
        resolve(data);
      }
    );
  });
}

export async function GET(req: NextRequest) {
  try {
    // Images
    const images = await docker.listImages();
    // Containers (with storage info)
    const containersRaw = await docker.listContainers({ all: true });
    const containers = await Promise.all(
      containersRaw.map(async (c) => {
        try {
          // Use low-level API to get size info
          const inspect = await getContainerInspectWithSize(c.Id);
          return {
            Id: c.Id,
            Names: c.Names,
            Image: c.Image,
            State: c.State,
            Status: c.Status,
            SizeRootFs: inspect.SizeRootFs ?? null,
            SizeRw: inspect.SizeRw ?? null,
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
      })
    );
    // Volumes (get size via du)  
    const volumesRaw = await docker.listVolumes();
    const volumes = await Promise.all(
      (volumesRaw.Volumes || []).map(async (v: any) => {
        let size = null;
        let error = null;
        try {
          // Use du -sb <mountpoint> to get size in bytes
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
      })
    );
    return NextResponse.json({
      images: images.map((img) => ({
        Id: img.Id,
        RepoTags: img.RepoTags,
        Size: img.Size,
        Created: img.Created,
      })),
      containers,
      volumes,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 