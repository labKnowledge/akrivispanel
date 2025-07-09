"use client";
import { useAppContext } from "./context/AppContext";

export default function Header() {
  const { pageTitle } = useAppContext();
  return (
    <header className="bg-white shadow py-4 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-10 w-full">
      <h1 className="text-2xl font-bold tracking-tight text-blue-700">
        AkrivisPanel{pageTitle ? ` - ${pageTitle}` : ""}
      </h1>
    </header>
  );
} 