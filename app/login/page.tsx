"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function getCurrentUserClient() {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(/panel_session=([^;]+)/);
  if (!match) return null;
  try {
    return Buffer.from(decodeURIComponent(match[1]), "base64").toString(
      "utf-8",
    );
  } catch {
    return null;
  }
}

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [authChecked, setAuthChecked] = useState<undefined | null | string>(
    undefined,
  );
  const router = useRouter();

  useEffect(() => {
    const user = getCurrentUserClient();
    setAuthChecked(user);
    if (user) {
      router.replace("/");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed");
      } else {
        router.push("/");
      }
    } catch (err: any) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  if (authChecked === undefined) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-gray-500 text-lg">Checking authentication...</div>
      </div>
    );
  }

  if (authChecked) {
    // Redirecting, don't show form
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
