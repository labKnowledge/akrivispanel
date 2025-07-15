import { NextRequest } from "next/server";
import Docker from "dockerode";
// import { getSessionUser } from '../../../../../lib/auth';

const docker = new Docker();

export async function GET(req: NextRequest) {
  // No auth check for SSE, to match other endpoints
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();

  let interval: NodeJS.Timeout;
  let stopped = false;

  async function sendImages() {
    if (stopped) return;
    try {
      const images = await docker.listImages();
      try {
        await writer.write(
          encoder.encode(`data: ${JSON.stringify({ images })}\n\n`),
        );
      } catch (err) {
        stopped = true;
        clearInterval(interval);
        writer.close();
      }
    } catch (err: any) {
      try {
        await writer.write(
          encoder.encode(
            `event: error\ndata: ${JSON.stringify({ error: err.message })}\n\n`,
          ),
        );
      } catch {}
      stopped = true;
      clearInterval(interval);
      writer.close();
    }
  }

  // Start sending updates
  sendImages();
  interval = setInterval(sendImages, 2000);

  // Cleanup on connection close
  req.signal.addEventListener("abort", () => {
    stopped = true;
    clearInterval(interval);
    writer.close();
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
