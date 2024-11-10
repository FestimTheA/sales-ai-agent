export type Campaign = {
  id: number;
  name: string;
  filters: { [key: string]: any };
  total_leads_to_source: number;
  note: string;
  sourced: number;
  outreached: number;
  accepted: number;
  responded: number;
  status: string; // "On" | "Off";
  created_at: Date;
  updated_at: string;
};

export type ColumnsKey =
  | "name"
  | "created_at"
  | "updated_at"
  | "sourced"
  | "outreached"
  | "accepted"
  | "responded"
  | "status"
  | "actions";

export const INITIAL_VISIBLE_COLUMNS: ColumnsKey[] = [
  "created_at",
  "updated_at",
  "name",
  "sourced",
  "outreached",
  "accepted",
  "responded",
  "status",
  "actions",
];

export const columns = [
  { name: "Time Created", uid: "created_at" },
  { name: "Time Last Updated", uid: "updated_at" },
  { name: "Campaign Name", uid: "name" },
  { name: "Sourced", uid: "sourced" },
  { name: "Outreached", uid: "outreached" },
  { name: "Accepted", uid: "accepted" },
  { name: "Responded", uid: "responded" },
  { name: "Status", uid: "status", info: "The campaign's current status" },
  { name: "Actions", uid: "actions" },
];

export const JobPositions = [
  { label: "Software Engineer", value: "Software Engineer" },
  { label: "Marketing Manager", value: "Marketing Manager" },
  { label: "Chief Executive Officer", value: "Chief Executive Officer" },
  { label: "Chief Financial Officer", value: "Chief Financial Officer" },
  { label: "Chief Marketing Officer", value: "Chief Marketing Officer" },
  { label: "Project Manager", value: "Project Manager" },
];

export const locations = [
  { label: "New York City", value: "New York City" },
  { label: "Los Angeles", value: "Los Angeles" },
  { label: "Chicago", value: "Chicago" },
  { label: "Houston", value: "Houston" },
  { label: "Miami", value: "Miami" },
  { label: "San Francisco", value: "San Francisco" },
];

export const industries = [
  { label: "Technology", value: "Technology" },
  { label: "Healthcare", value: "Healthcare" },
  { label: "Finance", value: "Finance" },
  { label: "Education", value: "Education" },
  { label: "Manufacturing", value: "Manufacturing" },
  { label: "Retail", value: "Retail" },
];

export const campaigns = [
  { label: "Pilot", value: "pilot" },
  { label: "Campaign 2", value: "campaign-2" },
  { label: "Campaign 3", value: "campaign-3" },
];
