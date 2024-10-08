import {Chip} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import {type SidebarItem, SidebarItemType} from "./sidebar";
import TeamAvatar from "./team-avatar";

/**
 * Please check the https://nextui.org/docs/guide/routing to have a seamless router integration
 */

export const items: SidebarItem[] = [
  {
    key: "dashboard",
    href: "#",
    icon: "solar:chart-outline",
    title: "Dashboard",
  },
  {
    key: "campaigns",
    href: "#",
    icon: "solar:widget-2-outline",
    title: "Campaigns",
    // endContent: (
    //   <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
    // ),
  },
  {
    key: "leads",
    href: "#",
    icon: "solar:users-group-rounded-outline",
    title: "Leads",
    // endContent: (
    //   <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
    // ),
  },
  {
    key: "outreach",
    href: "#",
    icon: "solar:plain-outline",
    title: "Outreach",
  },
  // {
  //   key: "users",
  //   href: "#",
  //   icon: "solar:users-group-two-rounded-outline",
  //   title: "Users",
  //   endContent: (
  //     <Chip size="sm" variant="flat">
  //       New
  //     </Chip>
  //   ),
  // },
  // {
  //   key: "analytics",
  //   href: "#",
  //   icon: "solar:chart-outline",
  //   title: "Analytics",
  // },
  // {
  //   key: "perks",
  //   href: "#",
  //   icon: "solar:gift-linear",
  //   title: "Perks",
  //   endContent: (
  //     <Chip size="sm" variant="flat">
  //       3
  //     </Chip>
  //   ),
  // },
  {
    key: "users",
    href: "#",
    icon: "solar:bill-list-outline",
    title: "Users",
  },
  {
    key: "settings",
    href: "#",
    icon: "solar:settings-outline",
    title: "Settings",
  },
];

export const sectionItems: SidebarItem[] = [
  {
    key: "overview",
    title: "Overview",
    items: [
      {
        key: "dashhboard",
        href: "#",
        icon: "solar:chart-outline",
        title: "Dashboard",
      },
      {
        key: "campaigns",
        href: "#",
        icon: "solar:widget-2-outline",
        title: "Campaigns",
        // endContent: (
        //   <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
        // ),
      },
      {
        key: "leads",
        href: "#",
        icon: "solar:users-group-rounded-outline",
        title: "Leads",
        // endContent: (
        //   <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
        // ),
      },
      {
        key: "outreach",
        href: "#",
        icon: "solar:plain-outline",
        title: "Outreach",
      },
      // {
      //   key: "users",
      //   href: "#",
      //   icon: "solar:users-group-two-rounded-outline",
      //   title: "Users",
      //   endContent: (
      //     <Chip size="sm" variant="flat">
      //       New
      //     </Chip>
      //   ),
      // },
    ],
  },
  {
    key: "organization",
    title: "Organization",
    items: [
      // {
      // //   key: "cap_table",
      //   href: "#",
      //   title: "Cap Table",
      //   icon: "solar:pie-chart-2-outline",
      //   items: [
      //     {
      //       key: "shareholders",
      //       href: "#",
      //       title: "Shareholders",
      //     },
      //     {
      //       key: "note_holders",
      //       href: "#",
      //       title: "Note Holders",
      //     },
      //     {
      //       key: "transactions_log",
      //       href: "#",
      //       title: "Transactions Log",
      //     },
      //   ],
      // },
      // {
      //   key: "analytics",
      //   href: "#",
      //   icon: "solar:chart-outline",
      //   title: "Analytics",
      // },
      // {
      //   key: "perks",
      //   href: "/perks",
      //   icon: "solar:gift-linear",
      //   title: "Perks",
      //   endContent: (
      //     <Chip size="sm" variant="flat">
      //       3
      //     </Chip>
      //   ),
      // },
      {
        key: "users",
        href: "/users",
        icon: "solar:bill-list-outline",
        title: "Users",
      },
      {
        key: "settings",
        href: "/settings",
        icon: "solar:settings-outline",
        title: "Settings",
      },
    ],
  },
];

export const sectionItemsWithTeams: SidebarItem[] = [
  ...sectionItems,
  // {
  //   key: "your-teams",
  //   title: "Your Teams",
  //   items: [
  //     {
  //       key: "nextui",
  //       href: "#",
  //       title: "NextUI",
  //       startContent: <TeamAvatar name="Next UI" />,
  //     },
  //     {
  //       key: "tailwind-variants",
  //       href: "#",
  //       title: "Tailwind Variants",
  //       startContent: <TeamAvatar name="Tailwind Variants" />,
  //     },
  //     {
  //       key: "nextui-pro",
  //       href: "#",
  //       title: "NextUI Pro",
  //       startContent: <TeamAvatar name="NextUI Pro" />,
  //     },
  //   ],
  // },
];

