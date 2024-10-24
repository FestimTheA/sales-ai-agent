import {DangerCircleSvg} from "@/components/icons";
import {SuccessCircleSvg} from "@/components/icons";
import {WarningCircleSvg} from "@/components/icons";

export const statusOptions = [
  {name: "Responded", uid: "active"},
  {name: "No Response", uid: "paused"},
  {name: "Accepted", uid: "vacation"},

] as const;

export type StatusOptions = (typeof statusOptions)[number]["name"];

export const statusColorMap: Record<StatusOptions, JSX.Element> = {
  Responded: SuccessCircleSvg,
  "No Response": DangerCircleSvg, 
  Accepted: WarningCircleSvg,
};

export type Users = {
  id: number;
  TimeOutreached: string;
  FirstName: string;
  LastName: string;
  JobPosition: string;
  Company: string;
  LinkedIn: string;
  BANTScore: number;
  CampaignName: string;
  status: StatusOptions;
};

export type ColumnsKey =
  | "TimeOutreached"
  | "FirstName"
  | "LastName"  
  | "JobPosition"
  | "Company"
  | "LinkedIn"
  | "BANTScore" 
  | "CampaignName" 
  | "status"
  | "actions";

export const INITIAL_VISIBLE_COLUMNS: ColumnsKey[] = [
  "TimeOutreached",
  "FirstName",
  "LastName",
  "JobPosition",
  "Company", 
  "LinkedIn",
  "BANTScore",
  "CampaignName",
  "status",
  "actions",
];

export const columns = [
  {name: "Time Outreached", uid: "TimeOutreached"},
  {name: "First Name", uid: "FirstName"},
  {name: "Last Name", uid: "LastName"},
  {name: "Job Position", uid: "JobPosition"},
  {name: "Company", uid: "Company"},
  {name: "LinkedIn", uid: "LinkedIn"},
  {name: "BANT Score", uid: "BANTScore"},
  {name: "Campaign Name", uid: "CampaignName"},
  {name: "Status", uid: "status", info: "The user's current status"},
  {name: "Actions", uid: "actions"},
];

const TimeOutreached = [
  "October 10, 2024, 10:00",
  "October 10, 2024, 10:05",
  "October 10, 2024, 10:10",
];

const FirstName = [
  "Alice",
  "Benjamin",
  "Clara",
  "Daniel",
  "Emily",
  "Frank",
  "Grace",
  "Henry",
  "Isabella",
  "Jack",
];

const LastName = [
  "Smith",
  "Johnson",
  "Brown",
  "Garcia",
  "Miller",
  "Davis",
  "Martinez",
  "Taylor",
  "Wilson",
  "Anderson",
];

const JobPosition = [
  "Software Engineer",
  "Product Manager",
  "Data Scientist",
  "UX Designer",
  "DevOps Engineer",
  "Marketing Specialist",
  "Sales Executive",
  "Project Coordinator",
  "System Administrator",
  "Business Analyst",
];

const Company = [
  "Google",
  "Microsoft",
  "Apple",
  "Amazon",
  "Facebook",
  "Tesla",
  "IBM",
  "Oracle",
  "Netflix",
  "Adobe",
];

const LinkedIn = [
"https://www.linkedin.com/in/festimbejtullahu/",
];

const BANTScore = [
  50,
  45,
  40,
  35,
  30,
  25,
  20,
  15,
  10,
  5,
];

const CampaignName = [
  "Campaign 1",
  "Campaign 2",
];

const generateMockUserData = (count: number): Users[] => {
  const mockData: Users[] = [];

  for (let i = 0; i < count; i++) {
    const selectedRole1 = TimeOutreached[Math.floor(Math.random() * TimeOutreached.length)];
    const selectedRole2 = FirstName[Math.floor(Math.random() * FirstName.length)];
    const selectedRole3 = LastName[Math.floor(Math.random() * LastName.length)];
    const selectedRole4 = JobPosition[Math.floor(Math.random() * JobPosition.length)];
    const selectedRole5 = Company[Math.floor(Math.random() * Company.length)];
    const selectedRole6 = LinkedIn[Math.floor(Math.random() * LinkedIn.length)];
    const selectedRole7 = BANTScore[Math.floor(Math.random() * BANTScore.length)];
    const selectedRole8 = CampaignName[Math.floor(Math.random() * CampaignName.length)];

    const user: Users = {
      id: i,
      TimeOutreached: selectedRole1,
      FirstName: selectedRole2,
      LastName: selectedRole3,
      JobPosition: selectedRole4,
      Company: selectedRole5,
      LinkedIn: selectedRole6,
      BANTScore: selectedRole7,
      CampaignName: selectedRole8,
      status:
        Math.random() > 0.8
          ? "No Response"
        
            : Math.random() > 0.2
              ? "Responded"
              : "Accepted", 
    };

    mockData.push(user);
  }

  return mockData;
};
// "

export const users: Users[] = generateMockUserData(100);
