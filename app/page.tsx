"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface ContainerInfo {
  Id: string;
  Names: string[];
  Image: string;
  State: string;
  Status: string;
}

interface SystemInfo {
  memUsage: {
    total: number;
    free: number;
    used: number;
    usedPercent: number;
  };
  disk: {
    total: number;
    used: number;
    available: number;
    usedPercent: number;
  } | null;
  network: {
    interfaces: string[];
    count: number;
  };
  cpu?: {
    usedPercent: string | number;
  };
}

interface DockerImage {
  Id: string;
  RepoTags: string[];
  Size: number;
  Created: number;
}

function formatBytes(bytes: number) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

// Add helper for category
function getCategory(container: ContainerInfo): string {
  const name = container.Names.join(" ").toLowerCase();
  const image = container.Image.toLowerCase();
  if (/(mysql|postgres|mongo|redis|mariadb|db|database)/.test(name + image)) return "Database";
  if (/(nginx|apache|httpd|web|server)/.test(name + image)) return "Server";
  if (/(vm|virtualmachine|vmachine)/.test(name + image)) return "VMachine";
  return "App";
}

function getCategoryColor(category: string): string {
  if (category === "Database") return "bg-purple-100 text-purple-700";
  if (category === "Server") return "bg-yellow-100 text-yellow-700";
  if (category === "VMachine") return "bg-pink-100 text-pink-700";
  return "bg-blue-100 text-blue-700";
}

function cleanName(name: string): string {
  // Remove slashes, underscores, dashes, and special characters, trim spaces
  return name.replace(/[\/_-]+/g, ' ').replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
}

