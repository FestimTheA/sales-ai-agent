
export type Users = {
  id: number;
  FirstName: string; 
  LastName: string;
  Email: string;   
  Role: string;
};

export type ColumnsKey =
  | "FirstName"
  | "LastName"
  | "Email"
  | "Role"
  | "actions";

export const INITIAL_VISIBLE_COLUMNS: ColumnsKey[] = [
  "FirstName",
  "LastName",
  "Email",
  "Role",
  "actions",
];

export const columns = [
  {name: "First Name", uid: "FirstName"},
  {name: "Last Name", uid: "LastName"},
  {name: "Email", uid: "Email"},
  {name: "Role", uid: "Role"},
  {name: "Actions", uid: "actions"},
];


const FirstName = [
  "John",
  "Jane",
  "Jim",
  "Jill",
  "Jack",
];

const LastName = [ 
  "Doe",
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
];

const Email = [
  "john@the-office.ai",
  "jane@the-office.ai",
  "jim@the-office.ai",
  "jill@the-office.ai",
  "jack@the-office.ai",
];

const Role = [
  "Admin",
  "Editor",
  "Viewer",
];

const generateMockUserData = (count: number): Users[] => {
  const mockData: Users[] = [];

  for (let i = 0; i < count; i++) {
    const selectedFirstName = FirstName[Math.floor(Math.random() * FirstName.length)]; 
    const selectedLastName = LastName[Math.floor(Math.random() * LastName.length)];  
    const selectedEmail = Email[Math.floor(Math.random() * Email.length)];
    const selectedRole = Role[Math.floor(Math.random() * Role.length)];

    const user: Users = {
      id: i,
      FirstName: selectedFirstName,
      LastName: selectedLastName,
      Email: selectedEmail,
      Role: selectedRole,
    };

    mockData.push(user);
  }

  return mockData;
};
// "

export const users: Users[] = generateMockUserData(5);
