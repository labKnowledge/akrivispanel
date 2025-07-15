import { NextRequest } from 'next/server';

export function getSessionUser(req: NextRequest): string | null {
  const session = req.cookies.get('panel_session');
  if (!session) return null;
  try {
    return Buffer.from(session.value, 'base64').toString('utf-8');
  } catch {
    return null;
  }
} 