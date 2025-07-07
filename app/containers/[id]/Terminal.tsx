import { useState } from 'react';

interface ContainerTerminalProps {
  containerId: string;
}

export default function ContainerTerminal({ containerId }: ContainerTerminalProps) {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runCommand = async () => {
    setLoading(true);
    setError(null);
    setOutput('');
    try {
      const res = await fetch(`/api/docker/containers/${containerId}/exec`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command }),
      });
      const data = await res.json();
      if (res.ok) {
        setOutput(data.output);
      } else {
        setError(data.error || 'Failed to execute command');
      }
    } catch (err: any) {
      setError(err.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', minHeight: 350, background: '#1a1a1a', borderRadius: 8, padding: 16 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <input
          type="text"
          value={command}
          onChange={e => setCommand(e.target.value)}
          placeholder="Enter command (e.g. ls -al)"
          style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #333', background: '#222', color: '#0f0' }}
          onKeyDown={e => { if (e.key === 'Enter') runCommand(); }}
          disabled={loading}
        />
        <button
          onClick={runCommand}
          disabled={loading || !command.trim()}
          style={{ padding: '8px 16px', borderRadius: 4, background: '#2563eb', color: '#fff', border: 'none', fontWeight: 'bold' }}
        >
          {loading ? 'Running...' : 'Run'}
        </button>
      </div>
      {error && <div style={{ color: '#f55', marginBottom: 8 }}>{error}</div>}
      <pre style={{ background: '#111', color: '#0f0', borderRadius: 4, padding: 12, minHeight: 200, overflowX: 'auto' }}>{output}</pre>
    </div>
  );
} 