"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAppContext } from "./context/AppContext";
import Logo from "./Logo";

export default function Sidebar() {
  const pathname = usePathname();
  const { setPageTitle } = useAppContext();
  const router = useRouter();
  // Helper to handle navigation and set title
  function handleNav(title: string, path: string) {
    setPageTitle(title);
    router.push(path);
  }
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-white shadow-lg p-6 fixed left-0 top-0 z-20">
      <div className="mb-10 flex items-center gap-2">
        <Logo size={40} />
        <span className="text-xl font-bold text-blue-700 tracking-tight">FastPanel</span>
      </div>
      <nav className="flex flex-col gap-2 text-gray-700">
        <button className={`py-2 px-4 rounded justify-start hover:bg-blue-50 font-medium flex items-center text-left ${pathname === "/" ? "bg-blue-100 text-blue-700" : ""}`} onClick={() => handleNav("Dashboard", "/")}>
          <span className="inline-block w-4 h-4 mr-2">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m0 0H5m4 0h4" />
            </svg>
          </span>
          Dashboard
        </button>
        <button className={`py-2 px-4 rounded justify-start hover:bg-blue-50 font-medium flex items-center text-left ${pathname.startsWith("/monitor") ? "bg-blue-100 text-blue-700" : ""}`} onClick={() => handleNav("Monitor", "/monitor")}>
          <span className="inline-block w-4 h-4 mr-2">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L15 12.75 9.75 8.5M4.5 12.75h10.5" />
            </svg>
          </span>
          Monitor
        </button>
        <button className={`py-2 px-4 rounded justify-start hover:bg-blue-50 font-medium flex items-center text-left ${pathname.startsWith("/containers") ? "bg-blue-100 text-blue-700" : ""}`} onClick={() => handleNav("Containers", "/containers")}>
          <span className="inline-block w-4 h-4 mr-2">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18m-9 5h9" />
            </svg>
          </span>
          Containers
        </button>
        <button className={`py-2 px-4 rounded justify-start hover:bg-blue-50 font-medium flex items-center text-left ${( pathname.startsWith("/images")) ? "bg-blue-100 text-blue-700" : ""}`} onClick={() => handleNav("Images", "/images")}>
          <span className="inline-block w-4 h-4 mr-2">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
            </svg>
          </span>
          Images
        </button>
        <button className={`py-2 px-4 rounded justify-start hover:bg-blue-50 font-medium flex items-center text-left ${pathname.startsWith("/volumes") ? "bg-blue-100 text-blue-700" : ""}`} onClick={() => handleNav("Volumes", "/volumes")}>
          <span className="inline-block w-4 h-4 mr-2">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18V3H3z" />
            </svg>
          </span>
          Volumes
        </button>
        <button className="py-2 px-4 rounded justify-start hover:bg-blue-50 flex items-center text-left" onClick={() => handleNav("Settings", "#")}>
          <span className="inline-block w-4 h-4 mr-2">
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Settings
        </button>
      </nav>
      <div className="mt-auto pt-10 text-xs text-gray-400">&copy; {new Date().getFullYear()} FastPanel</div>
    </aside>
  );
} 