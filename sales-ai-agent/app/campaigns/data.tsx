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

export const companyHeadcounts = [
  {
    value: "Self-employed",
    label: "Self-employed",
  },
  {
    value: "1-10",
    label: "1-10",
  },
  {
    value: "11-50",
    label: "11-50",
  },
  {
    value: "51-200",
    label: "51-200",
  },
  {
    value: "201-500",
    label: "201-500",
  },
  {
    value: "501-1,000",
    label: "501-1,000",
  },
];

export const functions = [
  {
    value: "Administrative",
    label: "Administrative",
  },
  {
    value: "Arts and Design",
    label: "Arts and Design",
  },
  {
    value: "Business Development",
    label: "Business Development",
  },
  {
    value: "Community and Social Services",
    label: "Community and Social Services",
  },
  {
    value: "Consulting",
    label: "Consulting",
  },
  {
    value: "Education",
    label: "Education",
  },
  {
    value: "Engineering",
    label: "Engineering",
  },
  {
    value: "Entrepreneurship",
    label: "Entrepreneurship",
  },
  {
    value: "Finance",
    label: "Finance",
  },
  {
    value: "Healthcare Services",
    label: "Healthcare Services",
  },
  {
    value: "Human Resources",
    label: "Human Resources",
  },
  {
    value: "Information Technology",
    label: "Information Technology",
  },
  {
    value: "Legal",
    label: "Legal",
  },
  {
    value: "Marketing",
    label: "Marketing",
  },
  {
    value: "Media and Communication",
    label: "Media and Communication",
  },
  {
    value: "Military and Protective Services",
    label: "Military and Protective Services",
  },
  {
    value: "Operations",
    label: "Operations",
  },
  {
    value: "Product Management",
    label: "Product Management",
  },
  {
    value: "Program and Project Management",
    label: "Program and Project Management",
  },
  {
    value: "Purchasing",
    label: "Purchasing",
  },
  {
    value: "Quality Assurance",
    label: "Quality Assurance",
  },
  {
    value: "Real Estate",
    label: "Real Estate",
  },
  {
    value: "Research",
    label: "Research",
  },
  {
    value: "Sales",
    label: "Sales",
  },
  {
    value: "Customer Success and Support",
    label: "Customer Success and Support",
  },
];

