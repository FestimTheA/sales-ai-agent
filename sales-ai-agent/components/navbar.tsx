"use client";

// Removed this import
// import type {NavbarProps} from "@nextui-org/react"; 

import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
} from "@nextui-org/react";
import { Logo } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

const menuItems = [
  "Create Account",
  "Sign In",
  "User Info",
  "Sales AI Agent",
  "Campaigns",
  "Create Campaign",
  "Leads",
  "Outreach",
  "Users",
  "ThemeSwitch" /* Added ThemeSwitch */
];

// This was the original code but it didn't work
// export default function Component(props: NavbarProps) {
//   return (
//     <Navbar
//       {...props}
export const Navbar = () => {
  return (
    <NextUINavbar
      classNames={{
        base: "py-4 backdrop-filter-none bg-transparent",
        wrapper: "px-0 w-full justify-center bg-transparent",
        item: "hidden md:flex",
      }}
      height="54px"
    >
      <NavbarContent
        className="gap-4 rounded-full border-small border-default-200/20 bg-background/60 px-2 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        justify="center"
      >
        {/* Toggle */}
        <NavbarMenuToggle className="ml-2 text-default-400 md:hidden" />

        {/* Logo */}
        <NavbarBrand className="mr-2 w-[40vw] md:w-auto md:max-w-fit">
          <div className="rounded-full bg-foreground text-background">
            <Logo />
          </div>
          <span className="ml-2 font-medium md:hidden">ACME</span>
        </NavbarBrand>
        
       {/* Items */}
       <NavbarItem className="hidden md:flex">
          <Link className="text-default-500" href="/create-account" size="sm">
            Create Account
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="/sign-in" size="sm">
            Sign In
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" color="foreground" href="/user-info" size="sm">
            User Info
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="/sales-ai-agent" size="sm">
            Sales AI Agent
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="/campaigns" size="sm">
            Campaigns
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="/leads" size="sm">
            Leads
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="/outreach" size="sm">
            Outreach
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-default-500" href="/users" size="sm">
            Users
          </Link>
        </NavbarItem>
        {/* Added ThemeSwitch */}
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="ml-2 !flex">
          <Button radius="full" variant="flat">
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Menu */}
      <NavbarMenu
        className="top-[calc(var(--navbar-height)/2)] mx-auto mt-16 max-h-[40vh] max-w-[80vw] rounded-large border-small border-default-200/20 bg-background/60 py-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        motionProps={{
          initial: {opacity: 0, y: -20},
          animate: {opacity: 1, y: 0},
          exit: {opacity: 0, y: -20},
          transition: {
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {/* Added ThemeSwitch */}
            {item === "ThemeSwitch" ? (
              <ThemeSwitch />
            ) : (
              <Link className="w-full text-default-500" href="#" size="md">
                {item}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
