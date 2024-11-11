import { NextRequest, NextResponse } from "next/server";

import { retrieveTokenServerSide } from "@/utils/token";

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
