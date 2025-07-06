import { NextRequest, NextResponse } from 'next/server';
import os from 'os';
import { execSync } from 'child_process';

export async function GET(req: NextRequest) {
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
      const df = execSync('df -k --output=size,used,avail,pcent / | tail -1').toString().trim().split(/\s+/);
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
    let rx = 0, tx = 0;
    Object.keys(nets).forEach((name) => {
      if (name === 'lo') return;
      nets[name]?.forEach((iface) => {
        if (!iface.internal && iface.family === 'IPv4') {
          // No direct rx/tx bytes from os, so just report address
          rx++;
          tx++;
        }
      });
    });
    const network = { interfaces: Object.keys(nets).filter((n) => n !== 'lo'), count: rx };

    return NextResponse.json({ memUsage, disk, network });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 