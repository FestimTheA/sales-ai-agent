"use client";

import React from "react";
import {Button, Input, Checkbox, Link, Divider} from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";
import {roles} from "./data";

export default function Component() {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-[700] leading-[32px] mb-4">Add User</h1>
        <div className="flex w-full flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
          <Input
              isRequired
              label="First Name"
              name="firstName"
              placeholder="Enter first name"
              type="text"
              variant="bordered"
            />
            <Input
              isRequired
              label="Last Name"
              name="lastName"
              placeholder="Enter last name"
              type="text"
              variant="bordered"
            />
            <Input
              isRequired
              label="Email"
              name="email"
              placeholder="Enter email"
              type="email"
              variant="bordered"
            />
            <Select
              isRequired
              items={roles}
              label="Role"
              placeholder="Select role"
              variant="bordered"
            >
              {(role) => <SelectItem key={role.key}>{role.label}</SelectItem>}
            </Select>

            <Button color="primary" type="submit"> 
              Add User
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
