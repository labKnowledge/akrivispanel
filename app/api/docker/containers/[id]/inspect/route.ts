import { NextRequest, NextResponse } from "next/server";
import Docker from "dockerode";
import { getSessionUser } from "../../../../../../lib/auth";
const docker = new Docker();

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!getSessionUser(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  try {
    const container = docker.getContainer(id);
    const inspect = await container.inspect();
    return NextResponse.json({ inspect });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
