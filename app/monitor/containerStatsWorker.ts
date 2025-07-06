// containerStatsWorker.ts

// This file is intended to be used as a Web Worker for polling Docker container stats.
// It receives a list of containers and periodically fetches their stats, posting results back to the main thread.

interface ContainerInfo {
  Id: string;
}

interface ContainerStats {
  cpu: number;
  memory: {
    usage: number;
    limit: number;
    percent: number;
  };
  network: {
    rx: number;
    tx: number;
  };
}

let containers: ContainerInfo[] = [];
let interval: number | null = null;
let origin: string = '';

async function pollStats() {
  if (!containers.length || !origin) return;
  const newStats: Record<string, ContainerStats | null> = {};
  await Promise.all(
    containers.map(async (c) => {
      try {
        const res = await fetch(`${origin}/api/docker/containers/${c.Id}/stats`);
        const data = await res.json();
        newStats[c.Id] = data;
      } catch {
        newStats[c.Id] = null;
      }
    })
  );
  // @ts-ignore
  postMessage({ type: 'stats', stats: newStats });
}

function startPolling() {
  if (interval) clearInterval(interval);
  pollStats();
  // @ts-ignore
  interval = setInterval(pollStats, 2000);
}

function stopPolling() {
  if (interval) clearInterval(interval);
  interval = null;
}

// @ts-ignore
self.onmessage = (e) => {
  const { type, containers: newContainers, origin: newOrigin } = e.data;
  if (type === 'start') {
    containers = newContainers || [];
    origin = newOrigin || '';
    startPolling();
  } else if (type === 'stop') {
    stopPolling();
  }
}; 