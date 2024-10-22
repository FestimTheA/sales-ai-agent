import type {MessagingChatMessageProps} from "./data";

const messagingChatAIConversations: MessagingChatMessageProps[] = [
  {
    avatar: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/3a906b3de8eaa53e14582edf5c918b5d.jpg",
    message: "Create a campaign",
    name: "You",
  },
  {
    avatar: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png",
    message: `1. Describe what your company does in 50 characters or less:
Deel simplifies global hiring and payroll management.

2. Please describe your product and what it does or will do:
Deel is an all-in-one Global People Platform that helps companies manage global teams by simplifying hiring, onboarding, payroll, and compliance across 150 countries.

3. What is the problem?
Companies face challenges in hiring and managing international teams due to complex local laws, payroll compliance, and diverse HR practices.

4. Who has the problem?
Businesses of all sizes, from startups to enterprises, looking to hire and manage remote workers globally experience these challenges.

5. What are the costs of not solving the problem?
Failure to address these issues can lead to legal penalties, payroll errors, inefficiencies in operations, and difficulties in attracting and retaining talent.

6. How do people currently solve this problem? Why do current solutions fail?
Many companies use multiple tools for payroll, HR, and compliance, which can create silos and inefficiencies. Current solutions often fail due to lack of integration, high costs, or non-compliance with local regulations.

7. What has currently changed?
The rise of remote work has increased the demand for efficient global hiring and payroll solutions, highlighting the need for a streamlined approach.

8. Why is our solution better? (Qualitative/Quantitative proof)
Deel offers a single platform that integrates payroll, HR, performance, and compliance for all types of workers in 150 countries. With over 500,000 workers onboarded globally and $10B compliantly processed in payroll, Deel provides unmatched speed, flexibility, and compliance.

9. What are the switching barriers that prevent a potential customer from switching to your product and how you can address those barriers.
Potential customers may fear the complexity of transitioning to a new system. Deel addresses these barriers by offering dedicated onboarding support, a self-serve platform for easy integration, and a guarantee of efficient setup tailored to the customers' needs.

Based on your company profile, I've created this campaign and campaign note:

Campaign Name: Pilot

Campaign Note:
Hi Agon,

I noticed your work in [Industry] and thought Deel could be a great fit for simplifying global hiring and payroll. We help companies streamline operations across 150 countries with our all-in-one platform for HR, payroll, and compliance. Would love to connect!

Please provide feedback:`,
    name: "Sales AI Agent",
    isRTL: true,
  },
  {
    avatar: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/3a906b3de8eaa53e14582edf5c918b5d.jpg",
    message: "This looks good!",
    name: "You",
  },
  {
    avatar: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png",
    message: `Based on your feedback, I've identified these LinkedIn filters that match our criteria:

Geography: London, Toronto, Buenos Aires
Industry: Fintech, Ed Tech, IT Services
Current job title: HR Manager, Compliance Officer, Payroll Specialist

Please provide feedback:`,
    name: "Sales AI Agent",
    isRTL: true,
  },
  {
    avatar: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/3a906b3de8eaa53e14582edf5c918b5d.jpg",
    message: "This looks ok",
    name: "You",
  },
  {
    avatar: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png",
    message: `Based on your feedback, I've identified two potential leads that match our criteria:

1. Juan Artaza
   Company: Extend IT
   Position: HR Manager
   Location: Buenos Aires, Buenos Aires Province, Argentina
   Time in role: 1 year 9 months
   Time in company: 1 year 9 months
   Score: Budget 7, Authority 6, Need 8, Timeline 5

2. Adrián Milán
   Company: SEIDOR Analytics
   Position: People & Culture Manager LATAM
   Location: Argentina
   Time in role: 4 years 10 months
   Time in company: 4 years 10 months`,
    name: "Sales AI Agent",
    isRTL: true,
  },
  {
    avatar: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/3a906b3de8eaa53e14582edf5c918b5d.jpg",
    message: "I like these leads. Please proceed with outreach.",
    name: "You",
  },
  {
    avatar: "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png",
    message: `Certainly! I'll proceed with outreach to each lead separately.

Outreach 1 (Juan Artaza):
Hi Juan,

I noticed your work in IT Services and thought Deel could be a great fit for simplifying global hiring and payroll. We help companies streamline operations across 150 countries with our all-in-one platform for HR, payroll, and compliance. Would love to connect!

Outreach 2 (Adrián Milán):
Hi Adrián,

I noticed your work in HR and thought Deel could be a great fit for simplifying global hiring and payroll. We help companies streamline operations across 150 countries with our all-in-one platform for HR, payroll, and compliance. Would love to connect!

I've sent these connection requests. I'll update you once we receive responses from these leads.`,
    name: "Sales AI Agent",
    isRTL: true,
  },
];

export default messagingChatAIConversations;
