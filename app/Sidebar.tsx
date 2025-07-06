"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-white shadow-lg p-6 fixed left-0 top-0 z-20">
      <div className="mb-10 flex items-center gap-2">
        <span className="inline-block w-8 h-8 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold text-xl">FP</span>
        <span className="text-xl font-bold text-blue-700 tracking-tight">FastPanel</span>
      </div>
      <nav className="flex flex-col gap-2 text-gray-700">
        <Link href="/" className={`py-2 px-4 rounded hover:bg-blue-50 font-medium ${pathname === "/" ? "bg-blue-100 text-blue-700" : ""}`}>Dashboard</Link>
        <Link href="/monitoring" className={`py-2 px-4 rounded hover:bg-blue-50 font-medium ${pathname.startsWith("/monitor") ? "bg-blue-100 text-blue-700" : ""}`}>Monitoring</Link>
        <Link href="/containers" className={`py-2 px-4 rounded hover:bg-blue-50 font-medium ${pathname.startsWith("/containers") ? "bg-blue-100 text-blue-700" : ""}`}>Containers</Link>
        <Link href="/images" className={`py-2 px-4 rounded hover:bg-blue-50 font-medium ${( pathname.startsWith("/images")) ? "bg-blue-100 text-blue-700" : ""}`}>Images</Link>
        <Link href="/volumes" className={`py-2 px-4 rounded hover:bg-blue-50 font-medium ${pathname.startsWith("/volumes") ? "bg-blue-100 text-blue-700" : ""}`}>Volumes</Link>
        <a href="#" className="py-2 px-4 rounded hover:bg-blue-50">Settings</a>
      </nav>
      <div className="mt-auto pt-10 text-xs text-gray-400">&copy; {new Date().getFullYear()} FastPanel</div>
    </aside>
  );
} 