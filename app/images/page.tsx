"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

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

export default function ImagesPage() {
  const [images, setImages] = useState<DockerImage[]>([]);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [imagesError, setImagesError] = useState<string | null>(null);

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

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="w-full max-w-8xl mt-10 flex flex-col flex-1 px-2 space-between">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">Docker Images</h1>
      <p className="mb-8 text-gray-500">All Docker images available on this system.</p>
      {imagesLoading ? (
        <div className="text-center text-gray-500 py-8">Loading images...</div>
      ) : imagesError ? (
        <div className="text-center text-red-600 py-8">{imagesError}</div>
      ) : images.length === 0 ? (
        <div className="text-center py-6 text-gray-500 bg-white rounded-xl shadow">No images found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-4 w-full">
          {images.map((img) => (
            <div key={img.Id} className="relative flex flex-col bg-white rounded-xl shadow-lg border-t-4 border-blue-400 p-5 hover:shadow-xl transition-all duration-200 min-h-[120px]">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="7" width="18" height="10" rx="2" strokeWidth="2"/><path strokeWidth="2" d="M7 7V5m10 2V5M7 17v2m10-2v2"/></svg>
                <span className="text-lg font-bold text-gray-800 truncate" title={img.RepoTags?.join(", ") || "<none>"}>{img.RepoTags?.[0] || "<none>"}</span>
                <span className="ml-auto px-2 py-0.5 rounded text-xs font-semibold bg-gray-100 text-gray-500">{img.Id.slice(7, 19)}</span>
              </div>
              <div className="flex flex-wrap gap-2 items-center mb-2">
                <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-semibold">{img.RepoTags?.join(", ") || "<none>"}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700">{formatBytes(img.Size)}</span>
              </div>
              <div className="text-xs text-gray-400 mt-auto">Created: {new Date(img.Created * 1000).toLocaleString()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 