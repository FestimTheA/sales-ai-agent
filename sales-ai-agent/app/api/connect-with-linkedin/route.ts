import { NextRequest, NextResponse } from "next/server";

import { retrieveTokenServerSide } from "@/utils/token";

export async function POST(request: NextRequest) {
  const token = retrieveTokenServerSide();

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const linkedinCookies = await request.json();

  const res = await fetch("http://localhost:5000/cookies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(linkedinCookies),
  });

  if (res.ok) {
    return NextResponse.json({ message: "Connected successfully" });
  }

  const result = await res.json();

  return NextResponse.json(result, { status: res.status });
}
