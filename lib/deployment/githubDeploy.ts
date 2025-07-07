import path from 'path';
import fs from 'fs-extra';
import simpleGit from 'simple-git';
import os from 'os';
import { v4 as uuidv4 } from 'uuid';
import Docker from 'dockerode';
import { exec } from 'child_process';
import util from 'util';

const execAsync = util.promisify(exec);
const docker = new Docker();

async function cloneRepo(repoUrl: string, branch: string): Promise<string> {
  const tempDir = path.join(os.tmpdir(), `deploy_${uuidv4()}`);
  await fs.ensureDir(tempDir);
  const git = simpleGit();
  await git.clone(repoUrl, tempDir, ['--branch', branch, '--single-branch']);
  return tempDir;
}

async function detectBuildType(repoPath: string): Promise<'compose' | 'dockerfile' | null> {
  const composePath = path.join(repoPath, 'docker-compose.yml');
  const dockerfilePath = path.join(repoPath, 'Dockerfile');
  if (await fs.pathExists(composePath)) return 'compose';
  if (await fs.pathExists(dockerfilePath)) return 'dockerfile';
  return null;
}

async function buildImage(
  repoPath: string,
  buildType: 'compose' | 'dockerfile',
  tag: string,
  onLog?: (log: string) => void
): Promise<{ success: boolean; output: string; logs: string[] }> {
  if (buildType === 'dockerfile') {
    try {
      const stream = await docker.buildImage({ context: repoPath, src: ['.'] }, { t: tag });
      const logs: string[] = [];
      await new Promise((resolve, reject) => {
        docker.modem.followProgress(
          stream,
          (err: any, res: any) => (err ? reject(err) : resolve(res)),
          (event: any) => {
            if (event.stream) {
              const line = event.stream.trim();
              logs.push(line);
              if (onLog) onLog(line);
            } else if (event.error) {
              const line = event.error.trim();
              logs.push(line);
              if (onLog) onLog(line);
            }
          }
        );
      });
      console.log('buildImage', { success: true, output: `Image built with tag ${tag}`, logs });
      return { success: true, output: `Image built with tag ${tag}`, logs };
    } catch (err: any) {
      console.log('buildImage', { success: false, output: err.message, logs: [err.message] });
      if (onLog) onLog(err.message);
      return { success: false, output: err.message, logs: [err.message] };
    }
  } else {
    try {
      // Use spawn for real-time log streaming
      const { spawn } = require('child_process');
      const logs: string[] = [];
      await new Promise((resolve, reject) => {
        const proc = spawn('docker-compose', ['-f', 'docker-compose.yml', 'build'], { cwd: repoPath });
        proc.stdout.on('data', (data: Buffer) => {
          const lines = data.toString().split('\n').filter(Boolean);
          for (const line of lines) {
            logs.push(line);
            if (onLog) onLog(line);
          }
        });
        proc.stderr.on('data', (data: Buffer) => {
          const lines = data.toString().split('\n').filter(Boolean);
          for (const line of lines) {
            logs.push(line);
            if (onLog) onLog(line);
          }
        });
        proc.on('close', (code: number) => {
          if (code === 0) resolve(null);
          else reject(new Error(`docker-compose build exited with code ${code}`));
        });
        proc.on('error', (err: any) => {
          reject(err);
        });
      });
      return { success: true, output: logs.join('\n'), logs };
    } catch (err: any) {
      if (onLog) onLog(err.message);
      return { success: false, output: err.message, logs: [err.message] };
    }
  }
}

/**
 * Run a Docker image and stream logs in real time.
 * @param imageTag The Docker image tag to run
 * @param env Optional environment variables
 * @param ports Optional ports mapping (e.g., { "8080/tcp": 8080 })
 * @param onLog Callback for log lines
 * @returns { containerId, waitPromise }
 */
