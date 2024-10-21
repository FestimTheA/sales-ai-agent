"use client";

import React from "react";
import {Button, Input, Link} from "@nextui-org/react";

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-[700] leading-[32px] mb-4">Forgot Password?</h1>
        <div className="flex w-full flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <Input
              isRequired
              label="Email"
              name="email"
              placeholder="Enter your email"
              type="email"
              variant="bordered"
            />
            <Button color="primary" type="submit">
              Reset Password
            </Button>
          </form>
          <p className="text-left text-small">
            Go back to&nbsp;
            <Link href="sign-in" size="sm">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
