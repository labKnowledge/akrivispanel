import { NextRequest, NextResponse } from "next/server";
import Docker from "dockerode";

const docker = new Docker();

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const { command } = await req.json();
  try {
    const container = docker.getContainer(id);
    const exec = await container.exec({
      Cmd: ["/bin/sh", "-c", command],
      AttachStdout: true,
      AttachStderr: true,
    });
    const stream = await exec.start({});
    let output = "";
    stream.on("data", (data: Buffer) => {
      output += data.toString("utf-8");
    });
    await new Promise((resolve) => stream.on("end", resolve));
    return NextResponse.json({ output });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
