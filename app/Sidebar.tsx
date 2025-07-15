"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAppContext } from "./context/AppContext";
import Logo from "./Logo";

export default function Sidebar() {
  const pathname = usePathname();
  const { setPageTitle, sidebarOpen, setSidebarOpen } = useAppContext();
  const router = useRouter();
  // Helper to handle navigation and set title
  function handleNav(title: string, path: string) {
    setPageTitle(title);
    router.push(path);
    setSidebarOpen(false); // close drawer on mobile nav
  }
  return (
    <>
      {/* Overlay for mobile drawer */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar overlay"
        />
      )}
      <aside
        className={`
          fixed left-0 top-0 z-40 bg-white shadow-lg p-6 h-screen w-64
          transition-transform duration-200
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:flex md:flex-col
        `}
        aria-label="Sidebar"
      >
        {/* Close button for mobile */}
        <button
          className="md:hidden absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          type="button"
        >
          <svg
            className="h-6 w-6 text-blue-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="mb-10 flex items-center gap-2">
          <Logo size={40} />
          <span className="text-xl font-bold text-blue-700 tracking-tight">
            AkrivisPanel
          </span>
        </div>
        <nav className="flex flex-col gap-2 text-gray-700">
          <button
            className={`py-2 px-4 rounded justify-start hover:bg-blue-50 font-medium flex items-center text-left ${pathname === "/" ? "bg-blue-100 text-blue-700" : ""}`}
            onClick={() => handleNav("Dashboard", "/")}
          >
            <span className="inline-block w-4 h-4 mr-2">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m0 0H5m4 0h4"
                />
              </svg>
            </span>
            Dashboard
          </button>
          <button
            className={`py-2 px-4 rounded justify-start hover:bg-blue-50 font-medium flex items-center text-left ${pathname.startsWith("/monitor") ? "bg-blue-100 text-blue-700" : ""}`}
            onClick={() => handleNav("Monitor", "/monitor")}
          >
            <span className="inline-block w-4 h-4 mr-2">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L15 12.75 9.75 8.5M4.5 12.75h10.5"
                />
              </svg>
            </span>
            Monitor
          </button>
          <button
            className={`py-2 px-4 rounded justify-start hover:bg-blue-50 font-medium flex items-center text-left ${pathname.startsWith("/containers") ? "bg-blue-100 text-blue-700" : ""}`}
            onClick={() => handleNav("Containers", "/containers")}
          >
            <span className="inline-block w-4 h-4 mr-2">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h18M3 12h18m-9 5h9"
                />
              </svg>
            </span>
            Containers
          </button>
          <button
            className={`py-2 px-4 rounded justify-start hover:bg-blue-50 font-medium flex items-center text-left ${pathname.startsWith("/images") ? "bg-blue-100 text-blue-700" : ""}`}
            onClick={() => handleNav("Images", "/images")}
          >
            <span className="inline-block w-4 h-4 mr-2">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h18v18H3V3z"
                />
              </svg>
            </span>
            Images
          </button>
          <button
            className={`py-2 px-4 rounded justify-start hover:bg-blue-50 font-medium flex items-center text-left ${pathname.startsWith("/images/deploy") ? "bg-blue-100 text-blue-700" : ""}`}
            onClick={() => handleNav("Deploy Image", "/images/deploy")}
          >
            <span className="inline-block w-4 h-4 mr-2">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </span>
            Deploy
          </button>
          <button
            className={`py-2 px-4 rounded justify-start hover:bg-blue-50 font-medium flex items-center text-left ${pathname === "/images/deploy" ? "bg-blue-100 text-blue-700" : ""}`}
            onClick={() => handleNav("Templates", "/images/deploy")}
          >
            <span className="inline-block w-4 h-4 mr-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </span>
            Templates
          </button>
          <button
            className={`py-2 px-4 rounded justify-start hover:bg-blue-50 font-medium flex items-center text-left ${pathname.startsWith("/deployments/github") ? "bg-blue-100 text-blue-700" : ""}`}
            onClick={() =>
              handleNav("GitHub Deployment", "/deployments/github")
            }
          >
            <span className="inline-block w-4 h-4 mr-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
              </svg>
            </span>
            GitHub Deployment
          </button>
          <button
            className={`py-2 px-4 rounded justify-start hover:bg-blue-50 font-medium flex items-center text-left ${pathname.startsWith("/volumes") ? "bg-blue-100 text-blue-700" : ""}`}
            onClick={() => handleNav("Volumes", "/volumes")}
          >
            <span className="inline-block w-4 h-4 mr-2">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3v18h18V3H3z"
                />
              </svg>
            </span>
            Volumes
          </button>
        </nav>
        <button
          className="mt-auto pt-10 py-2 px-4 rounded justify-start hover:bg-blue-50 flex items-center text-left"
          onClick={() => handleNav("Settings", "#")}
        >
          <span className="inline-block w-4 h-4 mr-2">
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          Settings
        </button>
        <div className=" text-xs text-gray-400">
          &copy; {new Date().getFullYear()} AkrivisPanel
        </div>
      </aside>
    </>
  );
}