// Memoized Card Components
const MemoryCard = React.memo(function MemoryCard({ used, total, usedPercent, loading }: { used: number, total: number, usedPercent: number, loading: boolean }) {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-blue-500 hover:shadow-xl transition-all duration-200">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500 rounded-full p-2 shadow-lg">
        {/* Memory Icon */}
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white"><rect x="4" y="7" width="16" height="10" rx="2" strokeWidth="2"/><path strokeWidth="2" d="M8 7V5m8 2V5M8 17v2m8-2v2"/></svg>
      </div>
      <div className="mt-6 text-blue-700 font-bold text-lg mb-1">Memory</div>
      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : (
        <>
          <div className="text-2xl font-extrabold mb-1">{formatBytes(used)}</div>
          <div className="text-xs text-gray-500 mb-1">of {formatBytes(total)}</div>
          <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden mb-1">
            <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${usedPercent}%`, transition: 'width 0.5s' }}></div>
          </div>
          <div className="text-xs text-blue-600 font-semibold">{usedPercent.toFixed(1)}% used</div>
        </>
      )}
    </div>
  );
});

const CpuCard = React.memo(function CpuCard({ usedPercent, loading }: { usedPercent: number, loading: boolean }) {
  return (
    <div className="relative bg-gradient-to-br from-red-50 to-white rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-red-500 hover:shadow-xl transition-all duration-200">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-500 rounded-full p-2 shadow-lg">
        {/* CPU Icon */}
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white"><rect x="4" y="4" width="16" height="16" rx="3" strokeWidth="2"/><path strokeWidth="2" d="M9 9h6v6H9z"/></svg>
      </div>
      <div className="mt-6 text-red-700 font-bold text-lg mb-1">CPU</div>
      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : (
        <>
          <div className="text-2xl font-extrabold mb-1">{usedPercent.toFixed(1)}%</div>
          <div className="w-full h-2 bg-red-100 rounded-full overflow-hidden mb-1">
            <div className="h-full bg-red-500 transition-all duration-500" style={{ width: `${usedPercent}%`, transition: 'width 0.5s' }}></div>
          </div>
          <div className="text-xs text-red-600 font-semibold">CPU Usage</div>
        </>
      )}
    </div>
  );
});

const DiskCard = React.memo(function DiskCard({ used, total, usedPercent, loading }: { used: number, total: number, usedPercent: number, loading: boolean }) {
  return (
    <div className="relative bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-purple-500 hover:shadow-xl transition-all duration-200">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-500 rounded-full p-2 shadow-lg">
        {/* Disk Icon */}
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white"><circle cx="12" cy="12" r="9" strokeWidth="2"/><circle cx="12" cy="12" r="3" strokeWidth="2"/><path strokeWidth="2" d="M12 3v3m0 12v3m9-9h-3M6 12H3"/></svg>
      </div>
      <div className="mt-6 text-purple-700 font-bold text-lg mb-1">Disk</div>
      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : (
        <>
          <div className="text-2xl font-extrabold mb-1">{formatBytes(used)}</div>
          <div className="text-xs text-gray-500 mb-1">of {formatBytes(total)}</div>
          <div className="w-full h-2 bg-purple-100 rounded-full overflow-hidden mb-1">
            <div className="h-full bg-purple-500 transition-all duration-500" style={{ width: `${usedPercent}%`, transition: 'width 0.5s' }}></div>
          </div>
          <div className="text-xs text-purple-600 font-semibold">{usedPercent}% used</div>
        </>
      )}
    </div>
  );
});

const NetworkCard = React.memo(function NetworkCard({ interfaces, count, loading }: { interfaces: string[], count: number, loading: boolean }) {
  return (
    <div className="relative bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-green-500 hover:shadow-xl transition-all duration-200">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 rounded-full p-2 shadow-lg">
        {/* Network Icon */}
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white"><circle cx="12" cy="12" r="9" strokeWidth="2"/><path strokeWidth="2" d="M8 12h8M12 8v8"/></svg>
      </div>
      <div className="mt-6 text-green-700 font-bold text-lg mb-1">Network</div>
      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : (
        <>
          <div className="text-2xl font-extrabold mb-1">{count}</div>
          <div className="text-xs text-gray-500 mb-1">active interfaces</div>
          {/* <div className="text-xs text-gray-400 mt-1 text-center break-words max-w-[90%]">{interfaces.join(", ")}</div> */}
        </>
      )}
    </div>
  );
});

export default function Home() {
  const [containers, setContainers] = useState<ContainerInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null); // container id
  const [system, setSystem] = useState<SystemInfo | null>(null);
  const [systemLoading, setSystemLoading] = useState(true);
  const [images, setImages] = useState<DockerImage[]>([]);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [imagesError, setImagesError] = useState<string | null>(null);
  const router = useRouter();

  const fetchContainers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/docker/containers");
      const data = await res.json();
      if (res.ok) {
        setContainers(data.containers);
      } else {
        setError(data.error || "Failed to fetch containers");
      }
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const fetchSystem = async () => {
    setSystemLoading(true);
    try {
      const res = await fetch("/api/system");
      const data = await res.json();
      if (res.ok) {
        setSystem(data);
      } else {
        setSystem(null);
      }
    } catch {
      setSystem(null);
    } finally {
      setSystemLoading(false);
    }
  };

  const fetchImages = async () => {
    setImagesLoading(true);
    setImagesError(null);
    try {
      const res = await fetch("/api/docker/images");
      const data = await res.json();
      if (res.ok) {
        setImages(data.images);
      } else {
        setImagesError(data.error || "Failed to fetch images");
      }
    } catch (err: any) {
      setImagesError(err.message || "Unknown error");
    } finally {
      setImagesLoading(false);
    }
  };

  // Poll system info every 2 seconds, but only update state if data changed
  useEffect(() => {
    let es: EventSource | null = null;
    let mounted = true;
    if (typeof window !== 'undefined') {
      es = new window.EventSource('/api/system/stream');
      es.onmessage = (event) => {
        if (!mounted) return;
        try {
          const data = JSON.parse(event.data);
          setSystem(prev => {
            if (
              !prev ||
              JSON.stringify(prev.memUsage) !== JSON.stringify(data.memUsage) ||
              JSON.stringify(prev.disk) !== JSON.stringify(data.disk) ||
              JSON.stringify(prev.cpu) !== JSON.stringify(data.cpu) ||
              JSON.stringify(prev.network) !== JSON.stringify(data.network)
            ) {
              return data;
            }
            return prev;
          });
          setSystemLoading(false);
        } catch {
          // ignore
        }
      };
      es.onerror = () => {
        es?.close();
      };
    }
    return () => {
      mounted = false;
      if (es) es.close();
    };
  }, []);

  useEffect(() => {
    fetchContainers();
    fetchImages();
  }, []);

  const getStateBadge = (state: string) => {
    let color = "bg-gray-300 text-gray-800";
    if (state === "running") color = "bg-green-100 text-green-800";
    else if (state === "exited") color = "bg-red-100 text-red-800";
    else if (state === "paused") color = "bg-yellow-100 text-yellow-800";
    return (
      <span className={`px-2 py-1 rounded text-xs font-semibold ${color}`}>{state}</span>
    );
  };

  const showAlert = async (type: "success" | "error", title: string, text?: string) => {
    const swal = (await import("sweetalert2")).default;
    swal.fire({ icon: type, title, text });
  };

  const handleAction = async (id: string, action: "start" | "stop" | "restart" | "remove") => {
    // Confirm for destructive actions
    if (["stop", "restart", "remove"].includes(action)) {
      const swal = (await import("sweetalert2")).default;
      const result = await swal.fire({
        title: `Are you sure?`,
        text: `Do you want to ${action} this container?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: action === "remove" ? "#d33" : "#3085d6",
        cancelButtonColor: "#aaa",
        confirmButtonText: `Yes, ${action}!`,
      });
      if (!result.isConfirmed) return;
    }
    setActionLoading(id + action);
    let method = "POST";
    let endpoint = `/api/docker/containers/${id}/${action}`;
    if (action === "remove") method = "DELETE";
    try {
      const res = await fetch(endpoint, { method });
      const data = await res.json();
      if (!res.ok) {
        await showAlert("error", `Failed to ${action} container`, data.error);
      } else {
        await showAlert("success", `Container ${action}ed!`);
        await fetchContainers();
      }
    } catch (err: any) {
      await showAlert("error", `Failed to ${action} container`, err.message);
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex">
     

      {/* Main Content Wrapper */}
      <div className="w-full ">
        

        {/* System Info Cards */}
        <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 ">
          <MemoryCard
            used={system?.memUsage?.used || 0}
            total={system?.memUsage?.total || 0}
            usedPercent={system?.memUsage?.usedPercent || 0}
            loading={systemLoading}
          />
          <CpuCard
            usedPercent={parseFloat(system?.cpu?.usedPercent as string) || 0}
            loading={systemLoading}
          />
          <DiskCard
            used={system?.disk?.used || 0}
            total={system?.disk?.total || 0}
            usedPercent={system?.disk?.usedPercent || 0}
            loading={systemLoading}
          />
          <NetworkCard
            interfaces={system?.network?.interfaces || []}
            count={system?.network?.count || 0}
            loading={systemLoading}
          />
        </section>

        {/* Main Content */}
        <main className="w-full items-center justify-center p-2 sm:p-6 ">
          <div className="w-full max-w-6xl flex flex-col min-h-[400px] mt-6 sm:mt-8 flex-1">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Running Instances</h2>
            <section className="w-full max-w-6xl mx-auto mt-10 flex flex-col flex-1 px-2">
              {loading ? (
                <div className="text-center text-gray-500 py-8">Loading Active Instances...</div>
              ) : error ? (
                <div className="text-center text-red-600 py-8">{error}</div>
              ) : containers.filter(c => c.State === 'running').length === 0 ? (
                <div className="text-center py-6 text-gray-500 bg-white rounded-xl shadow">No running instances found.</div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                  {containers.filter(c => c.State === 'running').map((container) => {
                    const category = getCategory(container);
                    const categoryColor = getCategoryColor(category);
                    const clean = cleanName(container.Names[0] || '').substring(0, 15);
                    return (
                      <div
                        key={container.Id}
                        className="flex flex-col bg-white rounded-lg shadow p-4 min-h-[80px] border border-gray-100 cursor-pointer hover:bg-blue-50 transition"
                        tabIndex={0}
                        role="button"
                        title="View details"
                        onClick={() => router.push(`/containers/${container.Id}`)}
                        onKeyDown={e => { if (e.key === "Enter") router.push(`/containers/${container.Id}`); }}
                      >
                        <div className="text-base font-semibold text-gray-800 mb-1 truncate" title={clean}>{clean}</div>
                        <div className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${categoryColor}`}>{category}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </div>
        </main>

      

      </div>
    </div>
  );
}
