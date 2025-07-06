import { NextRequest, NextResponse } from 'next/server';
import Docker from 'dockerode';

const docker = new Docker();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const container = docker.getContainer(id);
    const logs = await container.logs({ stdout: true, stderr: true, tail: 200, timestamps: false });
    const logStr = logs.toString('utf-8');
    return NextResponse.json({ logs: logStr });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 