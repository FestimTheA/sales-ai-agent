import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { Lead } from "./data";
import { LeadsTable } from "./leads_table";

export default async function LeadsPage() {
  const fetchLeads = async (): Promise<Lead[]> => {
    const cookieStore = cookies();
    const token = cookieStore.get("jwt")?.value;

    if (!token) {
      redirect("/sign-in");
    }

    const response = await fetch("http://localhost:5000/user_leads", {
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

      if (response.status === 401) {
        redirect("/sign-in");
      }

      return [];
    }

    return body as Lead[];
  };

  const leads: Lead[] = await fetchLeads();

  return <LeadsTable leads={leads} />;
}
