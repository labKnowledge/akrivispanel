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
     
      {/* Deploy Button */}
      <div className="flex justify-end mb-8">
        <Link href="/images/deploy">
          <button className="flex items-center gap-2 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 font-semibold text-lg backdrop-blur-md border border-blue-200/30">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
            Deploy New Image
          </button>
        </Link>
      </div>
      {/* States */}
      {imagesLoading ? (
        <div className="flex flex-col items-center justify-center py-16">
          <svg className="animate-spin w-10 h-10 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
          <div className="text-xl text-blue-700 font-semibold">Loading images...</div>
        </div>
      ) : imagesError ? (
        <div className="flex flex-col items-center justify-center py-16">
          <svg className="w-10 h-10 text-red-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
          <div className="text-xl text-red-600 font-semibold">{imagesError}</div>
        </div>
      ) : images.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl shadow-xl">
          <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="7" width="18" height="10" rx="2" strokeWidth="2"/><path strokeWidth="2" d="M7 7V5m10 2V5M7 17v2m10-2v2"/></svg>
          <div className="text-xl text-gray-500 font-semibold">No images found.</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 w-full">
          {images.map((img) => (
            <div key={img.Id} className="relative flex flex-col bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl border-t-4 border-gradient-to-r from-blue-400 to-blue-600 p-6 hover:scale-[1.03] hover:shadow-2xl transition-all duration-200 min-h-[140px] group">
              {/* Menu Icon */}
              <button className="absolute top-4 right-4 text-gray-400 hover:text-blue-500 transition"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="6" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="18" r="1.5"/></svg></button>
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="7" width="18" height="10" rx="2" strokeWidth="2"/><path strokeWidth="2" d="M7 7V5m10 2V5M7 17v2m10-2v2"/></svg>
                <span className="text-xl font-bold text-gray-800 truncate max-w-[120px]" title={img.RepoTags?.join(", ") || "<none>"}>{img.RepoTags?.[0] || "<none>"}</span>
                <span className="ml-auto px-2 py-0.5 rounded text-xs font-semibold bg-gradient-to-r from-blue-100 to-blue-300 text-blue-700 shadow">{img.Id.slice(7, 19)}</span>
              </div>
              <div className="flex flex-wrap gap-2 items-center mb-3">
                <span className="text-xs px-2 py-0.5 rounded bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold shadow">{img.RepoTags?.join(", ") || "<none>"}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 shadow">{formatBytes(img.Size)}</span>
              </div>
              <div className="text-xs text-gray-400 mt-auto font-mono">Created: {new Date(img.Created * 1000).toLocaleString()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 