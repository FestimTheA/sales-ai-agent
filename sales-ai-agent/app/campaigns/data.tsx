
export type Users = {
  id: number;
  TimeCreated: string;
  CampaignName: string;
  Sourced: number ;
  Outreached: number;
  Accepted: number;
  Responded: number; 
  status: string;
};

export type ColumnsKey =
  | "TimeCreated"
  | "CampaignName" 
  | "Sourced"
  | "Outreached"
  | "Accepted"
  | "Responded"
  | "status"
  | "actions";

export const INITIAL_VISIBLE_COLUMNS: ColumnsKey[] = [
  "TimeCreated",
  "CampaignName",
  "Sourced",
  "Outreached",
  "Accepted",
  "Responded",
  "status",
  "actions",
];

export const columns = [
  {name: "Time Created", uid: "TimeCreated"},
  {name: "Campaign Name", uid: "CampaignName"},
  {name: "Sourced", uid: "Sourced"},
  {name: "Outreached", uid: "Outreached"},
  {name: "Accepted", uid: "Accepted"},
  {name: "Responded", uid: "Responded"},
  {name: "Status", uid: "status", info: "The user's current status"},
  {name: "Actions", uid: "actions"},
];

const TimeCreated = [
  "October 10, 2024, 10:00",
  "October 10, 2024, 10:05",
  "October 10, 2024, 10:10",
];

const Sourced = [
  "750",
];

const Outreached = [ 
  "575",
];

const Accepted = [
  "115",
];

const Responded = [
  "15",
];

const CampaignName = [
  "Campaign 1",
];

const generateMockUserData = (count: number): Users[] => {
  const mockData: Users[] = [];

  for (let i = 0; i < count; i++) {
    const selectedRole1 = TimeCreated[Math.floor(Math.random() * TimeCreated.length)];
    const selectedRole2 = CampaignName[Math.floor(Math.random() * CampaignName.length)];  
    const selectedRole3 = Sourced[Math.floor(Math.random() * Sourced.length)];
    const selectedRole4 = Outreached[Math.floor(Math.random() * Outreached.length)];
    const selectedRole5 = Accepted[Math.floor(Math.random() * Accepted.length)];
    const selectedRole6 = Responded[Math.floor(Math.random() * Responded.length)];

 

    const user: Users = {
      id: i,
      TimeCreated: selectedRole1,
      CampaignName: selectedRole2,
      Sourced: Number(selectedRole3), 
      Outreached: Number(selectedRole4),
      Accepted: Number(selectedRole5),
      Responded: Number(selectedRole6),
      status: "On",
    };

    mockData.push(user);
  }

  return mockData;
};
// "

export const users: Users[] = generateMockUserData(1);
