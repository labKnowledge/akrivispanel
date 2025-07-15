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
  Ports?: any[];
  stats?: {
    cpu?: number;
    memory?: {
      usage: number;
      limit: number;
      percent: number;
    };
    network?: {
      rx: number;
      tx: number;
    };
  };
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
  gpu?: any; // Added for GPU info
  uptime?: number;
  loadavg?: number[];
  temperature?: {
    cpu: number | null;
    gpu: (number | null)[];
  };
  swap?: {
    total: number;
    used: number;
    free: number;
    usedPercent: number;
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
  if (/(mysql|postgres|mongo|redis|mariadb|db|database)/.test(name + image))
    return "Database";
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
  return name
    .replace(/[\/_-]+/g, " ")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Memoized Card Components
const MemoryCard = React.memo(function MemoryCard({
  used,
  total,
  usedPercent,
  loading,
}: {
  used: number;
  total: number;
  usedPercent: number;
  loading: boolean;
}) {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-blue-500 hover:shadow-xl transition-all duration-200">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-500 rounded-full p-2 shadow-lg">
        {/* Memory Icon */}
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <rect x="4" y="7" width="16" height="10" rx="2" strokeWidth="2" />
          <path strokeWidth="2" d="M8 7V5m8 2V5M8 17v2m8-2v2" />
        </svg>
      </div>
      <div className="mt-6 text-blue-700 font-bold text-lg mb-1">Memory</div>
      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : (
        <>
          <div className="text-2xl font-extrabold mb-1">
            {formatBytes(used)}
          </div>
          <div className="text-xs text-gray-500 mb-1">
            of {formatBytes(total)}
          </div>
          <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden mb-1">
            <div
              className="h-full bg-blue-500 transition-all duration-500"
              style={{ width: `${usedPercent}%`, transition: "width 0.5s" }}
            ></div>
          </div>
          <div className="text-xs text-blue-600 font-semibold">
            {usedPercent.toFixed(1)}% used
          </div>
        </>
      )}
    </div>
  );
});

const CpuCard = React.memo(function CpuCard({
  usedPercent,
  loading,
}: {
  usedPercent: number;
  loading: boolean;
}) {
  return (
    <div className="relative bg-gradient-to-br from-red-50 to-white rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-red-500 hover:shadow-xl transition-all duration-200">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-500 rounded-full p-2 shadow-lg">
        {/* CPU Icon */}
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <rect x="4" y="4" width="16" height="16" rx="3" strokeWidth="2" />
          <path strokeWidth="2" d="M9 9h6v6H9z" />
        </svg>
      </div>
      <div className="mt-6 text-red-700 font-bold text-lg mb-1">CPU</div>
      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : (
        <>
          <div className="text-2xl font-extrabold mb-1">
            {usedPercent.toFixed(1)}%
          </div>
          <div className="w-full h-2 bg-red-100 rounded-full overflow-hidden mb-1">
            <div
              className="h-full bg-red-500 transition-all duration-500"
              style={{ width: `${usedPercent}%`, transition: "width 0.5s" }}
            ></div>
          </div>
          <div className="text-xs text-red-600 font-semibold">CPU Usage</div>
        </>
      )}
    </div>
  );
});

const DiskCard = React.memo(function DiskCard({
  used,
  total,
  usedPercent,
  loading,
}: {
  used: number;
  total: number;
  usedPercent: number;
  loading: boolean;
}) {
  return (
    <div className="relative bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-purple-500 hover:shadow-xl transition-all duration-200">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-500 rounded-full p-2 shadow-lg">
        {/* Disk Icon */}
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <circle cx="12" cy="12" r="9" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
          <path strokeWidth="2" d="M12 3v3m0 12v3m9-9h-3M6 12H3" />
        </svg>
      </div>
      <div className="mt-6 text-purple-700 font-bold text-lg mb-1">Disk</div>
      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : (
        <>
          <div className="text-2xl font-extrabold mb-1">
            {formatBytes(used)}
          </div>
          <div className="text-xs text-gray-500 mb-1">
            of {formatBytes(total)}
          </div>
          <div className="w-full h-2 bg-purple-100 rounded-full overflow-hidden mb-1">
            <div
              className="h-full bg-purple-500 transition-all duration-500"
              style={{ width: `${usedPercent}%`, transition: "width 0.5s" }}
            ></div>
          </div>
          <div className="text-xs text-purple-600 font-semibold">
            {usedPercent}% used
          </div>
        </>
      )}
    </div>
  );
});

