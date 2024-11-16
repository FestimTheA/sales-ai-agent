import { DangerCircleSvg } from "@/components/icons";
import { SuccessCircleSvg } from "@/components/icons";
import { WarningCircleSvg } from "@/components/icons";

export const statusOptions = [
  { name: "outreached", uid: "active" },
  { name: "failed", uid: "paused" },
  { name: "waiting", uid: "vacation" },
] as const;

export type StatusOptions = (typeof statusOptions)[number]["name"];

export const statusColorMap: Record<StatusOptions, JSX.Element> = {
  outreached: SuccessCircleSvg,
  failed: DangerCircleSvg,
  waiting: WarningCircleSvg,
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
  | "link"
  | "score"
  | "campaign"
  | "status"
  | "actions";

export const INITIAL_VISIBLE_COLUMNS: ColumnsKey[] = [
  "created_at",
  "first_name",
  "last_name",
  "position",
  "company",
  "link",
  "score",
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
  { name: "LinkedIn", uid: "link" },
  { name: "BANT Score", uid: "score" },
  { name: "Campaign Name", uid: "campaign" },
  { name: "Status", uid: "status", info: "The lead's current status" },
  { name: "Actions", uid: "actions" },
];
