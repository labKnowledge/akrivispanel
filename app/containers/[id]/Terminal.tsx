import { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

interface ContainerTerminalProps {
  containerId: string;
}

export default function ContainerTerminal({ containerId }: ContainerTerminalProps) {
  const xtermRef = useRef<HTMLDivElement>(null);
  const termRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!xtermRef.current) return;
    const term = new Terminal({
      cursorBlink: true,
      fontSize: 14,
      theme: {
        background: '#1a1a1a',
        foreground: '#00ff00',
      },
    });
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(xtermRef.current);
    fitAddon.fit();
    term.focus();
    termRef.current = term;
    fitAddonRef.current = fitAddon;

    // Resize on window resize
    const handleResize = () => {
      fitAddon.fit();
    };
    window.addEventListener('resize', handleResize);

    // Connect to backend websocket
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const socket = new WebSocket(`${protocol}://${window.location.host}/ws/terminal/${containerId}`);
    socketRef.current = socket;

    term.onData(data => {
      socket.send(JSON.stringify({ type: 'input', data }));
    });

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === 'output') {
        term.write(msg.data);
      }
    };

    socket.onclose = () => {
      term.write('\r\n\x1b[31m[Disconnected]\x1b[0m');
    };

    return () => {
      term.dispose();
      socket.close();
      window.removeEventListener('resize', handleResize);
    };
  }, [containerId]);

  return <div ref={xtermRef} style={{ width: '100%', height: '100%', minHeight: 350, background: '#1a1a1a', borderRadius: 8 }} />;
} 