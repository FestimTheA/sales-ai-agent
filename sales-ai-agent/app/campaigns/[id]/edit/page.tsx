import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { Campaign } from "../../data";

import EditForm from "./edit_form";

interface Params {
  id: number;
}

export default async function EditCampaignPage({ params }: { params: Params }) {
  const fetchCampaign = async () => {
    const token = cookies().get("jwt")?.value;

    if (!token) {
      redirect("/sign-in");
    }

    const response = await fetch(
      `http://localhost:5000/campaigns/${params.id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      const msg = await response.json();

      console.error("Failed to fetch campaigns", msg);

      if (response.status === 401) {
        redirect("/sign-in");
      }

      return {} as Campaign;
    }

    return (await response.json()) as Campaign;
  };

  const campaign: Campaign = await fetchCampaign();

  return <EditForm campaign={campaign} />;
}
