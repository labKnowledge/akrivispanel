import { NextRequest, NextResponse } from "next/server";
import Docker from "dockerode";
import { getSessionUser } from "../../../../lib/auth";

const docker = new Docker();

export async function GET(req: NextRequest) {
  if (!getSessionUser(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const volumes = await docker.listVolumes();
    return NextResponse.json({ volumes: volumes.Volumes });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
