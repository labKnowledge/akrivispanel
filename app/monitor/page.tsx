"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ContainerInfo {
  Id: string;
  Names: string[];
  Image: string;
  State: string;
  Status: string;
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

  // Fetch containers once
  useEffect(() => {
    const fetchContainers = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/docker/containers');
        const data = await res.json();
        setContainers(data.containers || []);
      } finally {
        setLoading(false);
      }
    };
    fetchContainers();
  }, []);

  // Poll stats for each container
  useEffect(() => {
    let mounted = true;
    let interval: NodeJS.Timeout;
    const pollStats = async () => {
      const newStats: Record<string, ContainerStats | null> = {};
      await Promise.all(containers.map(async (c) => {
        try {
          const res = await fetch(`/api/docker/containers/${c.Id}/stats`);
          const data = await res.json();
          newStats[c.Id] = data;
        } catch {
          newStats[c.Id] = null;
        }
      }));
      if (mounted) setStats(newStats);
    };
    if (containers.length > 0) {
      pollStats();
      interval = setInterval(pollStats, 2000);
    }
    return () => {
      mounted = false;
      if (interval) clearInterval(interval);
    };
  }, [containers]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center">
      <div className="w-full max-w-6xl mt-8">
        <h1 className="text-2xl font-bold mb-6">Monitoring</h1>
        <div className="flex gap-4 mb-6">
          <button className={`px-4 py-2 rounded ${tab === 'containers' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-200'}`} onClick={() => setTab('containers')}>Containers</button>
          <button className={`px-4 py-2 rounded ${tab === 'storage' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-200'}`} onClick={() => setTab('storage')}>Storage Distribution</button>
        </div>
        {tab === 'containers' && (
          <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
            {loading ? (
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
                    const s = stats[c.Id];
                    return (
                      <tr key={c.Id} className="border-b hover:bg-blue-50 transition">
                        <td className="py-2 px-2 font-semibold text-blue-700">
                          <Link href={`/containers/${c.Id}`}>{c.Names[0]?.replace(/^\//, '') || c.Id.slice(0, 12)}</Link>
                        </td>
                        <td className="py-2 px-2">{c.Image}</td>
                        <td className="py-2 px-2">{c.State}</td>
                        <td className="py-2 px-2">{s ? s.cpu.toFixed(2) + ' %' : '—'}</td>
                        <td className="py-2 px-2">{s ? s.memory.percent.toFixed(2) + ' %' : '—'}</td>
                        <td className="py-2 px-2">{s ? formatBytes(s.memory.usage) + ' / ' + formatBytes(s.memory.limit) : '—'}</td>
                        <td className="py-2 px-2">{s ? formatBytes(s.network.rx) : '—'}</td>
                        <td className="py-2 px-2">{s ? formatBytes(s.network.tx) : '—'}</td>
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