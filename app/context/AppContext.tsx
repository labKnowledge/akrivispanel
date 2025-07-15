"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of your context state
interface User {
  name: string;
  email: string;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  pageTitle: string;
  setPageTitle: (title: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [pageTitle, setPageTitle] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        pageTitle,
        setPageTitle,
        sidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
