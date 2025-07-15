import { NextRequest, NextResponse } from "next/server";
import Docker from "dockerode";

const docker = new Docker();

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  try {
    const container = docker.getContainer(id);
    // Get a single stats snapshot (stream: false)
    const stats = await container.stats({ stream: false });
    // Calculate CPU usage
    let cpuPercent = 0;
    if (stats.precpu_stats && stats.cpu_stats) {
      const cpuDelta =
        stats.cpu_stats.cpu_usage.total_usage -
        stats.precpu_stats.cpu_usage.total_usage;
      const systemDelta =
        stats.cpu_stats.system_cpu_usage - stats.precpu_stats.system_cpu_usage;
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
    return NextResponse.json({
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
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
