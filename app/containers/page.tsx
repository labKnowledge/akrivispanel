"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ContainerInfo {
  Id: string;
  Names: string[];
  Image: string;
  State: string;
  Status: string;
}

export default function ContainersPage() {
  const [containers, setContainers] = useState<ContainerInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
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

  useEffect(() => {
    fetchContainers();
  }, []);

  const showAlert = async (type: "success" | "error", title: string, text?: string) => {
    const swal = (await import("sweetalert2")).default;
    swal.fire({ icon: type, title, text });
  };

  const handleAction = async (id: string, action: "start" | "stop" | "restart" | "remove") => {
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

  // Helper to guess category
  function getCategory(container: ContainerInfo) {
    const name = container.Names.join(" ").toLowerCase();
    const image = container.Image.toLowerCase();
    if (/(mysql|postgres|mongo|redis|mariadb|db|database)/.test(name + image)) return "Database";
    if (/(nginx|apache|httpd|web|server)/.test(name + image)) return "Server";
    if (/(vm|virtualmachine|vmachine)/.test(name + image)) return "VMachine";
    return "App";
  }
  function getCategoryColor(category: string) {
    if (category === "Database") return "bg-purple-100 text-purple-700";
    if (category === "Server") return "bg-yellow-100 text-yellow-700";
    if (category === "VMachine") return "bg-pink-100 text-pink-700";
    return "bg-blue-100 text-blue-700";
  }

  return (
    <div className="w-full max-w-8xl mt-10 flex flex-col flex-1 px-2 space-between">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Containers</h2>
      {loading ? (
        <div className="text-center text-gray-500 py-8">Loading containers...</div>
      ) : error ? (
        <div className="text-center text-red-600 py-8">{error}</div>
      ) : containers.length === 0 ? (
        <div className="text-center py-6 text-gray-500 bg-white rounded-xl shadow">No containers found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 w-full">
          {containers.map((container) => {
            const isRunning = container.State === "running";
            const isExited = container.State === "exited";
            const isPaused = container.State === "paused";
            let stateIcon = null, stateColor = "";
            if (isRunning) {
              stateIcon = <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeWidth="2" d="M9 12l2 2 4-4"/></svg>;
              stateColor = "bg-green-50 border-green-500";
            } else if (isExited) {
              stateIcon = <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"/><path strokeWidth="2" d="M15 9l-6 6M9 9l6 6"/></svg>;
              stateColor = "bg-red-50 border-red-500";
            } else if (isPaused) {
              stateIcon = <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"/><rect x="9" y="9" width="2" height="6" rx="1" strokeWidth="2"/><rect x="13" y="9" width="2" height="6" rx="1" strokeWidth="2"/></svg>;
              stateColor = "bg-yellow-50 border-yellow-500";
            } else {
              stateIcon = <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2"/></svg>;
              stateColor = "bg-gray-50 border-gray-300";
            }
            const category = getCategory(container);
            const categoryColor = getCategoryColor(category);
            return (
              <div
                key={container.Id}
                className={`relative flex flex-col bg-white rounded-xl shadow-lg border-t-4 ${stateColor} p-5 hover:shadow-xl transition-all duration-200 min-h-[140px] cursor-pointer`}
                onClick={() => router.push(`/containers/${container.Id}`)}
                tabIndex={0}
                role="button"
                onKeyDown={e => { if (e.key === "Enter") router.push(`/containers/${container.Id}`); }}
                title="View details"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex-shrink-0">{stateIcon}</div>
                  <span className="text-lg font-bold text-gray-800 truncate" title={container.Names.join(", ")}>{container.Names.join(", ")}</span>
                </div>
                <div className={`inline-block mt-1 mb-2 px-2 py-0.5 rounded text-xs font-semibold ${categoryColor}`}>{category}</div>
                <div className="flex flex-wrap gap-2 items-center mb-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">{container.Image}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700">{container.Status}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-200 text-gray-600">{container.State}</span>
                </div>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {/* Start */}
                  {!isRunning && (
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-semibold disabled:opacity-60"
                      onClick={e => { e.stopPropagation(); handleAction(container.Id, "start"); }}
                      disabled={actionLoading !== null}
                    >
                      {actionLoading === container.Id + "start" ? "Starting..." : "Start"}
                    </button>
                  )}
                  {/* Stop */}
                  {isRunning && (
                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs font-semibold disabled:opacity-60"
                      onClick={e => { e.stopPropagation(); handleAction(container.Id, "stop"); }}
                      disabled={actionLoading !== null}
                    >
                      {actionLoading === container.Id + "stop" ? "Stopping..." : "Stop"}
                    </button>
                  )}
                  {/* Restart */}
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold disabled:opacity-60"
                    onClick={e => { e.stopPropagation(); handleAction(container.Id, "restart"); }}
                    disabled={actionLoading !== null}
                  >
                    {actionLoading === container.Id + "restart" ? "Restarting..." : "Restart"}
                  </button>
                  {/* Remove */}
                  {isExited && (
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-semibold disabled:opacity-60"
                      onClick={e => { e.stopPropagation(); handleAction(container.Id, "remove"); }}
                      disabled={actionLoading !== null}
                    >
                      {actionLoading === container.Id + "remove" ? "Removing..." : "Remove"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
} 