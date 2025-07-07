import { NextRequest, NextResponse } from 'next/server';
import { deployFromGitHub } from '../../../../lib/deployment/githubDeploy';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { repoUrl, branch = 'main', buildType, env } = body;
    if (!repoUrl) {
      return NextResponse.json({ error: 'repoUrl is required' }, { status: 400 });
    }
    const result = await deployFromGitHub({ repoUrl, branch, buildType, env });
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 