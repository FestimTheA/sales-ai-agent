"use client";

import React from "react";
import {Button, Input, Checkbox, Link, Divider} from "@nextui-org/react";

export default function Component() {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-[700] leading-[32px] mb-4">Company Info</h1>
        <div className="flex w-full flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <Input
              isRequired
              label="Company Name"
              name="company-name"
              placeholder="Enter your company name"
              type="text"
              variant="bordered"
            />
            <Input
              isRequired
              label="Company Website"
              name="company-website"
              placeholder="Enter your company website"
              type="url"
              variant="bordered"
            />
            <Button color="primary" type="submit">
              Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
