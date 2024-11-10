import { redirect } from "next/navigation";

import { Lead } from "./data";
import { LeadsTable } from "./leads_table";

import { fetchLeads } from "@/utils/backend/leads";
import { PaginatedResults } from "@/types";

export default async function LeadsPage() {
  const response = await fetchLeads();

  if (response.status === 401) {
    redirect("/sign-in");
  }

  const body = response.body as PaginatedResults;

  return <LeadsTable leads={body.items as Lead[]} />;
}