const NetworkCard = React.memo(function NetworkCard({
  interfaces,
  count,
  loading,
}: {
  interfaces: string[];
  count: number;
  loading: boolean;
}) {
  return (
    <div className="relative bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-green-500 hover:shadow-xl transition-all duration-200">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 rounded-full p-2 shadow-lg">
        {/* Network Icon */}
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <circle cx="12" cy="12" r="9" strokeWidth="2" />
          <path strokeWidth="2" d="M8 12h8M12 8v8" />
        </svg>
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

// GPU Card
const GpuCard = React.memo(function GpuCard({
  gpu,
  loading,
}: {
  gpu: any;
  loading: boolean;
}) {
  return (
    <div className="relative bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-yellow-500 hover:shadow-xl transition-all duration-200">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-500 rounded-full p-2 shadow-lg">
        {/* GPU Icon */}
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <rect x="3" y="7" width="18" height="10" rx="2" strokeWidth="2" />
          <path strokeWidth="2" d="M7 7V5m10 2V5M7 17v2m10-2v2" />
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
        </svg>
      </div>
      <div className="mt-6 text-yellow-700 font-bold text-lg mb-1">GPU</div>
      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : !gpu ? (
        <div className="text-gray-400">No GPU detected</div>
      ) : Array.isArray(gpu) && gpu.length === 0 ? (
        <div className="text-gray-400">No GPU detected</div>
      ) : (
        <div className="w-full flex flex-col gap-2">
          {gpu.map((g: any, idx: number) => (
            <div
              key={idx}
              className="w-full bg-yellow-100 rounded p-2 mb-1 flex flex-col items-center"
            >
              <div className="text-xs text-yellow-700 font-semibold mb-1">
                GPU {idx + 1}
              </div>
              <div className="text-sm font-bold text-yellow-800 mb-1">
                {g.utilization}% Utilization
              </div>
              <div className="w-full h-2 bg-yellow-200 rounded-full overflow-hidden mb-1">
                <div
                  className="h-full bg-yellow-500 transition-all duration-500"
                  style={{
                    width: `${g.utilization}%`,
                    transition: "width 0.5s",
                  }}
                ></div>
              </div>
              <div className="text-xs text-gray-600">
                {formatBytes(g.memory.used)} / {formatBytes(g.memory.total)} (
                {g.memory.usedPercent.toFixed(1)}%)
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

// Uptime Card
const UptimeCard = React.memo(function UptimeCard({
  uptime,
  loading,
}: {
  uptime: number;
  loading: boolean;
}) {
  function formatUptime(seconds: number) {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return [
      d > 0 ? `${d}d` : null,
      h > 0 ? `${h}h` : null,
      m > 0 ? `${m}m` : null,
      s > 0 && d === 0 ? `${s}s` : null,
    ]
      .filter(Boolean)
      .join(" ");
  }
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-gray-500 hover:shadow-xl transition-all duration-200">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-500 rounded-full p-2 shadow-lg">
        {/* Uptime Icon */}
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <circle cx="12" cy="12" r="9" strokeWidth="2" />
          <path strokeWidth="2" d="M12 7v5l3 3" />
        </svg>
      </div>
      <div className="mt-6 text-gray-700 font-bold text-lg mb-1">Uptime</div>
      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : (
        <div className="text-2xl font-extrabold mb-1">
          {formatUptime(uptime)}
        </div>
      )}
    </div>
  );
});

// Load Average Card
const LoadAvgCard = React.memo(function LoadAvgCard({
  loadavg,
  loading,
}: {
  loadavg: number[];
  loading: boolean;
}) {
  function getColor(val: number) {
    if (val < 1) return "text-green-700";
    if (val < 2) return "text-yellow-700";
    return "text-red-700";
  }
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-indigo-500 hover:shadow-xl transition-all duration-200">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-indigo-500 rounded-full p-2 shadow-lg">
        {/* Load Icon */}
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path strokeWidth="2" d="M4 17h16M4 13h16M4 9h16" />
        </svg>
      </div>
      <div className="mt-6 text-indigo-700 font-bold text-lg mb-1">
        Load Avg
      </div>
      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : (
        <div className="flex flex-col items-center gap-1">
          <div className={getColor(loadavg[0]) + " text-lg font-bold"}>
            1m: {loadavg[0].toFixed(2)}
          </div>
          <div className={getColor(loadavg[1]) + " text-sm"}>
            5m: {loadavg[1].toFixed(2)}
          </div>
          <div className={getColor(loadavg[2]) + " text-sm"}>
            15m: {loadavg[2].toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
});

// Temperature Card
const TemperatureCard = React.memo(function TemperatureCard({
  temperature,
  loading,
}: {
  temperature: { cpu: number | null; gpu: number[] | null };
  loading: boolean;
}) {
  function getColor(temp: number | null) {
    if (temp == null) return "text-gray-400";
    if (temp < 60) return "text-green-700";
    if (temp < 80) return "text-yellow-700";
    return "text-red-700";
  }
  return (
    <div className="relative bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-orange-500 hover:shadow-xl transition-all duration-200">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-500 rounded-full p-2 shadow-lg">
        {/* Temp Icon */}
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <rect x="9" y="2" width="6" height="12" rx="3" strokeWidth="2" />
          <path strokeWidth="2" d="M12 14v6" />
          <circle cx="12" cy="20" r="2" strokeWidth="2" />
        </svg>
      </div>
      <div className="mt-6 text-orange-700 font-bold text-lg mb-1">
        Temperature
      </div>
      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : (
        <div className="flex flex-col items-center gap-1 w-full">
          <div className={getColor(temperature.cpu) + " text-base font-bold"}>
            CPU:{" "}
            {temperature.cpu != null
              ? `${temperature.cpu.toFixed(1)}°C`
              : "N/A"}
          </div>
          {Array.isArray(temperature.gpu) && temperature.gpu.length > 0 ? (
            temperature.gpu.map((t, i) => (
              <div key={i} className={getColor(t) + " text-sm"}>
                GPU {i + 1}: {t != null ? `${t}°C` : "N/A"}
              </div>
            ))
          ) : (
            <div className="text-gray-400 text-sm">GPU: N/A</div>
          )}
        </div>
      )}
    </div>
  );
});

// Swap Card
const SwapCard = React.memo(function SwapCard({
  swap,
  loading,
}: {
  swap: {
    total: number;
    used: number;
    free: number;
    usedPercent: number;
  } | null;
  loading: boolean;
}) {
  return (
    <div className="relative bg-gradient-to-br from-pink-50 to-white rounded-xl shadow-lg p-5 flex flex-col items-center border-t-4 border-pink-500 hover:shadow-xl transition-all duration-200">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-pink-500 rounded-full p-2 shadow-lg">
        {/* Swap Icon */}
        <svg
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <rect x="4" y="7" width="16" height="10" rx="2" strokeWidth="2" />
          <path strokeWidth="2" d="M8 7V5m8 2V5M8 17v2m8-2v2" />
          <path strokeWidth="2" d="M12 12h0" />
        </svg>
      </div>
      <div className="mt-6 text-pink-700 font-bold text-lg mb-1">Swap</div>
      {loading ? (
        <div className="text-gray-400">Loading...</div>
      ) : !swap ? (
        <div className="text-gray-400">N/A</div>
      ) : (
        <>
          <div className="text-2xl font-extrabold mb-1">
            {formatBytes(swap.used)}
          </div>
          <div className="text-xs text-gray-500 mb-1">
            of {formatBytes(swap.total)}
          </div>
          <div className="w-full h-2 bg-pink-100 rounded-full overflow-hidden mb-1">
            <div
              className="h-full bg-pink-500 transition-all duration-500"
              style={{
                width: `${swap.usedPercent}%`,
                transition: "width 0.5s",
              }}
            ></div>
          </div>
          <div className="text-xs text-pink-600 font-semibold">
            {swap.usedPercent.toFixed(1)}% used
          </div>
        </>
      )}
    </div>
  );
});

export default function Page() {
  const [containers, setContainers] = useState<ContainerInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [system, setSystem] = useState<SystemInfo | null>(null);
  const [systemLoading, setSystemLoading] = useState(true);
  const [images, setImages] = useState<DockerImage[]>([]);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [imagesError, setImagesError] = useState<string | null>(null);
  const router = useRouter();

  // Remove all client-side cookie checks and redirects

  useEffect(() => {
    // SSE for containers
    setLoading(true);
    setError(null);
    if (typeof window === "undefined") return;
    const es = new window.EventSource("/api/docker/containers/stream");
    es.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setContainers(data.containers || []);
        setLoading(false);
      } catch (e) {
        setError("Failed to parse container data");
        setLoading(false);
      }
    };
    es.onerror = () => {
      setError("Failed to connect to container stream");
      setLoading(false);
      es.close();
    };
    return () => {
      es.close();
    };
  }, []);

  useEffect(() => {
    // SSE for system info
    setSystemLoading(true);
    if (typeof window === "undefined") return;
    const es = new window.EventSource("/api/system/stream");
    es.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setSystem(data);
        setSystemLoading(false);
      } catch (e) {
        setError("Failed to parse system info");
        setSystemLoading(false);
      }
    };
    es.onerror = () => {
      setError("Failed to connect to system info stream");
      setSystemLoading(false);
      es.close();
    };
    return () => {
      es.close();
    };
  }, []);

  useEffect(() => {
    // SSE for images
    setImagesLoading(true);
    if (typeof window === "undefined") return;
    const es = new window.EventSource("/api/docker/images/stream");
    es.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setImages(data.images || []);
        setImagesLoading(false);
      } catch (e) {
        setImagesError("Failed to parse images data");
        setImagesLoading(false);
      }
    };
    es.onerror = () => {
      setImagesError("Failed to connect to images stream");
      setImagesLoading(false);
      es.close();
    };
    return () => {
      es.close();
    };
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex">
      {/* Header removed: now global */}
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
          <GpuCard gpu={system?.gpu} loading={systemLoading} />
          <UptimeCard uptime={system?.uptime || 0} loading={systemLoading} />
          <LoadAvgCard
            loadavg={system?.loadavg || [0, 0, 0]}
            loading={systemLoading}
          />
          <TemperatureCard
            temperature={{
              cpu: system?.temperature?.cpu ?? null,
              gpu: Array.isArray(system?.temperature?.gpu)
                ? system.temperature.gpu.filter(
                    (g: any) => typeof g === "number",
                  )
                : null,
            }}
            loading={systemLoading}
          />
          <SwapCard swap={system?.swap || null} loading={systemLoading} />
        </section>

        {/* Main Content */}
        <main className="w-full items-center justify-center p-2 sm:p-6 ">
          <div className="w-full max-w-6xl flex flex-col min-h-[400px] mt-6 sm:mt-8 flex-1">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Running Instances
            </h2>
            <section className="w-full max-w-6xl mx-auto mt-10 flex flex-col flex-1 px-2">
              {loading ? (
                <div className="text-center text-gray-500 py-8">
                  Loading Active Instances...
                </div>
              ) : error ? (
                <div className="text-center text-red-600 py-8">{error}</div>
              ) : Array.isArray(containers) &&
                containers.filter((c) => c.State === "running").length === 0 ? (
                <div className="text-center py-6 text-gray-500 bg-white rounded-xl shadow">
                  No running instances found.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                  {Array.isArray(containers) &&
                    containers
                      .filter((c) => c.State === "running")
                      .map((container) => {
                        const category = getCategory(container);
                        const categoryColor = getCategoryColor(category);
                        const clean = cleanName(
                          container.Names[0] || "",
                        ).substring(0, 15);
                        return (
                          <div
                            key={container.Id}
                            className="flex flex-col bg-white rounded-lg shadow p-4 min-h-[80px] border border-gray-100 cursor-pointer hover:bg-blue-50 transition"
                            tabIndex={0}
                            role="button"
                            title="View details"
                            onClick={() =>
                              router.push(`/containers/${container.Id}`)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter")
                                router.push(`/containers/${container.Id}`);
                            }}
                          >
                            <div
                              className="text-base font-semibold text-gray-800 mb-1 truncate"
                              title={clean}
                            >
                              {clean}
                            </div>
                            <div
                              className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${categoryColor}`}
                            >
                              {category}
                            </div>
                            {/* Live stats */}
                            <div className="mt-2 text-xs text-gray-600">
                              <div>
                                CPU:{" "}
                                {container.stats?.cpu !== undefined
                                  ? `${container.stats.cpu.toFixed(2)}%`
                                  : "N/A"}
                              </div>
                              <div>
                                Mem:{" "}
                                {container.stats?.memory
                                  ? `${formatBytes(container.stats.memory.usage)} / ${formatBytes(container.stats.memory.limit)} (${container.stats.memory.percent.toFixed(2)}%)`
                                  : "N/A"}
                              </div>
                              <div>
                                Net: RX{" "}
                                {container.stats?.network
                                  ? formatBytes(container.stats.network.rx)
                                  : "N/A"}{" "}
                                / TX{" "}
                                {container.stats?.network
                                  ? formatBytes(container.stats.network.tx)
                                  : "N/A"}
                              </div>
                            </div>
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
