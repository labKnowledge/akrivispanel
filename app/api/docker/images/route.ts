import { NextRequest, NextResponse } from "next/server";
import Docker from "dockerode";
import { getSessionUser } from "../../../../lib/auth";

const docker = new Docker();

export async function GET(req: NextRequest) {
  if (!getSessionUser(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const images = await docker.listImages();
    return NextResponse.json({ images });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id, repoTag } = await req.json();
    if (!id && !repoTag) {
      return NextResponse.json(
        { error: "Image id or repoTag is required" },
        { status: 400 },
      );
    }
    let imageRef = id;
    if (!imageRef && repoTag) imageRef = repoTag;
    if (!imageRef) {
      return NextResponse.json(
        { error: "No valid image reference provided" },
        { status: 400 },
      );
    }
    const image = docker.getImage(imageRef);
    await image.remove({ force: true });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
