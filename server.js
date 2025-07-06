const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const WebSocket = require('ws');
const Docker = require('dockerode');
const pty = require('node-pty');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const docker = new Docker();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  // WebSocket server for terminal
  const wss = new WebSocket.Server({ noServer: true });

  server.on('upgrade', (request, socket, head) => {
    const url = request.url || '';
    // Match /ws/terminal/:id
    const match = url.match(/^\/ws\/terminal\/(.+)$/);
    if (match) {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request, match[1]);
      });
    } else {
      socket.destroy();
    }
  });

  wss.on('connection', async (ws, req, containerId) => {
    try {
      const container = docker.getContainer(containerId);
      let exec, stream;
      let shellCmds = [['/bin/sh'], ['/bin/bash']];
      let started = false;
      for (const cmd of shellCmds) {
        try {
          exec = await container.exec({
            Cmd: cmd,
            AttachStdin: true,
            AttachStdout: true,
            AttachStderr: true,
            Tty: true,
          });
          stream = await exec.start({ hijack: true, stdin: true });
          started = true;
          console.log(`Started shell in container ${containerId} with: ${cmd.join(' ')}`);
          break;
        } catch (err) {
          console.log(`Failed to start shell with ${cmd.join(' ')}:`, err.message);
        }
      }
      if (!started) {
        ws.send(JSON.stringify({ type: 'output', data: 'No shell found in container.\r\n' }));
        ws.close();
        return;
      }

      ws.on('message', (msg) => {
        try {
          const { type, data } = JSON.parse(msg);
          if (type === 'input') {
            console.log('Input from client:', data);
            stream.write(data);
          }
        } catch (err) {
          console.log('Error parsing client message:', err.message);
        }
      });

      stream.on('data', (data) => {
        console.log('Output from container:', data.toString('utf-8'));
        ws.send(JSON.stringify({ type: 'output', data: data.toString('utf-8') }));
      });
      stream.on('end', () => ws.close());
      ws.on('close', () => stream.end());
    } catch (err) {
      console.log('Error in terminal connection:', err.message);
      ws.close();
    }
  });

  const port = process.env.PORT || 3020;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
    console.log(`> WebSocket terminal on ws://localhost:${port}/ws/terminal/:id`);
  });
}); 