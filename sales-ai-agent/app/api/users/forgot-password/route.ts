import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  const res = await fetch("http://localhost:5000/users/password_reset_email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });

  if (res.ok) {
    return NextResponse.json({ message: "Success" });
  }

  const result = await res.json();

  return NextResponse.json(result, { status: res.status });
}