export const industries = [
  {
    value: "Defense and Space Manufacturing",
    label: "Defense and Space Manufacturing",
  },
  { value: "Optometrists", label: "Optometrists" },
  {
    value: "Computer Hardware Manufacturing",
    label: "Computer Hardware Manufacturing",
  },
  { value: "Software Development", label: "Software Development" },
  {
    value: "Computer Networking Products",
    label: "Computer Networking Products",
  },
  {
    value: "Transportation Equipment Manufacturing",
    label: "Transportation Equipment Manufacturing",
  },
  {
    value: "Technology, Information and Internet",
    label: "Technology, Information and Internet",
  },
  {
    value: "Physical, Occupational and Speech Therapists",
    label: "Physical, Occupational and Speech Therapists",
  },
  {
    value: "Semiconductor Manufacturing",
    label: "Semiconductor Manufacturing",
  },
  { value: "Telecommunications", label: "Telecommunications" },
  { value: "Law Practice", label: "Law Practice" },
  { value: "Housing Programs", label: "Housing Programs" },
  { value: "Legal Services", label: "Legal Services" },
  {
    value: "Business Consulting and Services",
    label: "Business Consulting and Services",
  },
  { value: "Biotechnology Research", label: "Biotechnology Research" },
  { value: "Family Planning Centers", label: "Family Planning Centers" },
  { value: "Medical Practices", label: "Medical Practices" },
  { value: "Transportation Programs", label: "Transportation Programs" },
  { value: "Hospitals and Health Care", label: "Hospitals and Health Care" },
  { value: "Utilities Administration", label: "Utilities Administration" },
  {
    value: "Pharmaceutical Manufacturing",
    label: "Pharmaceutical Manufacturing",
  },
  { value: "Outpatient Care Centers", label: "Outpatient Care Centers" },
  { value: "Veterinary Services", label: "Veterinary Services" },
  {
    value: "Medical Equipment Manufacturing",
    label: "Medical Equipment Manufacturing",
  },
  {
    value: "Space Research and Technology",
    label: "Space Research and Technology",
  },
  {
    value: "Motor Vehicle Parts Manufacturing",
    label: "Motor Vehicle Parts Manufacturing",
  },
  {
    value: "Personal Care Product Manufacturing",
    label: "Personal Care Product Manufacturing",
  },
  { value: "Retail Apparel and Fashion", label: "Retail Apparel and Fashion" },
  {
    value: "Sporting Goods Manufacturing",
    label: "Sporting Goods Manufacturing",
  },
  { value: "Tobacco Manufacturing", label: "Tobacco Manufacturing" },
  {
    value: "Medical and Diagnostic Laboratories",
    label: "Medical and Diagnostic Laboratories",
  },
  { value: "Retail Groceries", label: "Retail Groceries" },
  {
    value: "Food and Beverage Manufacturing",
    label: "Food and Beverage Manufacturing",
  },
  { value: "Oil Extraction", label: "Oil Extraction" },
  {
    value: "Computers and Electronics Manufacturing",
    label: "Computers and Electronics Manufacturing",
  },
  { value: "Natural Gas Extraction", label: "Natural Gas Extraction" },
  { value: "Manufacturing", label: "Manufacturing" },
  {
    value: "Furniture and Home Furnishings Manufacturing",
    label: "Furniture and Home Furnishings Manufacturing",
  },
  { value: "Home Health Care Services", label: "Home Health Care Services" },
  { value: "Retail", label: "Retail" },
  { value: "Embedded Software Products", label: "Embedded Software Products" },
  { value: "Entertainment Providers", label: "Entertainment Providers" },
  {
    value: "Mobile Computing Software Products",
    label: "Mobile Computing Software Products",
  },
  {
    value: "Gambling Facilities and Casinos",
    label: "Gambling Facilities and Casinos",
  },
  { value: "Ambulance Services", label: "Ambulance Services" },
  {
    value: "Desktop Computing Software Products",
    label: "Desktop Computing Software Products",
  },
  {
    value: "IT System Custom Software Development",
    label: "IT System Custom Software Development",
  },
  { value: "Travel Arrangements", label: "Travel Arrangements" },
  {
    value: "IT System Operations and Maintenance",
    label: "IT System Operations and Maintenance",
  },
  { value: "Hospitality", label: "Hospitality" },
  {
    value: "IT System Installation and Disposal",
    label: "IT System Installation and Disposal",
  },
  { value: "Restaurants", label: "Restaurants" },
  {
    value: "IT System Training and Support",
    label: "IT System Training and Support",
  },
  { value: "Hospitals", label: "Hospitals" },
  { value: "Spectator Sports", label: "Spectator Sports" },
  { value: "IT System Data Services", label: "IT System Data Services" },
  { value: "Food and Beverage Services", label: "Food and Beverage Services" },
  {
    value: "IT System Testing and Evaluation",
    label: "IT System Testing and Evaluation",
  },
  { value: "Movies, Videos, and Sound", label: "Movies, Videos, and Sound" },
  {
    value: "Broadcast Media Production and Distribution",
    label: "Broadcast Media Production and Distribution",
  },
  {
    value: "Museums, Historical Sites, and Zoos",
    label: "Museums, Historical Sites, and Zoos",
  },
  { value: "Artists and Writers", label: "Artists and Writers" },
  { value: "Performing Arts", label: "Performing Arts" },
  { value: "Recreational Facilities", label: "Recreational Facilities" },
  { value: "Banking", label: "Banking" },
  { value: "Insurance", label: "Insurance" },
  {
    value: "Nursing Homes and Residential Care Facilities",
    label: "Nursing Homes and Residential Care Facilities",
  },
  { value: "Financial Services", label: "Financial Services" },
  { value: "Real Estate", label: "Real Estate" },
  { value: "Investment Banking", label: "Investment Banking" },
  { value: "Investment Management", label: "Investment Management" },
  { value: "Accounting", label: "Accounting" },
  { value: "Construction", label: "Construction" },
  {
    value: "Wholesale Building Materials",
    label: "Wholesale Building Materials",
  },
  { value: "Architecture and Planning", label: "Architecture and Planning" },
  { value: "Civil Engineering", label: "Civil Engineering" },
  { value: "Internet News", label: "Internet News" },
  {
    value: "Aviation and Aerospace Component Manufacturing",
    label: "Aviation and Aerospace Component Manufacturing",
  },
  { value: "Blogs", label: "Blogs" },
  {
    value: "Motor Vehicle Manufacturing",
    label: "Motor Vehicle Manufacturing",
  },
  { value: "Interior Design", label: "Interior Design" },
  { value: "Chemical Manufacturing", label: "Chemical Manufacturing" },
  {
    value: "Social Networking Platforms",
    label: "Social Networking Platforms",
  },
  { value: "Machinery Manufacturing", label: "Machinery Manufacturing" },
  {
    value: "Household and Institutional Furniture Manufacturing",
    label: "Household and Institutional Furniture Manufacturing",
  },
  {
    value: "Business Intelligence Platforms",
    label: "Business Intelligence Platforms",
  },
  { value: "Mining", label: "Mining" },
  { value: "Business Content", label: "Business Content" },
  { value: "Oil and Gas", label: "Oil and Gas" },
  {
    value: "Data Security Software Products",
    label: "Data Security Software Products",
  },
  { value: "Shipbuilding", label: "Shipbuilding" },
  { value: "Utilities", label: "Utilities" },
  { value: "Mobile Gaming Apps", label: "Mobile Gaming Apps" },
  { value: "Textile Manufacturing", label: "Textile Manufacturing" },
  { value: "Internet Publishing", label: "Internet Publishing" },
  {
    value: "Paper and Forest Product Manufacturing",
    label: "Paper and Forest Product Manufacturing",
  },
  {
    value: "Media and Telecommunications",
    label: "Media and Telecommunications",
  },
  {
    value: "Railroad Equipment Manufacturing",
    label: "Railroad Equipment Manufacturing",
  },
  { value: "Blockchain Services", label: "Blockchain Services" },
  { value: "Farming", label: "Farming" },
  {
    value: "Services for the Elderly and Disabled",
    label: "Services for the Elderly and Disabled",
  },
  { value: "Ranching", label: "Ranching" },
  {
    value: "Dairy Product Manufacturing",
    label: "Dairy Product Manufacturing",
  },
  {
    value: "Office Furniture and Fixtures Manufacturing",
    label: "Office Furniture and Fixtures Manufacturing",
  },
  { value: "Fisheries", label: "Fisheries" },
  { value: "Community Services", label: "Community Services" },
  {
    value: "Primary and Secondary Education",
    label: "Primary and Secondary Education",
  },
  { value: "Higher Education", label: "Higher Education" },
  {
    value: "Education Administration Programs",
    label: "Education Administration Programs",
  },
  { value: "Research Services", label: "Research Services" },
  {
    value: "Mattress and Blinds Manufacturing",
    label: "Mattress and Blinds Manufacturing",
  },
  { value: "Armed Forces", label: "Armed Forces" },
  { value: "Legislative Offices", label: "Legislative Offices" },
  { value: "Administration of Justice", label: "Administration of Justice" },
  { value: "International Affairs", label: "International Affairs" },
  {
    value: "Emergency and Relief Services",
    label: "Emergency and Relief Services",
  },
  { value: "Government Administration", label: "Government Administration" },
  { value: "Executive Offices", label: "Executive Offices" },
  { value: "Law Enforcement", label: "Law Enforcement" },
  {
    value: "Vocational Rehabilitation Services",
    label: "Vocational Rehabilitation Services",
  },
  { value: "Public Safety", label: "Public Safety" },
  { value: "Public Policy Offices", label: "Public Policy Offices" },
  { value: "Advertising Services", label: "Advertising Services" },
  { value: "Child Day Care Services", label: "Child Day Care Services" },
  { value: "Newspaper Publishing", label: "Newspaper Publishing" },
  {
    value: "Performing Arts and Spectator Sports",
    label: "Performing Arts and Spectator Sports",
  },
  {
    value: "Book and Periodical Publishing",
    label: "Book and Periodical Publishing",
  },
  { value: "Printing Services", label: "Printing Services" },
  { value: "Information Services", label: "Information Services" },
  { value: "Libraries", label: "Libraries" },
  { value: "Theater Companies", label: "Theater Companies" },
  { value: "Environmental Services", label: "Environmental Services" },
  {
    value: "Freight and Package Transportation",
    label: "Freight and Package Transportation",
  },
  { value: "Dance Companies", label: "Dance Companies" },
  {
    value: "Individual and Family Services",
    label: "Individual and Family Services",
  },
  { value: "Religious Institutions", label: "Religious Institutions" },
  {
    value: "Civic and Social Organizations",
    label: "Civic and Social Organizations",
  },
  { value: "Consumer Services", label: "Consumer Services" },
  { value: "Circuses and Magic Shows", label: "Circuses and Magic Shows" },
  { value: "Truck Transportation", label: "Truck Transportation" },
  { value: "Warehousing and Storage", label: "Warehousing and Storage" },
  { value: "Sports Teams and Clubs", label: "Sports Teams and Clubs" },
  { value: "Airlines and Aviation", label: "Airlines and Aviation" },
  { value: "Maritime Transportation", label: "Maritime Transportation" },
  { value: "Racetracks", label: "Racetracks" },
  {
    value: "IT Services and IT Consulting",
    label: "IT Services and IT Consulting",
  },
  { value: "Market Research", label: "Market Research" },
  {
    value: "Public Relations and Communications Services",
    label: "Public Relations and Communications Services",
  },
  { value: "Design Services", label: "Design Services" },
  { value: "Non-profit Organizations", label: "Non-profit Organizations" },
  { value: "Fundraising", label: "Fundraising" },
  {
    value: "Strategic Management Services",
    label: "Strategic Management Services",
  },
  { value: "Writing and Editing", label: "Writing and Editing" },
  { value: "Staffing and Recruiting", label: "Staffing and Recruiting" },
  {
    value: "Wholesale Motor Vehicles and Parts",
    label: "Wholesale Motor Vehicles and Parts",
  },
  {
    value: "Professional Training and Coaching",
    label: "Professional Training and Coaching",
  },
  {
    value: "Venture Capital and Private Equity Principals",
    label: "Venture Capital and Private Equity Principals",
  },
  { value: "Political Organizations", label: "Political Organizations" },
  {
    value: "Translation and Localization",
    label: "Translation and Localization",
  },
  { value: "Computer Games", label: "Computer Games" },
  { value: "Events Services", label: "Events Services" },
  { value: "Retail Art Supplies", label: "Retail Art Supplies" },
  { value: "Museums", label: "Museums" },
  {
    value: "Appliances, Electrical, and Electronics Manufacturing",
    label: "Appliances, Electrical, and Electronics Manufacturing",
  },
  {
    value: "Online Audio and Video Media",
    label: "Online Audio and Video Media",
  },
  {
    value: "Wholesale Furniture and Home Furnishings",
    label: "Wholesale Furniture and Home Furnishings",
  },
  { value: "Historical Sites", label: "Historical Sites" },
  { value: "Nanotechnology Research", label: "Nanotechnology Research" },
  { value: "Retail Art Dealers", label: "Retail Art Dealers" },
  { value: "Musicians", label: "Musicians" },
  { value: "Zoos and Botanical Gardens", label: "Zoos and Botanical Gardens" },
  {
    value: "Transportation, Logistics, Supply Chain and Storage",
    label: "Transportation, Logistics, Supply Chain and Storage",
  },
  { value: "Plastics Manufacturing", label: "Plastics Manufacturing" },
  {
    value: "Computer and Network Security",
    label: "Computer and Network Security",
  },
  { value: "Wireless Services", label: "Wireless Services" },
  {
    value: "Amusement Parks and Arcades",
    label: "Amusement Parks and Arcades",
  },
  {
    value: "Alternative Dispute Resolution",
    label: "Alternative Dispute Resolution",
  },
  {
    value: "Security and Investigations",
    label: "Security and Investigations",
  },
  { value: "Facilities Services", label: "Facilities Services" },
  {
    value: "Outsourcing and Offshoring Consulting",
    label: "Outsourcing and Offshoring Consulting",
  },
  {
    value: "Wellness and Fitness Services",
    label: "Wellness and Fitness Services",
  },
  { value: "Alternative Medicine", label: "Alternative Medicine" },
  { value: "Media Production", label: "Media Production" },
  {
    value: "Animation and Post-production",
    label: "Animation and Post-production",
  },
  {
    value: "Leasing Non-residential Real Estate",
    label: "Leasing Non-residential Real Estate",
  },
  { value: "Capital Markets", label: "Capital Markets" },
  {
    value: "Wholesale Photography Equipment and Supplies",
    label: "Wholesale Photography Equipment and Supplies",
  },
  { value: "Think Tanks", label: "Think Tanks" },
  {
    value: "Philanthropic Fundraising Services",
    label: "Philanthropic Fundraising Services",
  },
  {
    value: "Golf Courses and Country Clubs",
    label: "Golf Courses and Country Clubs",
  },
  { value: "E-Learning Providers", label: "E-Learning Providers" },
  { value: "Wholesale", label: "Wholesale" },
  {
    value: "Wholesale Computer Equipment",
    label: "Wholesale Computer Equipment",
  },
  { value: "Skiing Facilities", label: "Skiing Facilities" },
  {
    value: "Wholesale Import and Export",
    label: "Wholesale Import and Export",
  },
  {
    value: "Industrial Machinery Manufacturing",
    label: "Industrial Machinery Manufacturing",
  },
  { value: "Photography", label: "Photography" },
  { value: "Human Resources Services", label: "Human Resources Services" },
  { value: "Retail Office Equipment", label: "Retail Office Equipment" },
  { value: "Mental Health Care", label: "Mental Health Care" },
  { value: "Graphic Design", label: "Graphic Design" },
  {
    value: "International Trade and Development",
    label: "International Trade and Development",
  },
  { value: "Beverage Manufacturing", label: "Beverage Manufacturing" },
  {
    value: "Accommodation and Food Services",
    label: "Accommodation and Food Services",
  },
  {
    value: "Wholesale Metals and Minerals",
    label: "Wholesale Metals and Minerals",
  },
  {
    value: "Retail Luxury Goods and Jewelry",
    label: "Retail Luxury Goods and Jewelry",
  },
  {
    value: "Glass, Ceramics and Concrete Manufacturing",
    label: "Glass, Ceramics and Concrete Manufacturing",
  },
  {
    value: "Packaging and Containers Manufacturing",
    label: "Packaging and Containers Manufacturing",
  },
  { value: "Hotels and Motels", label: "Hotels and Motels" },
  {
    value: "Automation Machinery Manufacturing",
    label: "Automation Machinery Manufacturing",
  },
  {
    value: "Wholesale Appliances, Electrical, and Electronics",
    label: "Wholesale Appliances, Electrical, and Electronics",
  },
  {
    value: "Government Relations Services",
    label: "Government Relations Services",
  },
  {
    value: "Bed-and-Breakfasts, Hostels, Homestays",
    label: "Bed-and-Breakfasts, Hostels, Homestays",
  },
  { value: "Horticulture", label: "Horticulture" },
  {
    value: "Wholesale Hardware, Plumbing, Heating Equipment",
    label: "Wholesale Hardware, Plumbing, Heating Equipment",
  },
  { value: "Wholesale Machinery", label: "Wholesale Machinery" },
  { value: "Caterers", label: "Caterers" },
  { value: "Mobile Food Services", label: "Mobile Food Services" },
  {
    value: "Renewable Energy Power Generation",
    label: "Renewable Energy Power Generation",
  },
  {
    value: "Bars, Taverns, and Nightclubs",
    label: "Bars, Taverns, and Nightclubs",
  },
  {
    value: "Renewable Energy Equipment Manufacturing",
    label: "Renewable Energy Equipment Manufacturing",
  },
  { value: "Engineering Services", label: "Engineering Services" },
  {
    value: "Services for Renewable Energy",
    label: "Services for Renewable Energy",
  },
  {
    value: "Digital Accessibility Services",
    label: "Digital Accessibility Services",
  },
  {
    value: "Accessible Hardware Manufacturing",
    label: "Accessible Hardware Manufacturing",
  },
  {
    value: "Accessible Architecture and Design",
    label: "Accessible Architecture and Design",
  },
  { value: "Robot Manufacturing", label: "Robot Manufacturing" },
  { value: "Robotics Engineering", label: "Robotics Engineering" },
  { value: "Repair and Maintenance", label: "Repair and Maintenance" },
  {
    value: "Surveying and Mapping Services",
    label: "Surveying and Mapping Services",
  },
  {
    value: "Vehicle Repair and Maintenance",
    label: "Vehicle Repair and Maintenance",
  },
  { value: "Retail Pharmacies", label: "Retail Pharmacies" },
  {
    value: "Climate Technology Product Manufacturing",
    label: "Climate Technology Product Manufacturing",
  },
  { value: "Climate Data and Analytics", label: "Climate Data and Analytics" },
  {
    value: "Alternative Fuel Vehicle Manufacturing",
    label: "Alternative Fuel Vehicle Manufacturing",
  },
  {
    value: "Wholesale Recyclable Materials",
    label: "Wholesale Recyclable Materials",
  },
  { value: "Smart Meter Manufacturing", label: "Smart Meter Manufacturing" },
  { value: "Fuel Cell Manufacturing", label: "Fuel Cell Manufacturing" },
  {
    value: "Wholesale Luxury Goods and Jewelry",
    label: "Wholesale Luxury Goods and Jewelry",
  },
  { value: "Regenerative Design", label: "Regenerative Design" },
  { value: "Wholesale Paper Products", label: "Wholesale Paper Products" },
  {
    value: "Electronic and Precision Equipment Maintenance",
    label: "Electronic and Precision Equipment Maintenance",
  },
  {
    value: "Wholesale Drugs and Sundries",
    label: "Wholesale Drugs and Sundries",
  },
  {
    value: "Wholesale Apparel and Sewing Supplies",
    label: "Wholesale Apparel and Sewing Supplies",
  },
  {
    value: "Commercial and Industrial Machinery Maintenance",
    label: "Commercial and Industrial Machinery Maintenance",
  },
  {
    value: "Farming, Ranching, Forestry",
    label: "Farming, Ranching, Forestry",
  },
  {
    value: "Reupholstery and Furniture Repair",
    label: "Reupholstery and Furniture Repair",
  },
  { value: "Wholesale Footwear", label: "Wholesale Footwear" },
  {
    value: "Wholesale Food and Beverage",
    label: "Wholesale Food and Beverage",
  },
  {
    value: "Footwear and Leather Goods Repair",
    label: "Footwear and Leather Goods Repair",
  },
  {
    value: "Personal and Laundry Services",
    label: "Personal and Laundry Services",
  },
  { value: "Personal Care Services", label: "Personal Care Services" },
  {
    value: "Laundry and Drycleaning Services",
    label: "Laundry and Drycleaning Services",
  },
  {
    value: "Wholesale Raw Farm Products",
    label: "Wholesale Raw Farm Products",
  },
  {
    value: "Wholesale Chemical and Allied Products",
    label: "Wholesale Chemical and Allied Products",
  },
  { value: "Pet Services", label: "Pet Services" },
  {
    value: "Wholesale Petroleum and Petroleum Products",
    label: "Wholesale Petroleum and Petroleum Products",
  },
  {
    value: "Wholesale Alcoholic Beverages",
    label: "Wholesale Alcoholic Beverages",
  },
  { value: "Ranching and Fisheries", label: "Ranching and Fisheries" },
  {
    value: "Internet Marketplace Platforms",
    label: "Internet Marketplace Platforms",
  },
  { value: "Retail Motor Vehicles", label: "Retail Motor Vehicles" },
  { value: "Household Services", label: "Household Services" },
  {
    value: "Retail Furniture and Home Furnishings",
    label: "Retail Furniture and Home Furnishings",
  },
  {
    value: "Retail Appliances, Electrical, and Electronic Equipment",
    label: "Retail Appliances, Electrical, and Electronic Equipment",
  },
  { value: "Forestry and Logging", label: "Forestry and Logging" },
  {
    value: "Retail Building Materials and Garden Equipment",
    label: "Retail Building Materials and Garden Equipment",
  },
  { value: "Health and Human Services", label: "Health and Human Services" },
  { value: "Public Health", label: "Public Health" },
  { value: "Public Assistance Programs", label: "Public Assistance Programs" },
  { value: "Food and Beverage Retail", label: "Food and Beverage Retail" },
  {
    value: "Air, Water, and Waste Program Management",
    label: "Air, Water, and Waste Program Management",
  },
  { value: "Conservation Programs", label: "Conservation Programs" },
  {
    value: "Housing and Community Development",
    label: "Housing and Community Development",
  },
  {
    value: "Community Development and Urban Planning",
    label: "Community Development and Urban Planning",
  },
  { value: "Economic Programs", label: "Economic Programs" },
  { value: "Oil, Gas, and Mining", label: "Oil, Gas, and Mining" },
  {
    value: "Retail Health and Personal Care Products",
    label: "Retail Health and Personal Care Products",
  },
  { value: "Coal Mining", label: "Coal Mining" },
  {
    value: "Military and International Affairs",
    label: "Military and International Affairs",
  },
  { value: "Metal Ore Mining", label: "Metal Ore Mining" },
  { value: "Retail Gasoline", label: "Retail Gasoline" },
  { value: "Operations Consulting", label: "Operations Consulting" },
  { value: "Nonmetallic Mineral Mining", label: "Nonmetallic Mineral Mining" },
  {
    value: "Electric Power Transmission, Control, and Distribution",
    label: "Electric Power Transmission, Control, and Distribution",
  },
  { value: "Retail Musical Instruments", label: "Retail Musical Instruments" },
  { value: "Electric Power Generation", label: "Electric Power Generation" },
  {
    value: "Hydroelectric Power Generation",
    label: "Hydroelectric Power Generation",
  },
  {
    value: "Retail Books and Printed News",
    label: "Retail Books and Printed News",
  },
  {
    value: "Fossil Fuel Electric Power Generation",
    label: "Fossil Fuel Electric Power Generation",
  },
  {
    value: "Nuclear Electric Power Generation",
    label: "Nuclear Electric Power Generation",
  },
  {
    value: "Solar Electric Power Generation",
    label: "Solar Electric Power Generation",
  },
  {
    value: "Environmental Quality Programs",
    label: "Environmental Quality Programs",
  },
  {
    value: "Geothermal Electric Power Generation",
    label: "Geothermal Electric Power Generation",
  },
  {
    value: "Biomass Electric Power Generation",
    label: "Biomass Electric Power Generation",
  },
  { value: "Natural Gas Distribution", label: "Natural Gas Distribution" },
  {
    value: "Water, Waste, Steam, and Air Conditioning Services",
    label: "Water, Waste, Steam, and Air Conditioning Services",
  },
  { value: "Retail Florists", label: "Retail Florists" },
  {
    value: "Retail Office Supplies and Gifts",
    label: "Retail Office Supplies and Gifts",
  },
  {
    value: "Water Supply and Irrigation Systems",
    label: "Water Supply and Irrigation Systems",
  },
  {
    value: "Steam and Air-Conditioning Supply",
    label: "Steam and Air-Conditioning Supply",
  },
  { value: "Building Construction", label: "Building Construction" },
  {
    value: "Retail Recyclable Materials & Used Merchandise",
    label: "Retail Recyclable Materials & Used Merchandise",
  },
  {
    value: "Residential Building Construction",
    label: "Residential Building Construction",
  },
  {
    value: "Data Infrastructure and Analytics",
    label: "Data Infrastructure and Analytics",
  },
  {
    value: "Nonresidential Building Construction",
    label: "Nonresidential Building Construction",
  },
  {
    value: "Utility System Construction",
    label: "Utility System Construction",
  },
  {
    value: "Electrical Equipment Manufacturing",
    label: "Electrical Equipment Manufacturing",
  },
  {
    value: "Online and Mail Order Retail",
    label: "Online and Mail Order Retail",
  },
  { value: "Subdivision of Land", label: "Subdivision of Land" },
  {
    value: "Highway, Street, and Bridge Construction",
    label: "Highway, Street, and Bridge Construction",
  },
  {
    value: "Specialty Trade Contractors",
    label: "Specialty Trade Contractors",
  },
  {
    value: "Building Structure and Exterior Contractors",
    label: "Building Structure and Exterior Contractors",
  },
  {
    value: "Wind Electric Power Generation",
    label: "Wind Electric Power Generation",
  },
  { value: "Wineries", label: "Wineries" },
  {
    value: "Building Equipment Contractors",
    label: "Building Equipment Contractors",
  },
  { value: "Rail Transportation", label: "Rail Transportation" },
  {
    value: "Building Finishing Contractors",
    label: "Building Finishing Contractors",
  },
  {
    value: "Ground Passenger Transportation",
    label: "Ground Passenger Transportation",
  },
  { value: "Urban Transit Services", label: "Urban Transit Services" },
  {
    value: "Interurban and Rural Bus Services",
    label: "Interurban and Rural Bus Services",
  },
  {
    value: "Taxi and Limousine Services",
    label: "Taxi and Limousine Services",
  },
  { value: "Animal Feed Manufacturing", label: "Animal Feed Manufacturing" },
  {
    value: "School and Employee Bus Services",
    label: "School and Employee Bus Services",
  },
  {
    value: "Shuttles and Special Needs Transportation Services",
    label: "Shuttles and Special Needs Transportation Services",
  },
  {
    value: "Sugar and Confectionery Product Manufacturing",
    label: "Sugar and Confectionery Product Manufacturing",
  },
  { value: "Pipeline Transportation", label: "Pipeline Transportation" },
  {
    value: "Fruit and Vegetable Preserves Manufacturing",
    label: "Fruit and Vegetable Preserves Manufacturing",
  },
  { value: "Sightseeing Transportation", label: "Sightseeing Transportation" },
  {
    value: "Meat Products Manufacturing",
    label: "Meat Products Manufacturing",
  },
  {
    value: "Seafood Product Manufacturing",
    label: "Seafood Product Manufacturing",
  },
  { value: "Baked Goods Manufacturing", label: "Baked Goods Manufacturing" },
  { value: "Postal Services", label: "Postal Services" },
  { value: "Breweries", label: "Breweries" },
  { value: "Distilleries", label: "Distilleries" },
  {
    value: "Technology, Information and Media",
    label: "Technology, Information and Media",
  },
  { value: "Periodical Publishing", label: "Periodical Publishing" },
  { value: "Book Publishing", label: "Book Publishing" },
  { value: "Movies and Sound Recording", label: "Movies and Sound Recording" },
  { value: "Apparel Manufacturing", label: "Apparel Manufacturing" },
  { value: "Sound Recording", label: "Sound Recording" },
  { value: "Sheet Music Publishing", label: "Sheet Music Publishing" },
  {
    value: "Radio and Television Broadcasting",
    label: "Radio and Television Broadcasting",
  },
  {
    value: "Fashion Accessories Manufacturing",
    label: "Fashion Accessories Manufacturing",
  },
  {
    value: "Leather Product Manufacturing",
    label: "Leather Product Manufacturing",
  },
  {
    value: "Cable and Satellite Programming",
    label: "Cable and Satellite Programming",
  },
  {
    value: "Telecommunications Carriers",
    label: "Telecommunications Carriers",
  },
  { value: "Footwear Manufacturing", label: "Footwear Manufacturing" },
  {
    value: "Satellite Telecommunications",
    label: "Satellite Telecommunications",
  },
  {
    value: "Women's Handbag Manufacturing",
    label: "Women's Handbag Manufacturing",
  },
  { value: "Credit Intermediation", label: "Credit Intermediation" },
  { value: "Savings Institutions", label: "Savings Institutions" },
  { value: "Loan Brokers", label: "Loan Brokers" },
  {
    value: "Oil and Coal Product Manufacturing",
    label: "Oil and Coal Product Manufacturing",
  },
  {
    value: "Securities and Commodity Exchanges",
    label: "Securities and Commodity Exchanges",
  },
  {
    value: "Chemical Raw Materials Manufacturing",
    label: "Chemical Raw Materials Manufacturing",
  },
  { value: "Investment Advice", label: "Investment Advice" },
  { value: "Insurance Carriers", label: "Insurance Carriers" },
  {
    value: "Artificial Rubber and Synthetic Fiber Manufacturing",
    label: "Artificial Rubber and Synthetic Fiber Manufacturing",
  },
  {
    value: "Agricultural Chemical Manufacturing",
    label: "Agricultural Chemical Manufacturing",
  },
  {
    value: "Insurance Agencies and Brokerages",
    label: "Insurance Agencies and Brokerages",
  },
  {
    value: "Claims Adjusting, Actuarial Services",
    label: "Claims Adjusting, Actuarial Services",
  },
  { value: "Funds and Trusts", label: "Funds and Trusts" },
  {
    value: "Insurance and Employee Benefit Funds",
    label: "Insurance and Employee Benefit Funds",
  },
  { value: "Pension Funds", label: "Pension Funds" },
  {
    value: "Paint, Coating, and Adhesive Manufacturing",
    label: "Paint, Coating, and Adhesive Manufacturing",
  },
  { value: "Trusts and Estates", label: "Trusts and Estates" },
  {
    value: "Soap and Cleaning Product Manufacturing",
    label: "Soap and Cleaning Product Manufacturing",
  },
  {
    value: "Real Estate and Equipment Rental Services",
    label: "Real Estate and Equipment Rental Services",
  },
  {
    value: "Leasing Residential Real Estate",
    label: "Leasing Residential Real Estate",
  },
  {
    value: "Plastics and Rubber Product Manufacturing",
    label: "Plastics and Rubber Product Manufacturing",
  },
  {
    value: "Real Estate Agents and Brokers",
    label: "Real Estate Agents and Brokers",
  },
  { value: "Equipment Rental Services", label: "Equipment Rental Services" },
  { value: "Consumer Goods Rental", label: "Consumer Goods Rental" },
  {
    value: "Rubber Products Manufacturing",
    label: "Rubber Products Manufacturing",
  },
  {
    value: "Clay and Refractory Products Manufacturing",
    label: "Clay and Refractory Products Manufacturing",
  },
  {
    value: "Commercial and Industrial Equipment Rental",
    label: "Commercial and Industrial Equipment Rental",
  },
  {
    value: "Glass Product Manufacturing",
    label: "Glass Product Manufacturing",
  },
  { value: "Wood Product Manufacturing", label: "Wood Product Manufacturing" },
  { value: "Professional Services", label: "Professional Services" },
  {
    value: "Lime and Gypsum Products Manufacturing",
    label: "Lime and Gypsum Products Manufacturing",
  },
  {
    value: "Abrasives and Nonmetallic Minerals Manufacturing",
    label: "Abrasives and Nonmetallic Minerals Manufacturing",
  },
  {
    value: "Primary Metal Manufacturing",
    label: "Primary Metal Manufacturing",
  },
  { value: "IT System Design Services", label: "IT System Design Services" },
  { value: "Marketing Services", label: "Marketing Services" },
  { value: "Fabricated Metal Products", label: "Fabricated Metal Products" },
  {
    value: "Cutlery and Handtool Manufacturing",
    label: "Cutlery and Handtool Manufacturing",
  },
  {
    value: "Architectural and Structural Metal Manufacturing",
    label: "Architectural and Structural Metal Manufacturing",
  },
  {
    value: "Boilers, Tanks, and Shipping Container Manufacturing",
    label: "Boilers, Tanks, and Shipping Container Manufacturing",
  },
  {
    value: "Construction Hardware Manufacturing",
    label: "Construction Hardware Manufacturing",
  },
  {
    value: "Spring and Wire Product Manufacturing",
    label: "Spring and Wire Product Manufacturing",
  },
  {
    value: "Turned Products and Fastener Manufacturing",
    label: "Turned Products and Fastener Manufacturing",
  },
  { value: "Holding Companies", label: "Holding Companies" },
  { value: "Metal Treatments", label: "Metal Treatments" },
  { value: "Industry Associations", label: "Industry Associations" },
  { value: "Landscaping Services", label: "Landscaping Services" },
  { value: "Professional Organizations", label: "Professional Organizations" },
  {
    value: "Metal Valve, Ball, and Roller Manufacturing",
    label: "Metal Valve, Ball, and Roller Manufacturing",
  },
  {
    value: "Administrative and Support Services",
    label: "Administrative and Support Services",
  },
  { value: "Office Administration", label: "Office Administration" },
  { value: "Executive Search Services", label: "Executive Search Services" },
  { value: "Temporary Help Services", label: "Temporary Help Services" },
  {
    value: "Agriculture, Construction, Mining Machinery Manufacturing",
    label: "Agriculture, Construction, Mining Machinery Manufacturing",
  },
  { value: "Telephone Call Centers", label: "Telephone Call Centers" },
  { value: "Collection Agencies", label: "Collection Agencies" },
  {
    value: "Commercial and Service Industry Machinery Manufacturing",
    label: "Commercial and Service Industry Machinery Manufacturing",
  },
  {
    value: "HVAC and Refrigeration Equipment Manufacturing",
    label: "HVAC and Refrigeration Equipment Manufacturing",
  },
  {
    value: "Metalworking Machinery Manufacturing",
    label: "Metalworking Machinery Manufacturing",
  },
  {
    value: "Security Guards and Patrol Services",
    label: "Security Guards and Patrol Services",
  },
  { value: "Security Systems Services", label: "Security Systems Services" },
  {
    value: "Engines and Power Transmission Equipment Manufacturing",
    label: "Engines and Power Transmission Equipment Manufacturing",
  },
  { value: "Janitorial Services", label: "Janitorial Services" },
  { value: "Waste Collection", label: "Waste Collection" },
  {
    value: "Waste Treatment and Disposal",
    label: "Waste Treatment and Disposal",
  },
  {
    value: "Communications Equipment Manufacturing",
    label: "Communications Equipment Manufacturing",
  },
  {
    value: "Audio and Video Equipment Manufacturing",
    label: "Audio and Video Equipment Manufacturing",
  },
  { value: "Education", label: "Education" },
  {
    value: "Measuring and Control Instrument Manufacturing",
    label: "Measuring and Control Instrument Manufacturing",
  },
  { value: "Secretarial Schools", label: "Secretarial Schools" },
  {
    value: "Technical and Vocational Training",
    label: "Technical and Vocational Training",
  },
  {
    value: "Magnetic and Optical Media Manufacturing",
    label: "Magnetic and Optical Media Manufacturing",
  },
  {
    value: "Cosmetology and Barber Schools",
    label: "Cosmetology and Barber Schools",
  },
  { value: "Flight Training", label: "Flight Training" },
  {
    value: "Electric Lighting Equipment Manufacturing",
    label: "Electric Lighting Equipment Manufacturing",
  },
  { value: "Fine Arts Schools", label: "Fine Arts Schools" },
  {
    value: "Sports and Recreation Instruction",
    label: "Sports and Recreation Instruction",
  },
  {
    value: "Household Appliance Manufacturing",
    label: "Household Appliance Manufacturing",
  },
  { value: "Language Schools", label: "Language Schools" },
  { value: "Physicians", label: "Physicians" },
  { value: "Courts of Law", label: "Courts of Law" },
  { value: "Correctional Institutions", label: "Correctional Institutions" },
  { value: "Dentists", label: "Dentists" },
  { value: "Fire Protection", label: "Fire Protection" },
];

export const campaigns = [
  { label: "Pilot", value: "pilot" },
  { label: "Campaign 2", value: "campaign-2" },
  { label: "Campaign 3", value: "campaign-3" },
];
