import { redirect } from "next/navigation";

import { User } from "../../data";

import EditUserForm from "./edit_form";

import { retrieveTokenServerSide } from "@/utils/token";

type Params = {
  id: string;
};

export default async function EditUser({ params }: { params: Params }) {
  const fetchUser = async () => {
    const token = retrieveTokenServerSide();

    if (!token) {
      redirect("/sign-in");
    }

    const response = await fetch(`http://localhost:5000/users/${params.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        redirect("/sign-in");
      } else {
        const msg = await response.json();

        // eslint-disable-next-line no-console
        console.error("Failed to fetch users", msg);
      }

      return {} as User;
    }

    return (await response.json()) as User;
  };

  const user: User = await fetchUser();

  return <EditUserForm user={user} />;
}
