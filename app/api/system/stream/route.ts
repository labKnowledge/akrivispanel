import { NextRequest } from "next/server";
import os from "os";
import { execSync } from "child_process";
import fs from "fs";
import { glob } from "glob";

// Helper to calculate CPU usage over a short interval
async function getCpuUsage() {
  function cpuInfo() {
    const cpus = os.cpus();
    let user = 0,
      nice = 0,
      sys = 0,
      idle = 0,
      irq = 0;
    for (const cpu of cpus) {
      user += cpu.times.user;
      nice += cpu.times.nice;
      sys += cpu.times.sys;
      idle += cpu.times.idle;
      irq += cpu.times.irq;
    }
    return { user, nice, sys, idle, irq };
  }
  const start = cpuInfo();
  await new Promise((res) => setTimeout(res, 200)); // 200ms sample
  const end = cpuInfo();
  const idleDiff = end.idle - start.idle;
  const totalDiff =
    end.user -
    start.user +
    (end.nice - start.nice) +
    (end.sys - start.sys) +
    idleDiff +
    (end.irq - start.irq);
  const usagePercent = totalDiff === 0 ? 0 : (1 - idleDiff / totalDiff) * 100;
  return { usedPercent: usagePercent.toFixed(1) };
}

// Helper to get GPU usage (NVIDIA only)
function getGpuUsage() {
  try {
    // Query utilization and memory usage for all GPUs
    const output = execSync(
      "nvidia-smi --query-gpu=utilization.gpu,memory.total,memory.used,memory.free --format=csv,noheader,nounits",
    )
      .toString()
      .trim();
    // Each line: "utilization, totalMem, usedMem, freeMem"
    const gpus = output.split("\n").map((line) => {
      const [utilization, total, used, free] = line
        .split(",")
        .map((s) => s.trim());
      return {
        utilization: parseInt(utilization, 10), // percent
        memory: {
          total: parseInt(total, 10) * 1024 * 1024, // bytes
          used: parseInt(used, 10) * 1024 * 1024, // bytes
          free: parseInt(free, 10) * 1024 * 1024, // bytes
          usedPercent:
            total === "0"
              ? 0
              : (parseInt(used, 10) / parseInt(total, 10)) * 100,
        },
      };
    });
    return gpus;
  } catch (e) {
    return null; // nvidia-smi not available or error
  }
}

// Helper to get CPU temperature (Linux)
function getCpuTemp() {
  try {
    const zones = glob.sync("/sys/class/thermal/thermal_zone*/temp");
    for (const zone of zones) {
      const val = fs.readFileSync(zone, "utf8");
      const temp = parseInt(val, 10);
      if (temp > 1000) return temp / 1000; // millidegree to degree
      if (temp > 0) return temp; // already degree
    }
    return null;
  } catch {
    return null;
  }
}
// Helper to get GPU temperature (NVIDIA only)
function getGpuTemps() {
  try {
    const output = execSync(
      "nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader,nounits",
    )
      .toString()
      .trim();
    return output.split("\n").map((line) => parseInt(line.trim(), 10));
  } catch {
    return null;
  }
}
// Helper to get swap usage
function getSwapUsage() {
  try {
    const meminfo = fs.readFileSync("/proc/meminfo", "utf8");
    const total =
      parseInt((meminfo.match(/^SwapTotal:\s+(\d+)/m) || [])[1] || "0", 10) *
      1024;
    const free =
      parseInt((meminfo.match(/^SwapFree:\s+(\d+)/m) || [])[1] || "0", 10) *
      1024;
    const used = total - free;
    return {
      total,
      free,
      used,
      usedPercent: total === 0 ? 0 : (used / total) * 100,
    };
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();

  let interval: NodeJS.Timeout;
  let stopped = false;

  async function sendSystemInfo() {
    try {
      // Memory
      const totalMem = os.totalmem();
      const freeMem = os.freemem();
      const usedMem = totalMem - freeMem;
      const memUsage = {
        total: totalMem,
        free: freeMem,
        used: usedMem,
        usedPercent: (usedMem / totalMem) * 100,
      };

      // Disk (Linux: use df -h /)
      let disk = null;
      try {
        const df = execSync("df -k --output=size,used,avail,pcent / | tail -1")
          .toString()
          .trim()
          .split(/\s+/);
        disk = {
          total: parseInt(df[0], 10) * 1024,
          used: parseInt(df[1], 10) * 1024,
          available: parseInt(df[2], 10) * 1024,
          usedPercent: parseFloat(df[3]),
        };
      } catch (e) {
        disk = null;
      }

      // Network (sum all interfaces except loopback)
      const nets = os.networkInterfaces();
      let rx = 0,
        tx = 0;
      Object.keys(nets).forEach((name) => {
        if (name === "lo") return;
        nets[name]?.forEach((iface) => {
          if (!iface.internal && iface.family === "IPv4") {
            rx++;
            tx++;
          }
        });
      });
      const network = {
        interfaces: Object.keys(nets).filter((n) => n !== "lo"),
        count: rx,
      };

      // Uptime
      const uptime = os.uptime(); // seconds

      // Load Average
      const loadavg = os.loadavg(); // [1, 5, 15] min

      // CPU
      const cpu = await getCpuUsage();

      // GPU (NVIDIA only)
      const gpu = getGpuUsage();

      // Temperature
      const temperature = {
        cpu: getCpuTemp(),
        gpu: getGpuTemps(),
      };

      // Swap
      const swap = getSwapUsage();

      const data = `data: ${JSON.stringify({ memUsage, disk, network, cpu, gpu, uptime, loadavg, temperature, swap })}\n\n`;
      await writer.write(encoder.encode(data));
    } catch (err: any) {
      const errorData = `event: error\ndata: ${JSON.stringify({ error: err.message })}\n\n`;
      await writer.write(encoder.encode(errorData));
    }
  }

  // Start sending updates
  sendSystemInfo();
  interval = setInterval(sendSystemInfo, 2000);

  // Cleanup on connection close
  req.signal.addEventListener("abort", () => {
    clearInterval(interval);
    writer.close();
    stopped = true;
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
