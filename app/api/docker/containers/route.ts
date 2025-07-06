import { NextRequest, NextResponse } from 'next/server';
import Docker from 'dockerode';

const docker = new Docker();

export async function GET(req: NextRequest) {
  try {
    const containers = await docker.listContainers({ all: true });
    return NextResponse.json({ containers });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 