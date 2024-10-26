export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "The Office AI",
  description: "Autonomous sales AI agent for LinkedIn.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sales AI Agent",
      href: "/sales-ai-agent",
    },
    {
      label: "Campaigns",
      href: "/campaigns",
    },
    {
      label: "Create Campaign",
      href: "/create-campaign",
    },
    {
      label: "Leads",
      href: "/leads",
    },
    {
      label: "Outreach",
      href: "/outreach",
    },
    {
      label: "Users",
      href: "/users",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "User Info",
      href: "/user-info",
    },
    {
      label: "Create Account",
      href: "/create-account",
    },
    {
      label: "Company Info",
      href: "/company-info",
    },
    {
      label: "Sign In",
      href: "/sign-in",
    },
    {
      label: "Forgot Password",
      href: "/forgot-password",
    },
    {
      label: "Settings",
      href: "/settings",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
