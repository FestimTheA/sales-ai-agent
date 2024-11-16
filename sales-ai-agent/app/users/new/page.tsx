"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";
// import { Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

// import { roles } from "./data";

export default function NewUser() {
  const router = useRouter();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleCreateUser = async () => {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
        }),
      });

      if (res.ok) {
        router.push("/users");
        router.refresh();
      } else {
        // eslint-disable-next-line no-console
        console.error(`HTTP error! Status: ${res.status}`);
        const result = await res.json();

        // eslint-disable-next-line no-console
        console.error(result);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-[700] leading-[32px] mb-4">Add User</h1>
        <div className="flex w-full flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              isRequired
              label="First Name"
              name="firstName"
              placeholder="Enter first name"
              type="text"
              variant="bordered"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              isRequired
              label="Last Name"
              name="lastName"
              placeholder="Enter last name"
              type="text"
              variant="bordered"
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              isRequired
              label="Email"
              name="email"
              placeholder="Enter email"
              type="email"
              variant="bordered"
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <Select
              isRequired
              items={roles}
              label="Role"
              placeholder="Select role"
              variant="bordered"
            >
              {(role) => <SelectItem key={role.key}>{role.label}</SelectItem>}
            </Select> */}

            <Button color="primary" type="submit" onClick={handleCreateUser}>
              Add User
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
