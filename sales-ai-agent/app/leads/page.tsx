import { redirect } from "next/navigation";

import { cookies } from "next/headers";

import { Lead } from "./data";
import { LeadsTable } from "./leads_table";

import { fetchLeads } from "@/utils/backend/leads";
import { PaginatedResults } from "@/types";

export default async function LeadsPage() {
  const response = await fetchLeads();

  if (response.status === 401) {
    // cookies().set("jwt", "", { expires: new Date(0) });
    redirect("/sign-in");
  }

  const body = response.body as PaginatedResults;

  return <LeadsTable leads={body.items as Lead[]} />;
}
