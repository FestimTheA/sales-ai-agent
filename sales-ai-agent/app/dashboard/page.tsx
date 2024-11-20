import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Dashboard from "./dashboard";

export default function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;

  if (!token) {
    redirect("/sign-in");
  }

  return <Dashboard />;
}
