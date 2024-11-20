"use client";

import React, { FormEvent } from "react";
import { Button, Input, Checkbox, Link, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function Component() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        // Slight delay to ensure cookie is set
        // setTimeout(() => router.push("/dashboard"), 1000);
        router.push("/dashboard");
        router.refresh();
      } else {
        // eslint-disable-next-line no-console
        console.error(`HTTP error! Status: ${res.status}`);
        if (res.status === 401) {
          alert("Invalid email or password");
        } else {
          const result = await res.json();

          // eslint-disable-next-line no-console
          console.error(`HTTP message: ${result["error"]}`);
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <div className="flex h-full w-full center justify-center">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-[700] leading-[32px] mb-4">Sign In</h1>
        <div className="flex w-full flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <Input
              isRequired
              label="Email"
              name="email"
              placeholder="Enter your email"
              type="email"
              variant="bordered"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              endContent={
                <button type="button" onClick={toggleVisibility}>
                  {isVisible ? (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-closed-linear"
                    />
                  ) : (
                    <Icon
                      className="pointer-events-none text-2xl text-default-400"
                      icon="solar:eye-bold"
                    />
                  )}
                </button>
              }
              isRequired
              label="Password"
              name="password"
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              variant="bordered"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center justify-between px-1 py-2">
              <Checkbox name="remember" size="sm">
                Remember me
              </Checkbox>
              <Link
                className="text-default-500"
                href="/users/forgot-password"
                size="sm"
              >
                Forgot password?
              </Link>
            </div>
            <Button color="primary" type="submit">
              Sign In
            </Button>
          </form>
          {/* <div className="flex items-center gap-4 py-2">
            <Divider className="flex-1" />
            <p className="shrink-0 text-tiny text-default-500">OR</p>
            <Divider className="flex-1" />
          </div>
          <div className="flex flex-col gap-2">
            <Button
              startContent={<Icon icon="flat-color-icons:google" width={24} />}
              variant="bordered"
            >
              Sign In with Google
            </Button>
          </div> */}
          <p className="text-left text-small">
            You don"t have an account?&nbsp;
            <Link href="create-account" size="sm">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
