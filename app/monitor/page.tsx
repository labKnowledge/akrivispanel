"use client";
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

interface ContainerInfo {
  Id: string;
  Names: string[];
  Image: string;
  Status: string; // keep as Status, but map from status
  Ports: any[];
  stats: ContainerStats; // <-- lowercase 'stats'
}

interface ContainerStats {
  cpu: number;
  memory: {
    usage: number;
    limit: number;
    percent: number;
  };
  network: {
    rx: number;
    tx: number;
  };
}

function formatBytes(bytes: number) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export default function MonitoringPage() {
  const [tab, setTab] = useState<'containers' | 'storage'>('containers');
  const [containers, setContainers] = useState<ContainerInfo[]>([]);
  const [stats, setStats] = useState<Record<string, ContainerStats | null>>({});
  const [loading, setLoading] = useState(true);
  // Remove workerRef

  // Fetch containers once for initial load (optional, can be removed if SSE is fast enough)
  useEffect(() => {
    setLoading(true);
    fetch('/api/docker/containers')
      .then((res) => res.json())
      .then((data) => setContainers(data.containers || []))
      .finally(() => setLoading(false));
  }, []);

  // SSE for real-time container updates
  useEffect(() => {
    if (tab !== 'containers') return;
    setLoading(false);
    if (typeof window === 'undefined') return;
    // For local testing, use the full URL to port 3001. Revert to relative path for production.
    const es = new window.EventSource('http://localhost:3001/api/docker/containers/stream');
    es.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        // Map backend fields to frontend expected fields
        setContainers((data.containers)
        );
      } catch (e) {
        // ignore
      }
    };
    es.onerror = () => {
      es.close();
    };
    return () => {
      es.close();
    };
  }, [tab]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 items-center">
      <div className="w-full max-w-8xl mt-8">
        <div className="flex gap-4 mb-6">
          <button className={`px-4 py-2 rounded ${tab === 'containers' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-200'}`} onClick={() => setTab('containers')}>Containers</button>
          <button className={`px-4 py-2 rounded ${tab === 'storage' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-200'}`} onClick={() => setTab('storage')}>Storage Distribution</button>
        </div>
        {tab === 'containers' && (
          <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
            {
            loading ? (
              <div className="text-center text-gray-500 py-8">Loading containers...</div>
            ) : containers.length === 0 ? (
              <div className="text-center text-gray-500 py-8">No containers found.</div>
            ) : (
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-2">Name</th>
                    <th className="text-left py-2 px-2">Image</th>
                    <th className="text-left py-2 px-2">State</th>
                    <th className="text-left py-2 px-2">CPU</th>
                    <th className="text-left py-2 px-2">Memory</th>
                    <th className="text-left py-2 px-2">Memory Size</th>
                    <th className="text-left py-2 px-2">Net In</th>
                    <th className="text-left py-2 px-2">Net Out</th>
                  </tr>
                </thead>
                <tbody>
                  {containers.map((c) => {
                    return (
                      <tr key={c.Id} className="border-b hover:bg-blue-50 transition">
                        <td className="py-2 px-2 font-semibold text-blue-700">
                          <Link href={`/containers/${c.Id}`}>{c.Names[0]?.replace(/^\//, '') || c.Id.slice(0, 12)}</Link>
                        </td>
                        <td className="py-2 px-2">{c.Image}</td>
                        <td className="py-2 px-2">{c.Status.includes('Up') ? 'Running' : 'Stopped'}</td>
                        <td className="py-2 px-2">{c.stats ? c.stats.cpu.toFixed(2) + ' %' : '—'}</td>
                        <td className="py-2 px-2">{c.stats ? c.stats.memory.percent.toFixed(2) + ' %' : '—'}</td>
                        <td className="py-2 px-2">{c.stats ? formatBytes(c.stats.memory.usage) + ' / ' + formatBytes(c.stats.memory.limit) : '—'}</td>
                        <td className="py-2 px-2">{c.stats ? formatBytes(c.stats.network.rx) : '—'}</td>
                        <td className="py-2 px-2">{c.stats ? formatBytes(c.stats.network.tx) : '—'}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}
        {tab === 'storage' && (
          <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
            <div className="text-lg font-semibold mb-2">Storage Distribution</div>
            <div>Coming soon: Visualize storage usage by container, volume, and image.</div>
          </div>
        )}
      </div>
    </div>
  );
} 