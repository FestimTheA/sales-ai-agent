export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
};

export type ColumnsKey =
  | "first_name"
  | "last_name"
  | "email"
  | "role"
  | "actions";

export const INITIAL_VISIBLE_COLUMNS: ColumnsKey[] = [
  "first_name",
  "last_name",
  "email",
  "role",
  "actions",
];

export const columns = [
  { name: "First Name", uid: "first_name" },
  { name: "Last Name", uid: "last_name" },
  { name: "Email", uid: "email" },
  { name: "Role", uid: "role" },
  { name: "Actions", uid: "actions" },
];
