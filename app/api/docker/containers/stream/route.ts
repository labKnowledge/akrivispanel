import { NextRequest } from "next/server";
import Docker from "dockerode";

const docker = new Docker();

export async function GET(req: NextRequest) {
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();

  let interval: NodeJS.Timeout;
  let stopped = false;

  async function sendStats() {
    if (stopped) return;
    try {
      const containers = await docker.listContainers({ all: true });
      // Fetch and parse stats for each container
      const containersWithStats = await Promise.all(
        containers.map(async (c) => {
          let statsData = null;
          try {
            const stats = await docker
              .getContainer(c.Id)
              .stats({ stream: false });
            // CPU usage
            let cpuPercent = 0;
            if (stats.precpu_stats && stats.cpu_stats) {
              const cpuDelta =
                stats.cpu_stats.cpu_usage.total_usage -
                stats.precpu_stats.cpu_usage.total_usage;
              const systemDelta =
                stats.cpu_stats.system_cpu_usage -
                stats.precpu_stats.system_cpu_usage;
              const cpuCount =
                stats.cpu_stats.online_cpus ||
                (stats.cpu_stats.cpu_usage.percpu_usage?.length ?? 1);
              if (systemDelta > 0 && cpuDelta > 0) {
                cpuPercent = (cpuDelta / systemDelta) * cpuCount * 100;
              }
            }
            // Memory usage
            const memUsage = stats.memory_stats.usage || 0;
            const memLimit = stats.memory_stats.limit || 1;
            const memPercent = (memUsage / memLimit) * 100;
            // Network
            let netRx = 0,
              netTx = 0;
            if (stats.networks) {
              for (const net of Object.values(stats.networks)) {
                netRx += net.rx_bytes;
                netTx += net.tx_bytes;
              }
            }
            statsData = {
              cpu: cpuPercent,
              memory: {
                usage: memUsage,
                limit: memLimit,
                percent: memPercent,
              },
              network: {
                rx: netRx,
                tx: netTx,
              },
            };
          } catch (e: any) {
            statsData = { error: e.message };
          }
          return {
            Id: c.Id,
            Names: c.Names,
            Image: c.Image,
            Status: c.Status,
            Ports: c.Ports,
            stats: statsData,
          };
        }),
      );
      const data = `data: ${JSON.stringify({ containers: containersWithStats })}\n\n`;
      try {
        await writer.write(encoder.encode(data));
      } catch (err) {
        // Writer likely closed (client disconnected)
        stopped = true;
        clearInterval(interval);
        writer.close();
      }
    } catch (err: any) {
      const errorData = `event: error\ndata: ${JSON.stringify({ error: err.message })}\n\n`;
      try {
        await writer.write(encoder.encode(errorData));
      } catch {
        // Writer likely closed
      }
      stopped = true;
      clearInterval(interval);
      writer.close();
    }
  }

  // Start sending updates
  sendStats();
  interval = setInterval(sendStats, 2000);

  // Cleanup on connection close
  req.signal.addEventListener("abort", () => {
    stopped = true;
    clearInterval(interval);
    writer.close();
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
