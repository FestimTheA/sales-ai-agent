import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { UsersTable } from "./users_table";
import { User } from "./data";

import { fetchUsers } from "@/utils/backend/users";
import { PaginatedResults } from "@/types";

export default async function UsersPage() {
  const response = await fetchUsers();

  if (response.status === 401) {
    // cookies().set("jwt", "", { expires: new Date(0) });
    redirect("/sign-in");
  }

  const body = response.body as PaginatedResults;

  return <UsersTable users={body.items as User[]} />;
}
