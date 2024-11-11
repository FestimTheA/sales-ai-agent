import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { retrieveTokenServerSide } from "@/utils/token";

export async function POST(request: NextRequest) {
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
    return NextResponse.json({ message: "Create successful" });
  }

  const result = await res.json();

  return NextResponse.json(result, { status: res.status });
}

export async function PUT(request: NextRequest) {
  const token = retrieveTokenServerSide();

  const { id, name, note, jobPositions, locations, industries, numberOfLeads } =
    await request.json();

  const res = await fetch(`http://localhost:5000/campaigns/${id}`, {
    method: "PUT",
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
    return NextResponse.json({ message: "Update successful" });
  }

  const result = await res.json();

  return NextResponse.json(result, { status: res.status });
}

export async function DELETE(request: NextRequest) {
  const token = retrieveTokenServerSide();

  const { id } = await request.json();

  const res = await fetch(`http://localhost:5000/campaigns/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.ok) {
    return NextResponse.json({ message: "Delete successful" });
  }

  const result = await res.json();

  return NextResponse.json(result, { status: res.status });
}
