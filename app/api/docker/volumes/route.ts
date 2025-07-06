import { NextRequest, NextResponse } from 'next/server';
import Docker from 'dockerode';

const docker = new Docker();

export async function GET(req: NextRequest) {
  try {
    const volumes = await docker.listVolumes();
    return NextResponse.json({ volumes: volumes.Volumes });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 