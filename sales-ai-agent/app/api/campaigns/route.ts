import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, note, jobPositions, locations, industries, numberOfLeads } =
    await request.json();

  const token = cookies().get("jwt")?.value;

  const res = await fetch("http://localhost:5000/campaigns", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      note,
      total_leads_to_source: numberOfLeads,
      filters: {
        positions: jobPositions,
        locations,
        industries,
      },
    }),
  });

  if (res.ok) {
    return NextResponse.json({ message: "Login successful" });
  }

  const result = await res.json();

  return NextResponse.json(result, { status: res.status });
}
