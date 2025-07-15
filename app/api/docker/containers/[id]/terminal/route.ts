import { NextRequest } from "next/server";
import Docker from "dockerode";

const docker = new Docker();

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  if (!id) {
    return new Response("Missing container ID", { status: 400 });
  }

  const stream = new ReadableStream({
    async start(controller) {
      const container = docker.getContainer(id);
      let exec;
      try {
        exec = await container.exec({
          Cmd: ["/bin/sh"],
          AttachStdin: true,
          AttachStdout: true,
          AttachStderr: true,
          Tty: true,
        });
      } catch (err) {
        controller.enqueue(
          `event: error\ndata: Failed to start shell: ${err}\n\n`,
        );
        controller.close();
        return;
      }
      let dockerStream;
      try {
        dockerStream = await exec.start({ hijack: true, stdin: true });
      } catch (err) {
        controller.enqueue(
          `event: error\ndata: Failed to start exec: ${err}\n\n`,
        );
        controller.close();
        return;
      }
      dockerStream.on("data", (data: Buffer) => {
        controller.enqueue(
          `data: ${data.toString("utf-8").replace(/\n/g, "\ndata: ")}\n\n`,
        );
      });
      dockerStream.on("end", () => {
        controller.enqueue("event: end\ndata: Shell session ended\n\n");
        controller.close();
      });
    },
    cancel() {
      // Optionally handle stream cancellation
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
