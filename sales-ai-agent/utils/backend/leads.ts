import { retrieveTokenServerSide } from "../token";

import { BackendResponse, PaginatedResults } from "@/types";

export const fetchLeads = async (
  page: number = 1,
): Promise<BackendResponse> => {
  const token = retrieveTokenServerSide();

  if (!token) {
    return {
      status: 401,
    };
  }

  const response = await fetch(`http://localhost:5000/all_leads?page=${page}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    // eslint-disable-next-line no-console
    console.error("Failed to fetch leads", response.statusText);

    return {
      status: response.status,
      body: {
        items: [],
        pages: 0,
      },
    };
  }

  const body = await response.json();

  return {
    status: response.status,
    body: body as PaginatedResults,
  };
};
