import { cookies } from "next/headers";

export const retrieveTokenServerSide = (): string | undefined => {
  const cookieStore = cookies();

  return cookieStore.get("jwt")?.value;
};
