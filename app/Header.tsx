"use client";
import { useAppContext } from "./context/AppContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const { pageTitle, sidebarOpen, setSidebarOpen } = useAppContext();
  const router = useRouter();
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };
  return (
    <header className="bg-white shadow py-3 px-3 sm:px-8 flex flex-row items-center justify-between sticky top-0 z-10 w-full min-h-[56px]">
      {/* Hamburger for mobile */}
      <button
        className="md:hidden mr-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label={sidebarOpen ? "Close menu" : "Open menu"}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        type="button"
      >
        <span className="sr-only">
          {sidebarOpen ? "Close menu" : "Open menu"}
        </span>
        {/* Hamburger icon */}
        <svg
          className="h-6 w-6 text-blue-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {sidebarOpen ? (
            // X icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-blue-700 truncate">
        AkrivisPanel{pageTitle ? ` - ${pageTitle}` : " - Dashboard"}
      </h1>
      <button
        onClick={handleLogout}
        className="ml-2 bg-red-500 text-white px-3 py-1 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition"
        aria-label="Logout"
      >
        Logout
      </button>
    </header>
  );
}
