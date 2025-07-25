"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

interface ContainerInfo {
  Id: string;
  Names: string[];
  Image: string;
  State: string;
  Status: string;
}

function cleanName(name: string): string {
  return name
    .replace(/[\/_-]+/g, " ")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
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

function formatBytes(bytes: number) {
  if (typeof bytes !== "number" || isNaN(bytes)) return "N/A";
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

const ContainerTerminal = dynamic(() => import("./Terminal"), { ssr: false });

export default function ContainerDetailsPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [container, setContainer] = useState<ContainerInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<"overview" | "logs" | "inspect" | "terminal">(
    "overview",
  );
  const [logs, setLogs] = useState<string>("");
  const [logsLoading, setLogsLoading] = useState(false);
  const [logsError, setLogsError] = useState<string | null>(null);
  const [inspect, setInspect] = useState<any>(null);
  const [inspectLoading, setInspectLoading] = useState(false);
  const [inspectError, setInspectError] = useState<string | null>(null);
  const [stats, setStats] = useState<any>(null);
  const [statsLoading, setStatsLoading] = useState(false);
  const [statsError, setStatsError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContainer() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/docker/containers`);
        const data = await res.json();
        if (res.ok) {
          const found = data.containers.find((c: ContainerInfo) => c.Id === id);
          setContainer(found || null);
          if (!found) setError("Container not found");
        } else {
          setError(data.error || "Failed to fetch container");
        }
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchContainer();
  }, [id]);

  // Fetch logs
  useEffect(() => {
    if (tab === "logs" && id) {
      setLogsLoading(true);
      setLogsError(null);
      fetch(`/api/docker/containers/${id}/logs`)
        .then((res) => res.json())
        .then((data) => {
          if (data.logs) setLogs(data.logs);
          else setLogsError(data.error || "Failed to fetch logs");
        })
        .catch((err) => setLogsError(err.message || "Unknown error"))
        .finally(() => setLogsLoading(false));
    }
  }, [tab, id]);

  // Fetch inspect and stats for overview
  useEffect(() => {
    if (tab === "overview" && id) {
      setInspectLoading(true);
      setInspectError(null);
      fetch(`/api/docker/containers/${id}/inspect`)
        .then((res) => res.json())
        .then((data) => {
          if (data.inspect) setInspect(data.inspect);
          else setInspectError(data.error || "Failed to fetch inspect data");
        })
        .catch((err) => setInspectError(err.message || "Unknown error"))
        .finally(() => setInspectLoading(false));
      setStatsLoading(true);
      setStatsError(null);
      fetch(`/api/docker/containers/${id}/stats`)
        .then((res) => res.json())
        .then((data) => {
          if (data.cpu !== undefined) setStats(data);
          else setStatsError(data.error || "Failed to fetch stats");
        })
        .catch((err) => setStatsError(err.message || "Unknown error"))
        .finally(() => setStatsLoading(false));
    }
  }, [tab, id]);

  if (loading)
    return (
      <div className="text-center text-gray-500 py-8">
        Loading container details...
      </div>
    );
  if (error || !container)
    return (
      <div className="text-center text-red-600 py-8">
        {error || "Container not found."}
      </div>
    );

  const clean = cleanName(container.Names[0] || "");
  const category = getCategory(container);
  const categoryColor = getCategoryColor(category);

  return (
    <div className="w-full  px-2">
      <div className="w-full bg-white rounded-xl shadow-lg p-8 border border-gray-100 flex flex-col">
        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b pb-2 w-full">
          <button
            className={`px-3 py-1 font-medium rounded-t ${tab === "overview" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100 text-gray-600"}`}
            onClick={() => setTab("overview")}
          >
            Overview
          </button>
          <button
            className={`px-3 py-1 font-medium rounded-t ${tab === "logs" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100 text-gray-600"}`}
            onClick={() => setTab("logs")}
          >
            Logs
          </button>
          <button
            className={`px-3 py-1 font-medium rounded-t ${tab === "inspect" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100 text-gray-600"}`}
            onClick={() => setTab("inspect")}
          >
            Inspect
          </button>
          <button
            className={`px-3 py-1 font-medium rounded-t ${tab === "terminal" ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100 text-gray-600"}`}
            onClick={() => setTab("terminal")}
          >
            Terminal
          </button>
        </div>
        {/* Tab Content */}
        <div className="flex-1 overflow-auto">
          {tab === "overview" && (
            <div className="h-full">
              <div className="w-full text-2xl font-bold text-gray-800 mb-2">
                {clean}
              </div>
              <div
                className={`inline-block mb-4 px-3 py-1 rounded text-sm font-semibold ${categoryColor}`}
              >
                {category}
              </div>
              <div className="mb-2">
                <span className="font-semibold text-gray-600">Image:</span>{" "}
                <span className="text-gray-800">{container.Image}</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-gray-600">State:</span>{" "}
                <span className="text-gray-800">{container.State}</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-gray-600">Status:</span>{" "}
                <span className="text-gray-800">{container.Status}</span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-gray-600">ID:</span>{" "}
                <span className="text-gray-800">{container.Id}</span>
              </div>
              {/* URL (Port Mapping) */}
              {inspect &&
                inspect.NetworkSettings &&
                inspect.NetworkSettings.Ports &&
                Object.keys(inspect.NetworkSettings.Ports).length > 0 &&
                (() => {
                  const portEntry = Object.entries(
                    inspect.NetworkSettings.Ports,
                  ).find(
                    ([, v]) =>
                      Array.isArray(v) && v.length > 0 && v[0].HostPort,
                  );
                  if (portEntry) {
                    const [containerPort, arrRaw] = portEntry;
                    const arr = arrRaw as any[];
                    const hostPort = arr[0].HostPort;
                    return (
                      <div className="mb-2">
                        <span className="font-semibold text-gray-600">
                          URL:
                        </span>{" "}
                        <a
                          href={`http://127.0.0.1:${hostPort}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline ml-1"
                        >
                          http://127.0.0.1:{hostPort}
                        </a>
                      </div>
                    );
                  }
                  return null;
                })()}
              {/* CPU, Memory, Storage Usage */}
              <div className="mb-2">
                <span className="font-semibold text-gray-600">CPU Usage:</span>{" "}
                <span className="text-gray-800">
                  {statsLoading
                    ? "Loading..."
                    : statsError
                      ? statsError
                      : stats
                        ? stats.cpu.toFixed(2) + " %"
                        : "N/A"}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-gray-600">
                  Memory Usage:
                </span>{" "}
                <span className="text-gray-800">
                  {statsLoading
                    ? "Loading..."
                    : statsError
                      ? statsError
                      : stats
                        ? `${formatBytes(stats.memory.usage)} / ${formatBytes(stats.memory.limit)} (${stats.memory.percent.toFixed(2)}%)`
                        : "N/A"}
                </span>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-gray-600">
                  Storage Usage:
                </span>{" "}
                <span className="text-gray-800">
                  {inspect &&
                  (inspect.SizeRootFs !== undefined ||
                    inspect.SizeRw !== undefined)
                    ? `RootFs: ${formatBytes(inspect.SizeRootFs)} | RW: ${formatBytes(inspect.SizeRw)}`
                    : "N/A"}
                </span>
              </div>
            </div>
          )}
          {tab === "logs" && (
            <div className="mt-2">
              {logsLoading ? (
                <pre className="w-full max-w-7xl max-h-150 bg-gray-900 overflow-y-auto text-green-100 rounded p-4 overflow-x-auto  text-xs whitespace-pre-wrap break-words overflow-x-auto">
                  Loading inspect data...
                </pre>
              ) : logsError ? (
                <div className="text-red-500">{logsError}</div>
              ) : (
                <pre className="w-full  max-w-7xl max-h-150   bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto  text-xs whitespace-pre-wrap break-words">
                  {logs || "No logs found."}
                </pre>
              )}
            </div>
          )}
          {tab === "inspect" && (
            <div className=" mt-2">
              {inspectLoading ? (
                <pre className="w-full max-w-7xl max-h-150 bg-gray-900 overflow-y-auto text-green-100 rounded p-4 overflow-x-auto  text-xs whitespace-pre-wrap break-words overflow-x-auto">
                  Loading inspect data...
                </pre>
              ) : inspectError ? (
                <div className="text-red-500">{inspectError}</div>
              ) : (
                <pre className="w-full max-w-7xl max-h-150 bg-gray-900 overflow-y-auto text-green-100 rounded p-4  text-xs whitespace-pre-wrap break-words overflow-x-auto">
                  {JSON.stringify(inspect, null, 2)}
                </pre>
              )}
            </div>
          )}
          {tab === "terminal" && (
            <div className="mt-2" style={{ minHeight: 350 }}>
              <ContainerTerminal containerId={container.Id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
