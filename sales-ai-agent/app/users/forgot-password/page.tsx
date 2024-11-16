"use client";

import React from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const router = useRouter();

  const [email, setEmail] = React.useState("");

  const handleForgotPassword = async () => {
    try {
      const res = await fetch("/api/users/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (res.ok) {
        router.push("/sign-in");
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
        <h1 className="text-2xl font-[700] leading-[32px] mb-4">
          Forgot Password?
        </h1>
        <div className="flex w-full flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              isRequired
              label="Email"
              name="email"
              placeholder="Enter your email"
              type="email"
              variant="bordered"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              color="primary"
              type="submit"
              onClick={handleForgotPassword}
            >
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
