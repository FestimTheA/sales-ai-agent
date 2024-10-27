import { DangerCircleSvg } from "@/components/icons";
import { SuccessCircleSvg } from "@/components/icons";
import { WarningCircleSvg } from "@/components/icons";

export const statusOptions = [
  { name: "Outreached", uid: "active" },
  { name: "Failed", uid: "paused" },
  { name: "Waiting", uid: "vacation" },
] as const;

export type StatusOptions = (typeof statusOptions)[number]["name"];

export const statusColorMap: Record<StatusOptions, JSX.Element> = {
  Outreached: SuccessCircleSvg,
  Failed: DangerCircleSvg,
  Waiting: WarningCircleSvg,
};

export type Lead = {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  company: string;
  linkedin: string;
  bant_score: number;
  campaign: string;
  status: string; // Outreached, Failed, Waiting
  created_at: Date;
};

export type ColumnsKey =
  | "created_at"
  | "first_name"
  | "last_name"
  | "position"
  | "company"
  | "linkedin"
  | "bant_score"
  | "campaign"
  | "status"
  | "actions";

export const INITIAL_VISIBLE_COLUMNS: ColumnsKey[] = [
  "created_at",
  "first_name",
  "last_name",
  "position",
  "company",
  "linkedin",
  "bant_score",
  "campaign",
  "status",
  "actions",
];

export const columns = [
  { name: "Time Sourced", uid: "created_at" },
  { name: "First Name", uid: "first_name" },
  { name: "Last Name", uid: "last_name" },
  { name: "Job Position", uid: "position" },
  { name: "Company", uid: "company" },
  { name: "LinkedIn", uid: "linkedin" },
  { name: "BANT Score", uid: "bant_score" },
  { name: "Campaign Name", uid: "campaign" },
  { name: "Status", uid: "status", info: "The lead's current status" },
  { name: "Actions", uid: "actions" },
];
