import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { password, token } = await request.json();

  const res = await fetch("http://localhost:5000/users/set_password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      token,
    }),
  });

  if (res.ok) {
    return NextResponse.json({ message: "Password was reset successfully." });
  }

  const result = await res.json();

  return NextResponse.json(result, { status: res.status });
}