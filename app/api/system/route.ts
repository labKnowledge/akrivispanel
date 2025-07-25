import { NextRequest, NextResponse } from "next/server";
import os from "os";
import { execSync } from "child_process";
import { getSessionUser } from "../../../lib/auth";

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

export async function GET(req: NextRequest) {
  if (!getSessionUser(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
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
          // No direct rx/tx bytes from os, so just report address
          rx++;
          tx++;
        }
      });
    });
    const network = {
      interfaces: Object.keys(nets).filter((n) => n !== "lo"),
      count: rx,
    };

    // CPU
    const cpu = await getCpuUsage();

    return NextResponse.json({ memUsage, disk, network, cpu });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
