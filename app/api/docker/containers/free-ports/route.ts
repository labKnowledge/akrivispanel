import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { NextRequest } from "next/server";
import Docker from "dockerode";

const docker = new Docker();

export async function POST(req: NextRequest) {
  if (!getSessionUser(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();
    const { ports = [] } = body; // [{ container: "5678" }, ...]
    // Get all used host ports
    const containers = await docker.listContainers({ all: true });
    const usedPorts = new Set();
    containers.forEach((c: any) => {
      (c.Ports || []).forEach((p: any) => {
        if (p.PublicPort) usedPorts.add(Number(p.PublicPort));
      });
    });
    // For each requested container port, find a free host port
    const assigned = ports.map((p: any) => {
      let base = Number(p.container) || 30000;
      let host = base;
      while (usedPorts.has(host)) host++;
      usedPorts.add(host);
      return { host, container: p.container };
    });
    return NextResponse.json({ ports: assigned });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
