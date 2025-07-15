"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

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
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

function StorageBar({
  value,
  max,
  color = "bg-blue-400",
}: {
  value: number;
  max: number;
  color?: string;
}) {
  const width = max > 0 ? Math.max(2, (value / max) * 100) : 0;
  return (
    <div className="w-full h-3 bg-gray-100 rounded">
      <div className={`h-3 rounded ${color}`} style={{ width: `${width}%` }} />
    </div>
  );
}

function StorageBarChart({
  data,
  labelKey,
  valueKey,
  color,
}: {
  data: any[];
  labelKey: string;
  valueKey: string;
  color: string;
}) {
  if (!data || data.length === 0)
    return <div className="text-gray-400 text-sm">No data.</div>;
  const max = Math.max(...data.map((item) => item[valueKey] || 0), 1);
  return (
    <div className="space-y-3">
      {data
        .sort((a, b) => (b[valueKey] || 0) - (a[valueKey] || 0))
        .map((item, idx) => {
          const value = item[valueKey] || 0;
          const width = max > 0 ? Math.max(4, (value / max) * 100) : 0;
          return (
            <div
              key={item.Id || item.Name || idx}
              className="flex items-center gap-3"
            >
              <span
                className="w-36 truncate text-sm font-medium text-gray-700"
                title={item[labelKey]}
              >
                {item[labelKey]}
              </span>
              <div className="flex-1 h-5 bg-gray-100 rounded-full relative overflow-hidden">
                <div
                  className={`h-5 rounded-full transition-all duration-300 ${color}`}
                  style={{ width: `${width}%` }}
                />
                <span className="absolute right-3 top-0 h-5 flex items-center text-xs font-semibold text-gray-700">
                  {formatBytes(value)}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
}

function LiveIndicator() {
  return (
    <span className="inline-flex items-center gap-1 ml-2">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span className="text-xs text-green-600 font-semibold">Live</span>
    </span>
  );
}

export default function MonitoringPage() {
  const [tab, setTab] = useState<"containers" | "storage">("containers");
  const [containers, setContainers] = useState<ContainerInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [storageData, setStorageData] = useState<any>(null);
  const [storageLoading, setStorageLoading] = useState(false);
  const [storageError, setStorageError] = useState<string | null>(null);
  const [showBackendErrors, setShowBackendErrors] = useState(true);
  const storageEventSourceRef = useRef<EventSource | null>(null);

  // Fetch containers once for initial load (optional, can be removed if SSE is fast enough)
  useEffect(() => {
    setLoading(true);
    fetch("/api/docker/containers")
      .then((res) => res.json())
      .then((data) => setContainers(data.containers || []))
      .finally(() => setLoading(false));
  }, []);

  // SSE for real-time container updates
  useEffect(() => {
    if (tab !== "containers") return;
    setLoading(false);
    if (typeof window === "undefined") return;
    // For local testing, use the full URL to port 3001. Revert to relative path for production.
    const es = new window.EventSource("/api/docker/containers/stream");
    es.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        // Map backend fields to frontend expected fields
        setContainers(data.containers);
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

  // Real-time streaming for storage tab
  useEffect(() => {
    if (tab !== "storage") return;
    setStorageLoading(true);
    setStorageError(null);
    setStorageData(null);
    setShowBackendErrors(true);
    if (typeof window === "undefined") return;
    const es = new window.EventSource(
      "/api/docker/storage-distribution/stream",
    );
    storageEventSourceRef.current = es;
    es.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setStorageData(data);
        setStorageLoading(false);
      } catch (e) {
        // ignore
      }
    };
    es.addEventListener("error", (event: any) => {
      setStorageError("Failed to fetch storage data (stream error)");
      setStorageLoading(false);
      es.close();
    });
    return () => {
      es.close();
      storageEventSourceRef.current = null;
    };
  }, [tab]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 items-center">
      <div className="w-full max-w-8xl mt-8">
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${tab === "containers" ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-blue-200"}`}
            onClick={() => setTab("containers")}
          >
            Containers
          </button>
          <button
            className={`px-4 py-2 rounded ${tab === "storage" ? "bg-blue-600 text-white" : "bg-white text-blue-600 border border-blue-200"}`}
            onClick={() => setTab("storage")}
          >
            Storage Distribution
          </button>
        </div>
        {tab === "containers" && (
          <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
            {loading ? (
              <div className="text-center text-gray-500 py-8">
                Loading containers...
              </div>
            ) : containers.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                No containers found.
              </div>
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
                      <tr
                        key={c.Id}
                        className="border-b hover:bg-blue-50 transition"
                      >
                        <td className="py-2 px-2 font-semibold text-blue-700">
                          <Link href={`/containers/${c.Id}`}>
                            {c.Names[0]?.replace(/^\//, "") ||
                              c.Id.slice(0, 12)}
                          </Link>
                        </td>
                        <td className="py-2 px-2">{c.Image}</td>
                        <td className="py-2 px-2">
                          {c.Status.includes("Up") ? "Running" : "Stopped"}
                        </td>
                        <td className="py-2 px-2">
                          {c.stats ? c.stats.cpu.toFixed(2) + " %" : "—"}
                        </td>
                        <td className="py-2 px-2">
                          {c.stats
                            ? c.stats.memory.percent.toFixed(2) + " %"
                            : "—"}
                        </td>
                        <td className="py-2 px-2">
                          {c.stats
                            ? formatBytes(c.stats.memory.usage) +
                              " / " +
                              formatBytes(c.stats.memory.limit)
                            : "—"}
                        </td>
                        <td className="py-2 px-2">
                          {c.stats ? formatBytes(c.stats.network.rx) : "—"}
                        </td>
                        <td className="py-2 px-2">
                          {c.stats ? formatBytes(c.stats.network.tx) : "—"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}
        {tab === "storage" && (
          <div className="bg-white rounded-xl shadow p-8 text-gray-700">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold text-blue-800">
                Storage Distribution
              </div>
              {!storageLoading && !storageError && <LiveIndicator />}
            </div>
            {storageLoading ? (
              <div className="text-center text-gray-500 py-8">
                Loading storage data...
              </div>
            ) : storageError ? (
              <div className="text-center text-red-600 py-8 font-semibold bg-red-50 rounded-lg border border-red-200">
                {storageError}
              </div>
            ) : !storageData ? (
              <div className="text-center text-gray-500 py-8">
                No storage data found.
              </div>
            ) : (
              <>
                {/* Backend errors from stream */}
                {showBackendErrors &&
                  storageData.errors &&
                  storageData.errors.length > 0 && (
                    <div className="mb-4">
                      <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg px-4 py-2 flex items-center justify-between">
                        <div>
                          <b>Backend warnings:</b>{" "}
                          {storageData.errors.join("; ")}
                        </div>
                        <button
                          className="ml-4 text-yellow-700 hover:underline text-xs"
                          onClick={() => setShowBackendErrors(false)}
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Images */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow p-6 flex flex-col">
                    <div className="text-blue-700 font-semibold text-lg mb-4 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <rect
                          x="3"
                          y="7"
                          width="18"
                          height="10"
                          rx="2"
                          strokeWidth="2"
                        />
                        <path strokeWidth="2" d="M7 7V5m10 2V5M7 17v2m10-2v2" />
                      </svg>
                      Images
                    </div>
                    {storageData.images && storageData.images.length > 0 ? (
                      <StorageBarChart
                        data={storageData.images.map((img: any) => ({
                          ...img,
                          label: img.RepoTags?.[0] || "<none>",
                        }))}
                        labelKey="label"
                        valueKey="Size"
                        color="bg-blue-400"
                      />
                    ) : (
                      <div className="text-gray-400 text-sm">No data.</div>
                    )}
                  </div>
                  {/* Volumes */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow p-6 flex flex-col">
                    <div className="text-green-700 font-semibold text-lg mb-4 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <rect
                          x="4"
                          y="7"
                          width="16"
                          height="10"
                          rx="2"
                          strokeWidth="2"
                        />
                        <path strokeWidth="2" d="M8 7V5m8 2V5M8 17v2m8-2v2" />
                      </svg>
                      Volumes
                    </div>
                    {storageData.volumes && storageData.volumes.length > 0 ? (
                      <StorageBarChart
                        data={storageData.volumes.map((vol: any) => ({
                          ...vol,
                          label: vol.Name,
                          Size: vol.size || 0,
                        }))}
                        labelKey="label"
                        valueKey="Size"
                        color="bg-green-400"
                      />
                    ) : (
                      <div className="text-gray-400 text-sm">No data.</div>
                    )}
                  </div>
                  {/* Containers */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow p-6 flex flex-col">
                    <div className="text-purple-700 font-semibold text-lg mb-4 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <rect
                          x="3"
                          y="7"
                          width="18"
                          height="10"
                          rx="2"
                          strokeWidth="2"
                        />
                        <path strokeWidth="2" d="M7 7V5m10 2V5M7 17v2m10-2v2" />
                      </svg>
                      Containers
                    </div>
                    {storageData.containers &&
                    storageData.containers.length > 0 ? (
                      <StorageBarChart
                        data={storageData.containers.map((c: any) => ({
                          ...c,
                          label:
                            c.Names?.[0]?.replace(/^\/\//, "") ||
                            c.Id.slice(0, 12),
                          Size: (c.SizeRootFs || 0) + (c.SizeRw || 0),
                        }))}
                        labelKey="label"
                        valueKey="Size"
                        color="bg-purple-400"
                      />
                    ) : (
                      <div className="text-gray-400 text-sm">No data.</div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
