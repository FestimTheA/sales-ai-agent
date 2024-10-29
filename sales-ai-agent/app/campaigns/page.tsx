import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { CampaignsTable } from "./campaigns_table";
import { Campaign } from "./data";

export default async function CampaignsPage() {
  const fetchCampaigns = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("jwt")?.value;

    if (!token) {
      redirect("/sign-in");
    }

    const response = await fetch("http://localhost:5000/campaigns", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const msg = await response.json();
      console.error("Failed to fetch campaigns", msg);

      if (response.status === 401) {
        redirect("/sign-in");
      }

      return [];
    }

    return (await response.json()) as Campaign[];
  };

  const campaigns: Campaign[] = await fetchCampaigns();
  return <CampaignsTable campaigns={campaigns} />;
}
