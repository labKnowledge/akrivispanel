"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface DockerVolume {
  Name: string;
  Driver: string;
  Mountpoint: string;
  CreatedAt?: string;
  Labels?: Record<string, string>;
}

export default function VolumesPage() {
  const [volumes, setVolumes] = useState<DockerVolume[]>([]);
  const [volumesLoading, setVolumesLoading] = useState(true);
  const [volumesError, setVolumesError] = useState<string | null>(null);

  const fetchVolumes = async () => {
    setVolumesLoading(true);
    setVolumesError(null);
    try {
      const res = await fetch("/api/docker/volumes");
      const data = await res.json();
      if (res.ok) {
        setVolumes(data.volumes);
      } else {
        setVolumesError(data.error || "Failed to fetch volumes");
      }
    } catch (err: any) {
      setVolumesError(err.message || "Unknown error");
    } finally {
      setVolumesLoading(false);
    }
  };

  useEffect(() => {
    fetchVolumes();
  }, []);

  return (
    <div className="w-full max-w-8xl mt-10 flex flex-col flex-1 px-2 space-between">
      <h1 className="text-2xl font-bold tracking-tight text-blue-700">
        Docker Volumes
      </h1>
      <p className="mb-8 text-gray-500">
        All Docker volumes available on this system.
      </p>
      {volumesLoading ? (
        <div className="text-center text-gray-500 py-8">Loading volumes...</div>
      ) : volumesError ? (
        <div className="text-center text-red-600 py-8">{volumesError}</div>
      ) : volumes.length === 0 ? (
        <div className="text-center py-6 text-gray-500 bg-white rounded-xl shadow">
          No volumes found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-4 w-full">
          {volumes.map((vol) => (
            <div
              key={vol.Name}
              className="relative flex flex-col bg-white rounded-xl overflow-hidden shadow-lg border-t-4 border-green-400 p-5 hover:shadow-xl transition-all duration-200 min-h-[120px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 text-green-500"
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
                <span
                  className="text-lg font-bold text-gray-800 truncate"
                  title={vol.Name}
                >
                  {vol.Name}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 items-center mb-2">
                <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700 font-semibold">
                  {vol.Driver}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                  {vol.Mountpoint}
                </span>
              </div>
              {vol.CreatedAt && (
                <div className="text-xs text-gray-400 mt-auto">
                  Created: {new Date(vol.CreatedAt).toLocaleString()}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
