import { NextRequest, NextResponse } from "next/server";

import { retrieveTokenServerSide } from "@/utils/token";

export async function POST(request: NextRequest) {
  const token = retrieveTokenServerSide();

  const { email, first_name, last_name } = await request.json();

  const res = await fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email,
      first_name,
      last_name,
    }),
  });

  if (res.ok) {
    return NextResponse.json({ message: "User added successfully." });
  }

  const result = await res.json();

  return NextResponse.json(result, { status: res.status });
}

export async function PUT(request: NextRequest) {
  const token = retrieveTokenServerSide();

  const { id, email, first_name, last_name } = await request.json();

  const res = await fetch(`http://localhost:5000/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email,
      first_name,
      last_name,
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

  const res = await fetch(`http://localhost:5000/users/${id}`, {
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
