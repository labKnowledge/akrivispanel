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

async function buildImage(repoPath: string, buildType: 'compose' | 'dockerfile', tag: string): Promise<{ success: boolean; output: string; logs: string[] }> {
  if (buildType === 'dockerfile') {
    try {
      const stream = await docker.buildImage({ context: repoPath, src: ['.'] }, { t: tag });
      const logs: string[] = [];
      await new Promise((resolve, reject) => {
        docker.modem.followProgress(
          stream,
          (err: any, res: any) => (err ? reject(err) : resolve(res)),
          (event: any) => {
            if (event.stream) logs.push(event.stream.trim());
            else if (event.error) logs.push(event.error.trim());
          }
        );
      });
      console.log('buildImage', { success: true, output: `Image built with tag ${tag}`, logs });
      return { success: true, output: `Image built with tag ${tag}`, logs };
    } catch (err: any) {
      console.log('buildImage', { success: false, output: err.message, logs: [err.message] });
      return { success: false, output: err.message, logs: [err.message] };
    }
  } else {
    try {
      const { stdout, stderr } = await execAsync(`docker-compose -f docker-compose.yml build`, { cwd: repoPath });
      const logs = (stdout + '\n' + stderr).split('\n').filter(Boolean);
      return { success: true, output: stdout || stderr, logs };
    } catch (err: any) {
      return { success: false, output: err.message, logs: [err.message] };
    }
  }
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
    // Remove trailing .git if present and split by '/'
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

export { cloneRepo, detectBuildType, buildImage }; 