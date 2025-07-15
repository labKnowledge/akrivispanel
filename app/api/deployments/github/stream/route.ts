import { NextRequest } from "next/server";
import {
  cloneRepo,
  detectBuildType,
  buildImage,
  runImage,
} from "../../../../../lib/deployment/githubDeploy";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const { repoUrl, branch = "main", buildType, env, ports } = await req.json();

  const encoder = new TextEncoder();
  let controller: ReadableStreamDefaultController<any>;
  const stream = new ReadableStream({
    start(ctrl) {
      controller = ctrl;
      (async () => {
        async function emit(line: string) {
          controller.enqueue(encoder.encode(`data: ${line}\n\n`));
        }
        try {
          await emit("Cloning repository...");
          let repoPath = "";
          try {
            repoPath = await cloneRepo(repoUrl, branch);
            await emit("Repository cloned successfully.");
          } catch (err: any) {
            await emit(`Failed to clone repo: ${err.message}`);
            controller.close();
            return;
          }

          await emit("Detecting build type...");
          let detectedBuildType: "compose" | "dockerfile" | null = null;
          try {
            detectedBuildType = await detectBuildType(repoPath);
            if (!detectedBuildType) {
              await emit("No Dockerfile or docker-compose.yml found in repo.");
              controller.close();
              return;
            }
            await emit(`Build type detected: ${detectedBuildType}`);
          } catch (err: any) {
            await emit(`Failed to detect build type: ${err.message}`);
            controller.close();
            return;
          }

          // Extract repo name for image tag
          let repoName = "repo";
          try {
            const match = repoUrl.match(/([^/]+)(?:\.git)?$/);
            if (match && match[1]) {
              repoName = match[1].replace(/[^a-zA-Z0-9_.-]/g, "");
            }
          } catch {}
          const imageTag = `${repoName.toLowerCase().replace(/[^a-zA-Z0-9_.-]/g, "")}:latest`;

          await emit("Building Docker image...");
          let buildSuccess = false;
          await buildImage(
            repoPath,
            detectedBuildType,
            imageTag,
            async (log) => {
              await emit(log);
            },
          ).then((buildResult) => {
            buildSuccess = buildResult.success;
            if (!buildResult.success) {
              emit(`Build failed: ${buildResult.output}`);
            }
          });
          if (!buildSuccess) {
            controller.close();
            return;
          }
          await emit("Image built successfully.");
          await emit(`Image tag: ${imageTag}`);

          // Run the image and stream logs
          await emit("Running Docker container...");
          try {
            const { containerId, waitPromise } = await runImage(
              imageTag,
              env,
              ports,
              async (log) => {
                await emit(log);
              },
            );
            await emit(`Container started: ${containerId}`);
            await waitPromise;
            await emit("Container stopped.");
            await emit("Deployment complete!");
          } catch (err: any) {
            await emit(`Failed to run container: ${err.message}`);
          }
          controller.close();
        } catch (err: any) {
          await emit(`Error: ${err.message}`);
          controller.close();
        }
      })();
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
