export type Campaign = {
  id: number;
  name: string;
  sourced: number;
  outreached: number;
  accepted: number;
  responded: number;
  status: string; // "On" | "Off";
  created_at: Date;
  updated_at: Date;
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

// export type Users = {
//   id: number;
//   TimeCreated: string;
//   CampaignName: string;
//   Sourced: number;
//   Outreached: number;
//   Accepted: number;
//   Responded: number;
//   status: string;
// };

// const TimeCreated = [
//   "October 10, 2024, 10:00",
//   "October 10, 2024, 10:05",
//   "October 10, 2024, 10:10",
// ];

// const Sourced = [
//   "750",
// ];

// const Outreached = [
//   "575",
// ];

// const Accepted = [
//   "115",
// ];

// const Responded = [
//   "15",
// ];

// const CampaignName = [
//   "Campaign 1",
// ];

// const generateMockUserData = (count: number): Users[] => {
//   const mockData: Users[] = [];

//   for (let i = 0; i < count; i++) {
//     const selectedRole1 = TimeCreated[Math.floor(Math.random() * TimeCreated.length)];
//     const selectedRole2 = CampaignName[Math.floor(Math.random() * CampaignName.length)];
//     const selectedRole3 = Sourced[Math.floor(Math.random() * Sourced.length)];
//     const selectedRole4 = Outreached[Math.floor(Math.random() * Outreached.length)];
//     const selectedRole5 = Accepted[Math.floor(Math.random() * Accepted.length)];
//     const selectedRole6 = Responded[Math.floor(Math.random() * Responded.length)];

//     const user: Users = {
//       id: i,
//       TimeCreated: selectedRole1,
//       CampaignName: selectedRole2,
//       Sourced: Number(selectedRole3),
//       Outreached: Number(selectedRole4),
//       Accepted: Number(selectedRole5),
//       Responded: Number(selectedRole6),
//       status: "On",
//     };

//     mockData.push(user);
//   }

//   return mockData;
// };
// // "

// export const users: Users[] = generateMockUserData(1);
