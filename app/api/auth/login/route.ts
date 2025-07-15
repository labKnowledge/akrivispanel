import { NextRequest, NextResponse } from "next/server";
import { verifyPassword } from "../../../../lib/db";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (!username || !password) {
    return NextResponse.json(
      { error: "Missing username or password" },
      { status: 400 },
    );
  }
  const valid = verifyPassword(username, password);
  if (!valid) {
    return NextResponse.json(
      { error: "Invalid username or password" },
      { status: 401 },
    );
  }
  // Set a simple session cookie (for demo; in production use JWT or secure session store)
  const res = NextResponse.json({ success: true });
  res.cookies.set("panel_session", Buffer.from(username).toString("base64"), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    secure: process.env.NODE_ENV === "production" ? true : false,
  });
  return res;
}
