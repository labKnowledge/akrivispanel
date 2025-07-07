'use client';
import React, { useState, useRef, useEffect } from 'react';

interface BuildResponse {
  status: string;
  message: string;
  repoUrl: string;
  branch: string;
  buildType: string;
  env: Record<string, string>;
  repoPath: string;
  imageTag: string;
  buildOutput: string;
  buildLogs: string[];
  nextStep: any;
}

export default function GithubDeploymentPage() {
  const [repoUrl, setRepoUrl] = useState('');
  const [branch, setBranch] = useState('main');
  const [buildType, setBuildType] = useState<'auto' | 'dockerfile' | 'compose'>('auto');
  const [envVars, setEnvVars] = useState([{ key: '', value: '' }]);
  const [portBindings, setPortBindings] = useState([{ host: '', container: '' }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [buildLogs, setBuildLogs] = useState<string[]>([]);
  const [result, setResult] = useState<BuildResponse | null>(null);
  const [containerId, setContainerId] = useState<string | null>(null);
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [buildLogs]);

  const handleEnvChange = (idx: number, field: 'key' | 'value', value: string) => {
    const newVars = [...envVars];
    newVars[idx][field] = value;
    setEnvVars(newVars);
  };

  const addEnvVar = () => setEnvVars([...envVars, { key: '', value: '' }]);
  const removeEnvVar = (idx: number) => setEnvVars(envVars.filter((_, i) => i !== idx));

  const handlePortChange = (idx: number, field: 'host' | 'container', value: string) => {
    const newPorts = [...portBindings];
    newPorts[idx][field] = value;
    setPortBindings(newPorts);
  };

  const addPortBinding = () => setPortBindings([...portBindings, { host: '', container: '' }]);
  const removePortBinding = (idx: number) => setPortBindings(portBindings.filter((_, i) => i !== idx));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setBuildLogs([]);
    setResult(null);
    // Prepare env as object
    const envObj: Record<string, string> = {};
    envVars.forEach(({ key, value }) => {
      if (key) envObj[key] = value;
    });
    // Prepare ports as object
    const portsObj: Record<string, number> = {};
    portBindings.forEach(({ host, container }) => {
      if (host && container) portsObj[`${container}/tcp`] = Number(host);
    });
    try {
      const res = await fetch('/api/deployments/github/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          repoUrl,
          branch,
          buildType: buildType === 'auto' ? undefined : buildType,
          env: envObj,
          ports: Object.keys(portsObj).length ? portsObj : undefined,
        }),
      });
      if (!res.body) throw new Error('No response body');
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let logs: string[] = [];
      let done = false;
      let errorMsg = null;
      while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;
        if (value) {
          const chunk = decoder.decode(value);
          // SSE: lines start with 'data: '
          chunk.split(/\n/).forEach(line => {
            if (line.startsWith('data: ')) {
              const logLine = line.replace('data: ', '');
              logs.push(logLine);
              setBuildLogs([...logs]);
              // Parse container ID
              if (logLine.startsWith('Container started: ')) {
                const id = logLine.replace('Container started: ', '').trim();
                setContainerId(id);
              }
              if (logLine.toLowerCase().includes('failed') || logLine.toLowerCase().startsWith('error:')) {
                errorMsg = logLine;
              }
            }
          });
        }
      }
      setLoading(false);
      if (errorMsg) {
        setError(errorMsg);
      } else {
        setError(null);
      }
      // Optionally, parse the final image tag from logs and setResult if needed
    } catch (err: any) {
      setError(err.message || 'Unknown error');
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-8xl mx-auto">
      <form className="space-y-4 bg-white shadow rounded p-6" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Repository URL<span className="text-red-500">*</span></label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={repoUrl}
            onChange={e => setRepoUrl(e.target.value)}
            required
            placeholder="https://github.com/user/repo.git or https://huggingface.co/spaces/user/space"
          />
          <div className="text-xs text-gray-500 mt-1">
            Supports GitHub, Hugging Face Spaces, and any public Git provider. Paste the full URL (no .git required for Hugging Face).
          </div>
        </div>
        <div>
          <label className="block font-medium mb-1">Branch</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={branch}
            onChange={e => setBranch(e.target.value)}
            placeholder="main"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Build Type</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={buildType}
            onChange={e => setBuildType(e.target.value as any)}
          >
            <option value="auto">Auto-detect</option>
            <option value="dockerfile">Dockerfile</option>
            <option value="compose">Docker Compose</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Environment Variables</label>
          {envVars.map((env, idx) => (
            <div className="flex gap-2 mb-2" key={idx}>
              <input
                type="text"
                className="border rounded px-2 py-1 flex-1"
                placeholder="Key"
                value={env.key}
                onChange={e => handleEnvChange(idx, 'key', e.target.value)}
              />
              <input
                type="text"
                className="border rounded px-2 py-1 flex-1"
                placeholder="Value"
                value={env.value}
                onChange={e => handleEnvChange(idx, 'value', e.target.value)}
              />
              <button type="button" className="text-red-500 px-2" onClick={() => removeEnvVar(idx)} title="Remove">&times;</button>
            </div>
          ))}
          <button type="button" className="text-blue-600 text-sm mt-1" onClick={addEnvVar}>+ Add Variable</button>
        </div>
        <div>
          <label className="block font-medium mb-1">Port Bindings</label>
          {portBindings.map((port, idx) => (
            <div className="flex gap-2 mb-2" key={idx}>
              <input
                type="number"
                className="border rounded px-2 py-1 w-32"
                placeholder="Host Port"
                value={port.host}
                onChange={e => handlePortChange(idx, 'host', e.target.value)}
                min={1}
                max={65535}
              />
              <span className="self-center">→</span>
              <input
                type="number"
                className="border rounded px-2 py-1 w-32"
                placeholder="Container Port"
                value={port.container}
                onChange={e => handlePortChange(idx, 'container', e.target.value)}
                min={1}
                max={65535}
              />
              <button type="button" className="text-red-500 px-2" onClick={() => removePortBinding(idx)} title="Remove">&times;</button>
            </div>
          ))}
          <button type="button" className="text-blue-600 text-sm mt-1" onClick={addPortBinding}>+ Add Port Binding</button>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded shadow disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Deploying...' : 'Deploy'}
        </button>
      </form>
      {(error || buildLogs.length > 0 || result) && (
        <div className="mt-8">
          <div className="bg-gray-900 text-green-100 rounded p-4 text-xs whitespace-pre-wrap break-words max-h-80 overflow-y-auto font-mono min-h-[120px]">
            {buildLogs.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            <div ref={logEndRef} />
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          {containerId && buildLogs.some(l => l.toLowerCase().includes('deployment complete')) && (
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded shadow"
              onClick={() => window.location.href = `/containers/${containerId}`}
            >
              Go to Deployed Container
            </button>
          )}
        </div>
      )}
      {result && result.status === 'success' && (
        <div className="mt-8 bg-green-50 border border-green-200 rounded p-4">
          <div className="font-semibold text-green-800 mb-2">Image built successfully!</div>
          <div className="mb-2">Image Tag: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-green-700">{result.imageTag}</span></div>
          <div className="mb-2">You can now deploy this image as a container using the <b>Deploy Image</b> page or API.</div>
          <div className="text-xs text-gray-500">API Example:<br />
            <pre className="bg-gray-100 rounded p-2 mt-1">{JSON.stringify(result.nextStep, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
} 