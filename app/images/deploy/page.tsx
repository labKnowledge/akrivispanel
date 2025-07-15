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

const steps = [
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

  // Render fields for the current step
  function renderStep() {
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
