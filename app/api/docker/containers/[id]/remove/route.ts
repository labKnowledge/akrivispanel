import { NextRequest, NextResponse } from 'next/server';
import Docker from 'dockerode';

const docker = new Docker();

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const container = docker.getContainer(id);
    await container.remove({ force: true });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 