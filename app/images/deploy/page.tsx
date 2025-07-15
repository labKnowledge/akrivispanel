"use client";
import { useState, ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// Inline SVG icons for premium look
const icons = {
  image: (
    <svg
      className="w-5 h-5 text-blue-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 15l-5-5-4 4-7-7"
      />
    </svg>
  ),
  name: (
    <svg
      className="w-5 h-5 text-purple-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  ),
  env: (
    <svg
      className="w-5 h-5 text-green-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    </svg>
  ),
  volume: (
    <svg
      className="w-5 h-5 text-yellow-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 7h20" />
    </svg>
  ),
  port: (
    <svg
      className="w-5 h-5 text-pink-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="3" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.4 15a1.65 1.65 0 01.33 1.82A8 8 0 1112 4v1"
      />
    </svg>
  ),
  command: (
    <svg
      className="w-5 h-5 text-indigo-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17v-2a4 4 0 014-4h4"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01" />
    </svg>
  ),
  args: (
    <svg
      className="w-5 h-5 text-cyan-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 7h20" />
    </svg>
  ),
  restart: (
    <svg
      className="w-5 h-5 text-orange-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4v5h.582M20 20v-5h-.581"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.418 9A7.963 7.963 0 0112 4c2.042 0 3.899.767 5.318 2.029M18.582 15A7.963 7.963 0 0112 20a7.963 7.963 0 01-5.318-2.029"
      />
    </svg>
  ),
};

// Add types for template and ports
interface TemplatePort {
  container: string;
}
interface TemplateEnvVar {
  key: string;
  description?: string;
  required?: boolean;
}
interface TemplateVolume {
  host: string;
  container: string;
  description?: string;
}
interface TemplateDef {
  key: string;
  name: string;
  image: string;
  description: string;
  ports: TemplatePort[];
  icon: string;
  env?: TemplateEnvVar[];
  volumes?: TemplateVolume[];
}

// 1. Add a new step at the start for template selection
const templates: TemplateDef[] = [
  // Existing templates
  {
    key: "n8n",
    name: "n8n",
    image: "n8nio/n8n:latest",
    description: "Open source workflow automation platform.",
    ports: [{ container: "5678" }],
    icon: "🤖",
  },
  {
    key: "mongodb",
    name: "mongodb",
    image: "mongo:latest",
    description: "Popular NoSQL document database.",
    ports: [{ container: "27017" }],
    icon: "🍃",
  },
  {
    key: "nextcloud",
    name: "nextcloud",
    image: "nextcloud:latest",
    description: "Self-hosted file sync and collaboration platform.",
    ports: [{ container: "80" }],
    icon: "☁️",
  },
  {
    key: "homeassistant",
    name: "homeassistant",
    image: "homeassistant/home-assistant:latest",
    description: "Open source home automation platform.",
    ports: [{ container: "8123" }],
    icon: "🏠",
  },
  {
    key: "ghost",
    name: "ghost",
    image: "ghost:latest",
    description: "Modern open source publishing platform.",
    ports: [{ container: "2368" }],
    icon: "👻",
  },
  {
    key: "bookstack",
    name: "bookstack",
    image: "linuxserver/bookstack:latest",
    description: "Simple self-hosted wiki/documentation platform.",
    ports: [{ container: "6875" }],
    icon: "📚",
  },
  {
    key: "roundcube",
    name: "roundcube",
    image: "roundcube/roundcubemail:latest",
    description: "Open source webmail client.",
    ports: [{ container: "80" }],
    icon: "📧",
  },
  // New MCP/infra templates
  {
    key: "postgresql",
    name: "postgresql",
    image: "postgres:latest",
    description: "Advanced open-source SQL database.",
    ports: [{ container: "5432" }],
    icon: "🐘",
  },
  {
    key: "mysql",
    name: "mysql",
    image: "mysql:latest",
    description: "Widely-used SQL database.",
    ports: [{ container: "3306" }],
    icon: "🐬",
  },
  {
    key: "redis",
    name: "redis",
    image: "redis:latest",
    description: "In-memory data store/cache.",
    ports: [{ container: "6379" }],
    icon: "🟥",
  },
  {
    key: "jupyter",
    name: "jupyter",
    image: "jupyter/base-notebook:latest",
    description:
      "Interactive computing environment for notebooks, code, and data.",
    ports: [{ container: "8888" }],
    icon: "📓",
  },
  {
    key: "portainer",
    name: "portainer",
    image: "portainer/portainer-ce:latest",
    description: "Docker management UI.",
    ports: [{ container: "9000" }],
    icon: "🛠️",
  },
  {
    key: "gitea",
    name: "gitea",
    image: "gitea/gitea:latest",
    description: "Lightweight self-hosted Git service.",
    ports: [{ container: "3000" }],
    icon: "🐙",
  },
  {
    key: "minio",
    name: "minio",
    image: "minio/minio:latest",
    description: "S3-compatible object storage server.",
    ports: [{ container: "9000" }],
    icon: "🗄️",
  },
  {
    key: "vault",
    name: "vault",
    image: "vault:latest",
    description: "Secrets management and data protection.",
    ports: [{ container: "8200" }],
    icon: "🔐",
  },
  {
    key: "ollama",
    name: "ollama",
    image: "ollama/ollama:latest",
    description: "Local LLM inference server.",
    ports: [{ container: "11434" }],
    icon: "🦙",
  },
  {
    key: "unstructured",
    name: "unstructured",
    image: "unstructuredio/unstructured:latest",
    description: "Document parsing and extraction API.",
    ports: [{ container: "8000" }],
    icon: "📄",
  },
  {
    key: "notionmcp",
    name: "notionmcp",
    image: "notion-mcp/notion-mcp:latest",
    description: "Notion workspace integration for automations.",
    ports: [{ container: "8080" }],
    icon: "🗒️",
  },
  {
    key: "gcalmcp",
    name: "gcalmcp",
    image: "gcal-mcp/gcal-mcp:latest",
    description: "Google Calendar integration for automations.",
    ports: [{ container: "8080" }],
    icon: "📅",
  },
  {
    key: "discordmcp",
    name: "discordmcp",
    image: "discord-mcp/discord-mcp:latest",
    description: "Discord bot integration for automations.",
    ports: [{ container: "8080" }],
    icon: "💬",
  },
  {
    key: "duckduckgomcp",
    name: "duckduckgomcp",
    image: "duckduckgo-mcp/duckduckgo-mcp:latest",
    description: "Search engine API for automations.",
    ports: [{ container: "8080" }],
    icon: "🦆",
  },
  // Remove or fix MCP servers with no public image
  // 1. Notion MCP: No public Docker image, but available via Metorial
  {
    key: "notion-mcp",
    name: "notion-mcp-server",
    image: "metorial/notion-api-server", // Reference Metorial for deployment
    description: "Official Notion MCP Server. Deploy via Metorial Marketplace.",
    ports: [],
    icon: "🗒️",
  },
  // 2. DuckDuckGo MCP: Use maintained fork or Metorial
  {
    key: "duckduckgo-mcp",
    name: "duckduckgo-mcp-server",
    image: "metorial/duckduckgo-search-server", // Reference Metorial for deployment
    description:
      "DuckDuckGo Search MCP Server. Deploy via Metorial Marketplace.",
    ports: [],
    icon: "🦆",
  },
  // 3. Magic MCP: Use Metorial
  {
    key: "magic-mcp",
    name: "magic-mcp-server",
    image: "metorial/magic-mcp", // Reference Metorial for deployment
    description:
      "Magic MCP Server by 21st.dev. Deploy via Metorial Marketplace.",
    ports: [],
    icon: "✨",
  },
  // GitHub MCP Server (from docs)
  {
    key: "github-mcp-server",
    name: "github-mcp-server",
    image: "ghcr.io/labknowledge/github-mcp-server:latest",
    description:
      "Official GitHub MCP Server. Provides a standardized interface for interacting with GitHub's API.",
    ports: [],
    icon: "🐙",
    env: [
      {
        key: "GITHUB_TOKEN",
        description: "GitHub personal access token",
        required: true,
      },
    ],
    volumes: [],
  },
  // Notion MCP Server (from docs)
  {
    key: "notion-mcp-server",
    name: "notion-mcp-server",
    image: "ghcr.io/labknowledge/notion-mcp-server:latest",
    description:
      "A Model Context Protocol (MCP) server that provides seamless integration with Notion. Enables LMs to interact with your Notion workspace.",
    ports: [],
    icon: "🗒️",
    env: [
      {
        key: "NOTION_TOKEN",
        description: "Notion integration token",
        required: true,
      },
    ],
    volumes: [],
  },
  // Magic MCP Server (from docs)
  {
    key: "magic-mcp-server",
    name: "magic-mcp-server",
    image: "ghcr.io/labknowledge/magic-mcp:latest",
    description:
      "Magic Component Platform (MCP) is a powerful AI-driven tool for creating UI components via natural language.",
    ports: [],
    icon: "✨",
    env: [],
    volumes: [],
  },
  // Repomix MCP Server (from manifest)
  {
    key: "repomix-mcp-server",
    name: "repomix-mcp-server",
    image: "ghcr.io/labknowledge/repomix:latest",
    description: "Pack your codebase into AI-friendly formats.",
    ports: [],
    icon: "🧩",
    env: [],
    volumes: [],
  },
  // Semgrep MCP Server (from manifest)
  {
    key: "semgrep-mcp-server",
    name: "semgrep-mcp-server",
    image: "ghcr.io/metorial/mcp-container--semgrep--mcp--mcp",
    description:
      "A Model Context Protocol (MCP) server for using Semgrep to scan code for security vulnerabilities. Secure your [vibe coding](https://semgrep.dev/blog/2025/giving-appsec-a-seat-at-the-vibe-coding-table/)! 😅",
    ports: [],
    icon: "🔎",
    env: [],
    volumes: [],
  },
  // QA Sphere MCP Server (from catalog)
  {
    key: "qa-sphere-mcp-server",
    name: "qa-sphere-mcp-server",
    image: "ghcr.io/labknowledge/qa-sphere-mcp-server:latest",
    description:
      "A Model Context Protocol server for the QA Sphere test management system.",
    ports: [],
    icon: "🧪",
    env: [],
    volumes: [],
  },
  // GitMCP (from catalog)
  {
    key: "gitmcp",
    name: "gitmcp",
    image: "ghcr.io/labknowledge/gitmcp:latest",
    description:
      "Put an end to hallucinations! GitMCP is a free, open-source, remote MCP server for any GitHub project.",
    ports: [],
    icon: "🔗",
    env: [],
    volumes: [],
  },
  // SearXNG MCP Server (from catalog)
  {
    key: "searxng-mcp-server",
    name: "searxng-mcp-server",
    image: "ghcr.io/labknowledge/searxng-mcp-server:latest",
    description:
      "An MCP server implementation that integrates the SearxNG API, providing web search capabilities.",
    ports: [],
    icon: "🌐",
    env: [],
    volumes: [],
  },
  // Image Compression MCP Server (from catalog)
  {
    key: "image-compression-mcp-server",
    name: "image-compression-mcp-server",
    image: "ghcr.io/labknowledge/image-compression:latest",
    description:
      "A high-performance image compression microservice based on MCP (Modal Context Protocol).",
    ports: [],
    icon: "🖼️",
    env: [],
    volumes: [],
  },
  // Fetch MCP Server (from manifest)
  {
    key: "fetch-mcp-server",
    name: "fetch-mcp-server",
    image: "ghcr.io/modelcontextprotocol/servers:latest",
    description: "Fetch MCP Server.",
    ports: [],
    icon: "📡",
    env: [],
    volumes: [],
  },
  // Everything MCP Server (from manifest)
  {
    key: "everything-mcp-server",
    name: "everything-mcp-server",
    image: "ghcr.io/modelcontextprotocol/servers:latest",
    description: "Everything MCP Server.",
    ports: [],
    icon: "🌐",
    env: [],
    volumes: [],
  },
  // Playwright MCP Server (from docs)
  {
    key: "playwright-mcp-server",
    name: "playwright-mcp-server",
    image: "ghcr.io/labknowledge/playwright-mcp:latest",
    description:
      "Official Playwright MCP Server by Microsoft. Provides browser automation capabilities for AI agents.",
    ports: [],
    icon: "🕸️",
    env: [],
    volumes: [],
  },
  // Octagon MCP Server (from docs)
  {
    key: "octagon-mcp-server",
    name: "octagon-mcp-server",
    image: "ghcr.io/labknowledge/octagon-mcp-server:latest",
    description:
      "Official Octagon MCP Server by OctagonAI. Provides AI agent capabilities and integrations.",
    ports: [],
    icon: "🛑",
    env: [],
    volumes: [],
  },
  // ScreenshotOne MCP Server (from docs)
  {
    key: "screenshotone-mcp-server",
    name: "screenshotone-mcp-server",
    image: "ghcr.io/labknowledge/screenshotone-mcp:latest",
    description:
      "Official ScreenshotOne MCP Server. Provides screenshot automation and capture capabilities for AI agents.",
    ports: [],
    icon: "📸",
    env: [],
    volumes: [],
  },
  // Unstructured MCP Server (from docs)
  {
    key: "unstructured-mcp-server",
    name: "unstructured-mcp-server",
    image: "ghcr.io/labknowledge/uns-mcp:latest",
    description:
      "Official Unstructured MCP Server by Unstructured-IO. Provides document parsing and extraction capabilities for AI agents.",
    ports: [],
    icon: "📄",
    env: [],
    volumes: [],
  },
];

const steps = [
  {
    key: "template",
    title: "Template",
    description:
      "Choose a popular app to deploy with one click, or skip to manual setup.",
  },
  {
    key: "image",
    title: "Image",
    description:
      "Specify the Docker image to deploy. Use the format 'repository:tag', e.g. nginx:latest.",
    required: true,
  },
  {
    key: "name",
    title: "Container Name",
    description:
      "Optionally assign a name to your container for easier management.",
  },
  {
    key: "env",
    title: "Environment Variables",
    description:
      "Set environment variables for your container. Useful for configuration and secrets.",
  },
  {
    key: "volumes",
    title: "Volumes",
    description: "Bind host paths to container paths for persistent storage.",
  },
  {
    key: "ports",
    title: "Port Bindings",
    description: "Map host ports to container ports to expose services.",
  },
  {
    key: "command",
    title: "Command & Arguments",
    description:
      "Override the default command and pass arguments to the container entrypoint.",
  },
  {
    key: "restart",
    title: "Restart Policy",
    description: "Control how the container restarts on failure or stop.",
  },
  {
    key: "summary",
    title: "Summary",
    description: "Review your configuration before deploying the container.",
  },
];

export default function DeployImagePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    image: "",
    name: "",
    env: [{ key: "", value: "" }],
    volumes: [{ host: "", container: "" }],
    ports: [{ host: "", container: "" }],
    args: "",
    command: "",
    restart: "no",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState(0);
  const [deploying, setDeploying] = useState(false);
  const [containerId, setContainerId] = useState<string | null>(null);
  const [logs, setLogs] = useState<string>("");
  const [logsLoading, setLogsLoading] = useState(false);
  const [logsError, setLogsError] = useState<string | null>(null);
  const [pullLogs, setPullLogs] = useState<string[]>([]);
  const logsInterval = useRef<NodeJS.Timeout | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  // Poll logs if deploying
  useEffect(() => {
    if (deploying && containerId) {
      setLogsLoading(true);
      setLogsError(null);
      const fetchLogs = async () => {
        try {
          const res = await fetch(`/api/docker/containers/${containerId}/logs`);
          const data = await res.json();
          if (data.logs) setLogs(data.logs);
          else setLogsError(data.error || "Failed to fetch logs");
        } catch (err: any) {
          setLogsError(err.message || "Unknown error");
        } finally {
          setLogsLoading(false);
        }
      };
      fetchLogs();
      logsInterval.current = setInterval(fetchLogs, 2000);
      return () => {
        if (logsInterval.current) clearInterval(logsInterval.current);
      };
    }
    return () => {
      if (logsInterval.current) clearInterval(logsInterval.current);
    };
  }, [deploying, containerId]);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleArrayChange(
    type: "env" | "volumes" | "ports",
    idx: number,
    field: string,
    value: string,
  ) {
    setForm({
      ...form,
      [type]: form[type].map((item: any, i: number) =>
        i === idx ? { ...item, [field]: value } : item,
      ),
    });
  }

  function addArrayItem(type: "env" | "volumes" | "ports") {
    setForm({
      ...form,
      [type]: [
        ...form[type],
        type === "env" ? { key: "", value: "" } : { host: "", container: "" },
      ],
    });
  }

  function removeArrayItem(type: "env" | "volumes" | "ports", idx: number) {
    setForm({
      ...form,
      [type]: form[type].filter((_: any, i: number) => i !== idx),
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setDeploying(false);
    setContainerId(null);
    setLogs("");
    setLogsError(null);
    setLogsLoading(false);
    setPullLogs([]);
    try {
      const res = await fetch("/api/docker/containers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.id) {
        setError(data.error || "Failed to deploy container");
        setSubmitting(false);
        return;
      }
      setContainerId(data.id);
      setPullLogs(Array.isArray(data.pullLogs) ? data.pullLogs : []);
      setDeploying(true);
      setStep(steps.length); // Show logs step
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setSubmitting(false);
    }
  }

  function nextStep() {
    if (step < steps.length - 1) setStep(step + 1);
  }
  function prevStep() {
    if (step > 0) setStep(step - 1);
  }

  // Helper to auto-fill form from template and fetch free ports
  async function handleTemplateSelect(template: TemplateDef) {
    setSelectedTemplate(template.key);
    // Ask backend for free ports for this template
    const res = await fetch(`/api/docker/containers/free-ports`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ports: template.ports }),
    });
    const data = await res.json();
    const autoPorts = (data.ports || template.ports).map(
      (p: TemplatePort, i: number) => ({
        host: (data.ports && data.ports[i] && data.ports[i].host) || "",
        container: p.container,
      }),
    );
    setForm({
      ...form,
      image: template.image,
      name: template.name.toLowerCase(),
      ports: autoPorts,
    });
    setStep(1); // Go to next step (image)
  }

  // Render fields for the current step
  function renderStep() {
    if (step === 0) {
      // Template selection UI
      return (
        <div>
          <div className="mb-4 text-lg font-semibold text-gray-800">
            Choose a Template
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((tpl) => (
              <button
                key={tpl.key}
                className={`border rounded-lg p-4 flex flex-col items-start shadow hover:shadow-lg transition-all duration-150 ${selectedTemplate === tpl.key ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white"}`}
                onClick={() => handleTemplateSelect(tpl)}
                type="button"
              >
                <span className="text-3xl mb-2">{tpl.icon}</span>
                <span className="font-bold text-gray-900">{tpl.name}</span>
                <span className="text-gray-600 text-sm mb-2">
                  {tpl.description}
                </span>
                <span className="text-xs text-gray-500">
                  Image: <span className="font-mono">{tpl.image}</span>
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  Ports: {tpl.ports.map((p) => p.container).join(", ")}
                </span>
                {selectedTemplate === tpl.key && (
                  <span className="mt-2 text-blue-600 font-semibold text-xs">
                    Selected
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button
              className="text-blue-600 underline text-sm"
              type="button"
              onClick={() => setStep(1)}
            >
              Or skip and configure manually
            </button>
          </div>
        </div>
      );
    }
    if (step === steps.length) {
      return (
        <div className="space-y-4">
          <div className="font-semibold text-gray-800 text-lg mb-2">
            Deployment Logs
          </div>
          <div className="bg-gray-900 text-green-100 rounded p-4 text-xs whitespace-pre-wrap break-words max-h-80 overflow-y-auto font-mono min-h-[120px]">
            {pullLogs.length > 0 && (
              <>
                {pullLogs.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
                <hr className="my-2 border-blue-400/30" />
              </>
            )}
            {logsLoading
              ? "Loading logs..."
              : logs || (!pullLogs.length && "No logs yet...")}
          </div>
          {logsError && <div className="text-red-500">{logsError}</div>}
          {containerId && (
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded shadow disabled:opacity-60 disabled:cursor-not-allowed mt-4"
              onClick={() => router.push(`/containers/${containerId}`)}
            >
              Go to Container
            </button>
          )}
        </div>
      );
    }
    switch (steps[step].key) {
      case "image":
        return (
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Image Name <span className="text-red-500">*</span>
            </label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 font-medium placeholder:text-gray-400"
              placeholder="e.g. nginx:latest"
            />
          </div>
        );
      case "name":
        return (
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Container Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 font-medium placeholder:text-gray-400"
              placeholder="Optional"
            />
          </div>
        );
      case "env":
        return (
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Environment Variables
            </label>
            <div className="space-y-2">
              {form.env.map((env, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <input
                    value={env.key}
                    onChange={(e) =>
                      handleArrayChange("env", idx, "key", e.target.value)
                    }
                    placeholder="KEY"
                    className="border border-gray-300 rounded px-2 py-1 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-100 text-gray-800"
                  />
                  <input
                    value={env.value}
                    onChange={(e) =>
                      handleArrayChange("env", idx, "value", e.target.value)
                    }
                    placeholder="VALUE"
                    className="border border-gray-300 rounded px-2 py-1 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-100 text-gray-800"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem("env", idx)}
                    className="text-red-500 hover:underline text-xs px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem("env")}
                className="text-blue-600 hover:underline text-sm font-medium mt-1"
              >
                + Add Variable
              </button>
            </div>
          </div>
        );
      case "volumes":
        return (
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Volumes
            </label>
            <div className="space-y-2">
              {form.volumes.map((vol, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <input
                    value={vol.host}
                    onChange={(e) =>
                      handleArrayChange("volumes", idx, "host", e.target.value)
                    }
                    placeholder="Host Path"
                    className="border border-gray-300 rounded px-2 py-1 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-100 text-gray-800"
                  />
                  <input
                    value={vol.container}
                    onChange={(e) =>
                      handleArrayChange(
                        "volumes",
                        idx,
                        "container",
                        e.target.value,
                      )
                    }
                    placeholder="Container Path"
                    className="border border-gray-300 rounded px-2 py-1 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-100 text-gray-800"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem("volumes", idx)}
                    className="text-red-500 hover:underline text-xs px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem("volumes")}
                className="text-blue-600 hover:underline text-sm font-medium mt-1"
              >
                + Add Volume
              </button>
            </div>
          </div>
        );
      case "ports":
        return (
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Port Bindings
            </label>
            <div className="space-y-2">
              {form.ports.map((port, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <input
                    value={port.host}
                    onChange={(e) =>
                      handleArrayChange("ports", idx, "host", e.target.value)
                    }
                    placeholder="Host Port"
                    className="border border-gray-300 rounded px-2 py-1 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-100 text-gray-800"
                  />
                  <input
                    value={port.container}
                    onChange={(e) =>
                      handleArrayChange(
                        "ports",
                        idx,
                        "container",
                        e.target.value,
                      )
                    }
                    placeholder="Container Port"
                    className="border border-gray-300 rounded px-2 py-1 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-100 text-gray-800"
                  />
                  <button
                    type="button"
                    onClick={() => removeArrayItem("ports", idx)}
                    className="text-red-500 hover:underline text-xs px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem("ports")}
                className="text-blue-600 hover:underline text-sm font-medium mt-1"
              >
                + Add Port
              </button>
            </div>
          </div>
        );
      case "command":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Command
              </label>
              <input
                name="command"
                value={form.command}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 font-medium placeholder:text-gray-400"
                placeholder="e.g. npm start"
              />
            </div>
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Arguments
              </label>
              <input
                name="args"
                value={form.args}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 font-medium placeholder:text-gray-400"
                placeholder="e.g. --debug"
              />
            </div>
          </div>
        );
      case "restart":
        return (
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Restart Policy
            </label>
            <select
              name="restart"
              value={form.restart}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800 font-medium"
            >
              <option value="no">No</option>
              <option value="always">Always</option>
              <option value="on-failure">On Failure</option>
              <option value="unless-stopped">Unless Stopped</option>
            </select>
          </div>
        );
      case "summary":
        return (
          <div className="space-y-4">
            <div className="font-semibold text-gray-800 text-lg mb-2">
              Review your configuration:
            </div>
            <div className="text-gray-700">
              <span className="font-medium">Image:</span> {form.image}
            </div>
            <div className="text-gray-700">
              <span className="font-medium">Container Name:</span>{" "}
              {form.name || (
                <span className="italic text-gray-400">(none)</span>
              )}
            </div>
            <div className="text-gray-700">
              <span className="font-medium">Environment:</span>{" "}
              {form.env.filter((e) => e.key).length > 0 ? (
                form.env
                  .filter((e) => e.key)
                  .map((e, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gray-100 rounded px-2 py-0.5 mx-1"
                    >
                      {e.key}={e.value}
                    </span>
                  ))
              ) : (
                <span className="italic text-gray-400">(none)</span>
              )}
            </div>
            <div className="text-gray-700">
              <span className="font-medium">Volumes:</span>{" "}
              {form.volumes.filter((v) => v.host && v.container).length > 0 ? (
                form.volumes
                  .filter((v) => v.host && v.container)
                  .map((v, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gray-100 rounded px-2 py-0.5 mx-1"
                    >
                      {v.host}:{v.container}
                    </span>
                  ))
              ) : (
                <span className="italic text-gray-400">(none)</span>
              )}
            </div>
            <div className="text-gray-700">
              <span className="font-medium">Ports:</span>{" "}
              {form.ports.filter((p) => p.host && p.container).length > 0 ? (
                form.ports
                  .filter((p) => p.host && p.container)
                  .map((p, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gray-100 rounded px-2 py-0.5 mx-1"
                    >
                      {p.host}:{p.container}
                    </span>
                  ))
              ) : (
                <span className="italic text-gray-400">(none)</span>
              )}
            </div>
            <div className="text-gray-700">
              <span className="font-medium">Command:</span>{" "}
              {form.command || (
                <span className="italic text-gray-400">(default)</span>
              )}
            </div>
            <div className="text-gray-700">
              <span className="font-medium">Arguments:</span>{" "}
              {form.args || (
                <span className="italic text-gray-400">(none)</span>
              )}
            </div>
            <div className="text-gray-700">
              <span className="font-medium">Restart Policy:</span>{" "}
              {form.restart}
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="w-full max-w-8xl mx-auto mt-10 px-2">
      <div className="bg-white rounded-xl shadow-lg border-t-4 border-blue-500 p-0 md:p-0 flex flex-col md:flex-row overflow-hidden">
        {/* Main Form Area */}
        <div className="flex-1 p-6 md:p-10">
          <h1 className="text-2xl font-bold tracking-tight text-blue-700 mb-1">
            Deploy Docker Image
          </h1>
          <div className="mb-8 text-gray-500">
            Step {step + 1} of {steps.length}:{" "}
            <span className="font-semibold text-blue-700">
              {steps[step]?.title}
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            autoComplete="off"
          >
            {renderStep()}
            {error && (
              <div className="text-red-500 font-semibold text-center">
                {error}
              </div>
            )}
            <div className="flex gap-2 mt-8">
              {step > 0 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-2 rounded shadow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  Back
                </button>
              )}
              {step < steps.length - 1 && (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded shadow disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={
                    steps[step].required &&
                    (steps[step].key === "image"
                      ? !form.image.trim()
                      : steps[step].key === "name"
                        ? false
                        : steps[step].key === "env"
                          ? !form.env.some((e) => e.key)
                          : steps[step].key === "volumes"
                            ? !form.volumes.some((v) => v.host && v.container)
                            : steps[step].key === "ports"
                              ? !form.ports.some((p) => p.host && p.container)
                              : false)
                  }
                >
                  Next
                </button>
              )}
              {step === steps.length - 1 && (
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded shadow disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Deploying..." : "Deploy"}
                </button>
              )}
            </div>
          </form>
        </div>
        {/* Info Panel */}
        <div className="bg-blue-50 border-l border-blue-100 p-6 md:w-80 flex-shrink-0 flex items-start justify-start">
          <div>
            {step < steps.length ? (
              <>
                <div className="font-semibold text-blue-700 text-lg mb-2">
                  {steps[step].title}
                </div>
                <div className="text-blue-900 text-sm leading-relaxed">
                  {steps[step].description}
                </div>
              </>
            ) : (
              <div className="font-semibold text-blue-700 text-lg mb-2">
                Deployment in progress...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
