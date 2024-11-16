"use client";

import React from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type Params = {
  token: string;
};

export default function ResetPassword({ params }: { params: Params }) {
  const router = useRouter();

  const [password, setPassword] = React.useState("");
  const [confirmedPassword, setConfirmedPassword] = React.useState("");

  const handleSavePassword = async () => {
    if (password !== confirmedPassword) {
      alert("Passwords do not match");

      return;
    }

    try {
      const res = await fetch("/api/users/reset_password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: params.token,
          password,
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
          Set Password
        </h1>
        <div className="flex w-full flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <form
            className="flex flex-col gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              isRequired
              label="Password"
              placeholder="Enter your password"
              type="password"
              variant="bordered"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              isRequired
              label="Confirm password"
              placeholder="Confirm your pasword"
              type="password"
              variant="bordered"
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
            <Button color="primary" type="submit" onClick={handleSavePassword}>
              Set Password
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
