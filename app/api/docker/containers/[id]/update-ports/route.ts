import { NextRequest, NextResponse } from 'next/server';
import Docker from 'dockerode';
import { stopAndRemoveContainer } from '../../../../../../lib/deployment/githubDeploy';

const docker = new Docker();

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const { ports } = await req.json(); // { '8080/tcp': 3000, ... }
    if (!ports || typeof ports !== 'object') {
      return NextResponse.json({ error: 'Missing or invalid ports object' }, { status: 400 });
    }
    const container = docker.getContainer(id);
    const inspect = await container.inspect();
    const image = inspect.Config.Image;
    const env = inspect.Config.Env;
    const name = inspect.Name?.replace(/^\//, '');
    const volumes = inspect.Mounts?.map((m: any) => `${m.Source}:${m.Destination}`) || [];
    const cmd = inspect.Config.Cmd;
    const entrypoint = inspect.Config.Entrypoint;
    const restart = inspect.HostConfig.RestartPolicy?.Name || 'no';

    // Prepare new port bindings
    const exposedPorts: Record<string, {}> = {};
    const portBindings: Record<string, any> = {};
    Object.entries(ports).forEach(([containerPort, hostPort]) => {
      exposedPorts[containerPort] = {};
      portBindings[containerPort] = [{ HostPort: String(hostPort) }];
    });

    // Stop and remove old container
    await stopAndRemoveContainer(id);

    // Create new container
    const newContainer = await docker.createContainer({
      Image: image,
      name,
      Env: env,
      HostConfig: {
        Binds: volumes.length ? volumes : undefined,
        PortBindings: Object.keys(portBindings).length ? portBindings : undefined,
        RestartPolicy: { Name: restart },
      },
      ExposedPorts: Object.keys(exposedPorts).length ? exposedPorts : undefined,
      Cmd: cmd,
      Entrypoint: entrypoint,
    });
    await newContainer.start();
    return NextResponse.json({ id: newContainer.id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 