import { NextApiRequest } from 'next';
import { WebSocketServer, WebSocket } from 'ws';
import Docker from 'dockerode';
import pty from 'node-pty';
import { IncomingMessage } from 'http';

const docker = new Docker();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: any) {
  if (res.socket.server.ws) {
    res.end();
    return;
  }

  const wss = new WebSocketServer({ server: res.socket.server });
  res.socket.server.ws = wss;

  wss.on('connection', async (socket: WebSocket, req: IncomingMessage) => {
    // Extract container ID from URL
    const urlParts = req.url!.split('/');
    const idIndex = urlParts.findIndex((p: string) => p === 'containers') + 2;
    const containerId = urlParts[idIndex];
    if (!containerId) {
      socket.close();
      return;
    }
    const container = docker.getContainer(containerId);
    // Start a shell in the container
    const exec = await container.exec({
      Cmd: ['/bin/sh'],
      AttachStdin: true,
      AttachStdout: true,
      AttachStderr: true,
      Tty: true,
    });
    const stream = await exec.start({ hijack: true, stdin: true });

    socket.on('message', (msg: string) => {
      try {
        const { type, data } = JSON.parse(msg);
        if (type === 'input') {
          stream.write(data);
        }
      } catch {}
    });

    stream.on('data', (data: Buffer) => {
      socket.send(JSON.stringify({ type: 'output', data: data.toString('utf-8') }));
    });
    stream.on('end', () => socket.close());
    socket.on('close', () => stream.end());
  });
  res.end();
} 