async function runImage(
  imageTag: string,
  env?: Record<string, string>,
  ports?: Record<string, number>,
  onLog?: (log: string) => void
): Promise<{ containerId: string; waitPromise: Promise<void> }> {
  const docker = new Docker();
  const Env = env ? Object.entries(env).map(([k, v]) => `${k}=${v}`) : undefined;
  const ExposedPorts = ports
    ? Object.fromEntries(Object.keys(ports).map((p) => [p, {}]))
    : undefined;
  const HostConfig = ports
    ? {
        PortBindings: Object.fromEntries(
          Object.entries(ports).map(([containerPort, hostPort]) => [containerPort, [{ HostPort: String(hostPort) }]])
        ),
      }
    : undefined;
  const container = await docker.createContainer({
    Image: imageTag,
    Env,
    ExposedPorts,
    HostConfig,
    Tty: false,
  });
  await container.start();
  if (onLog) onLog(`Container started: ${container.id}`);
  // Attach to logs
  const logStream = await container.logs({
    follow: true,
    stdout: true,
    stderr: true,
    timestamps: false,
  });
  logStream.on('data', (chunk: Buffer) => {
    const lines = chunk.toString().split('\n').filter(Boolean);
    for (const line of lines) {
      if (onLog) onLog(line);
    }
  });
  logStream.on('error', (err: any) => {
    if (onLog) onLog(`Log stream error: ${err.message}`);
  });
  // Wait for container to stop
  const waitPromise = container.wait().then(() => {
    if (onLog) onLog('Container stopped.');
  });
  return { containerId: container.id, waitPromise };
}

/**
 * Stop and remove a Docker container by id.
 * @param containerId The id of the container to stop and remove
 */
async function stopAndRemoveContainer(containerId: string): Promise<void> {
  const docker = new Docker();
  const container = docker.getContainer(containerId);
  try {
    await container.stop();
  } catch (err: any) {
    // Ignore if already stopped
    if (!/is not running/.test(err.message)) throw err;
  }
  await container.remove();
}

export async function deployFromGitHub({ repoUrl, branch = 'main', buildType, env }: {
  repoUrl: string;
  branch?: string;
  buildType?: 'dockerfile' | 'compose';
  env?: Record<string, string>;
}) {
  // 1. Clone the repo to a temp directory
  let repoPath = '';
  try {
    repoPath = await cloneRepo(repoUrl, branch);
  } catch (err: any) {
    return { status: 'error', message: `Failed to clone repo: ${err.message}` };
  }

  // 2. Detect build type (Dockerfile or docker-compose.yml)
  let detectedBuildType: 'compose' | 'dockerfile' | null = null;
  try {
    detectedBuildType = await detectBuildType(repoPath);
    if (!detectedBuildType) {
      return { status: 'error', message: 'No Dockerfile or docker-compose.yml found in repo.' };
    }
  } catch (err: any) {
    return { status: 'error', message: `Failed to detect build type: ${err.message}` };
  }

  // 3. Build the Docker image
  // Extract repo name for image tag
  let repoName = 'repo';
  try {
    // Extract the last path segment (repo or space name) for both GitHub and Hugging Face URLs
    // Handles .../repo.git, .../repo, .../spaces/user/space, etc.
    const match = repoUrl.match(/([^/]+)(?:\.git)?$/);
    if (match && match[1]) {
      repoName = match[1].replace(/[^a-zA-Z0-9_.-]/g, ''); // sanitize for docker tag
    }
  } catch {}
  const imageTag = `${repoName.toLowerCase().replace(/[^a-zA-Z0-9_.-]/g, '')}:latest`;
  const buildResult = await buildImage(repoPath, detectedBuildType, imageTag);
  if (!buildResult.success) {
    return { status: 'error', message: `Build failed: ${buildResult.output}`, buildLogs: buildResult.logs };
  }

  // 4. Run the container (placeholder)
  // 5. Return status/logs
  return {
    status: 'success',
    message: 'Image built successfully. Use the imageTag below to deploy using the existing Docker deployment API.',
    repoUrl,
    branch,
    buildType: detectedBuildType,
    env,
    repoPath,
    imageTag,
    buildOutput: buildResult.output,
    buildLogs: buildResult.logs,
    nextStep: {
      description: 'Deploy this image using your existing Docker deployment API.',
      exampleApiCall: {
        method: 'POST',
        endpoint: '/api/docker/containers',
        body: {
          image: imageTag,
          env: env || {},
          // Add ports, volumes, etc. as needed
        }
      }
    }
  };
}

export { cloneRepo, detectBuildType, buildImage, runImage, stopAndRemoveContainer }; 