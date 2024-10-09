export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Outreach",
      href: "/docs",
    },
    {
      label: "Leads",
      href: "/pricing",
    },
    {
      label: "Campaigns",
      href: "/blog",
    },
    {
      label: "Users",
      href: "/users",
    },
    {
      label: "Sidebar",
      href: "/about",
    },
    {
      label: "Create Campaign",
      href: "/createcampaign",
    },
    {
      label: "Create Account",
      href: "/createaccount",
    },
    {
      label: "Sign In",
      href: "/signin",
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
