import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (res.ok) {
    const { token } = await res.json();

    const response = NextResponse.json({ message: "Login successful" });

    const cookieOptions = {
      httpOnly: true, // very important for security issue (cannot be accessed by JavaScript)
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    };

    response.cookies.set("jwt", token, cookieOptions);

    return response;
  }

  return NextResponse.json({ error: "Login failed" }, { status: 401 });
}
