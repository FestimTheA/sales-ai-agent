import { retrieveTokenServerSide } from "../token";

import { BackendResponse, PaginatedResults } from "@/types";

export const fetchUsers = async (
  page: number = 1,
): Promise<BackendResponse> => {
  const token = retrieveTokenServerSide();

  if (!token) {
    return {
      status: 401,
    };
  }

  const response = await fetch(`http://localhost:5000/users?page=${page}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const body = await response.json();

  if (!response.ok) {
    // eslint-disable-next-line no-console
    console.error("Failed to fetch leads", body);

    return {
      status: response.status,
    };
  }

  return {
    status: response.status,
    body: body as PaginatedResults,
  };
};