export const brandItems: SidebarItem[] = [
  {
    key: "overview",
    title: "Overview",
    items: [
      {
        key: "dashboard",
        href: "#",
        icon: "solar:chart-outline",
        title: "Dashboard",
      },
      {
        key: "campaigns",
        href: "#",
        icon: "solar:widget-2-outline",
        title: "Campaigns",
        // endContent: (
        //   <Icon
        //     className="text-primary-foreground/60"
        //     icon="solar:add-circle-line-duotone"
        //     width={24}
        //   />
        // ),
      },
      {
        key: "leads",
        href: "#",
        icon: "solar:users-group-rounded-outline",
        title: "Leads",
        // endContent: (
        //   <Icon
        //     className="text-primary-foreground/60"
        //     icon="solar:add-circle-line-duotone"
        //     width={24}
        //   />
        // ),
      },
      {
        key: "outreach",
        href: "#",
        icon: "solar:plain-outline",
        title: "Outreach",
      },
      // {
      //   key: "users",
      //   href: "#",
      //   icon: "solar:users-group-two-rounded-outline",
      //   title: "Users",
      //   endContent: (
      //     <Chip className="bg-primary-foreground font-medium text-primary" size="sm" variant="flat">
      //       New
      //     </Chip>
      //   ),
      // },
    ],
  },
  // {
  //   key: "your-teams",
  //   title: "Your Teams",
  //   items: [
  //     {
  //       key: "nextui",
  //       href: "#",
  //       title: "NextUI",
  //       startContent: (
  //         <TeamAvatar
  //           classNames={{
  //             base: "border-1 border-primary-foreground/20",
  //             name: "text-primary-foreground/80",
  //           }}
  //           name="Next UI"
  //         />
  //       ),
  //     },
  //     {
  //       key: "tailwind-variants",
  //       href: "#",
  //       title: "Tailwind Variants",
  //       startContent: (
  //         <TeamAvatar
  //           classNames={{
  //             base: "border-1 border-primary-foreground/20",
  //             name: "text-primary-foreground/80",
  //           }}
  //           name="Tailwind Variants"
  //         />
  //       ),
  //     },
  //     {
  //       key: "nextui-pro",
  //       href: "#",
  //       title: "NextUI Pro",
  //       startContent: (
  //         <TeamAvatar
  //           classNames={{
  //             base: "border-1 border-primary-foreground/20",
  //             name: "text-primary-foreground/80",
  //           }}
  //           name="NextUI Pro"
  //         />
  //       ),
  //     },
  //   ],
  // },
];

export const sectionLongList: SidebarItem[] = [
  ...sectionItems,
  // {
  //   key: "payments",
  //   title: "Payments",
  //   items: [
  //     {
  //       key: "payroll",
  //       href: "#",
  //       title: "Payroll",
  //       icon: "solar:dollar-minimalistic-linear",
  //     },
  //     {
  //       key: "invoices",
  //       href: "#",
  //       title: "Invoices",
  //       icon: "solar:file-text-linear",
  //     },
  //     {
  //       key: "billing",
  //       href: "#",
  //       title: "Billing",
  //       icon: "solar:card-outline",
  //     },
  //     {
  //       key: "payment-methods",
  //       href: "#",
  //       title: "Payment Methods",
  //       icon: "solar:wallet-money-outline",
  //     },
  //     {
  //       key: "payouts",
  //       href: "#",
  //       title: "Payouts",
  //       icon: "solar:card-transfer-outline",
  //     },
  //   ],
  // },
  // // {
  //   key: "your-teams",
  //   title: "Your Teams",
  //   items: [
  //     {
  //       key: "nextui",
  //       href: "#",
  //       title: "NextUI",
  //       startContent: <TeamAvatar name="Next UI" />,
  //     },
  //     {
  //       key: "tailwind-variants",
  //       href: "#",
  //       title: "Tailwind Variants",
  //       startContent: <TeamAvatar name="Tailwind Variants" />,
  //     },
  //     {
  //       key: "nextui-pro",
  //       href: "#",
  //       title: "NextUI Pro",
  //       startContent: <TeamAvatar name="NextUI Pro" />,
  //     },
  //   ],
  // },
];

export const sectionNestedItems: SidebarItem[] = [
  {
    key: "dashboard",
    href: "#",
    icon: "solar:chart-outline",
    title: "Dashboard",
  },
  {
    key: "campaigns",
    href: "#",
    icon: "solar:widget-2-outline",
    title: "Campaigns",
    // endContent: (
    //   <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
    // ),
  },
  {
    key: "leads",
    href: "#",
    icon: "solar:users-group-rounded-outline",
    title: "Leads",
    // endContent: (
    //   <Icon className="text-default-400" icon="solar:add-circle-line-duotone" width={24} />
    // ),
  },
  {
    key: "outreach",
    href: "#",
    icon: "solar:plain-outline",
    title: "Outreach",
  },
  // {
  //   key: "users",
  //   href: "#",
  //   icon: "solar:users-group-two-rounded-outline",
  //   title: "Users",
  //   endContent: (
  //     <Chip size="sm" variant="flat">
  //       New
  //     </Chip>
  //   ),
  // },
  // {
  //   key: "analytics",
  //   href: "#",
  //   icon: "solar:chart-outline",
  //   title: "Analytics",
  // },
  // {
  //   key: "perks",
  //   href: "#",
  //   icon: "solar:gift-linear",
  //   title: "Perks",
  //   endContent: (
  //     <Chip size="sm" variant="flat">
  //       3
  //     </Chip>
  //   ),
  // },
  // {
  //   key: "cap_table",
  //   title: "Cap Table",
  //   icon: "solar:pie-chart-2-outline",
  //   type: SidebarItemType.Nest,
  //   items: [
  //     {
  //       key: "shareholders",
  //       icon: "solar:users-group-rounded-linear",
  //       href: "#",
  //       title: "Shareholders",
  //     },
  //     {
  //       key: "note_holders",
  //       icon: "solar:notes-outline",
  //       href: "#",
  //       title: "Note Holders",
  //     },
  //     {
  //       key: "transactions_log",
  //       icon: "solar:clipboard-list-linear",
  //       href: "#",
  //       title: "Transactions Log",
  //     },
  //   ],
  // },
  {
    key: "users",
    href: "#",
    icon: "solar:bill-list-outline",
    title: "Users",
  },
];
