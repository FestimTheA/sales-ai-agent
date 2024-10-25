"use client";

import React, { MouseEvent } from "react";
import { Button, Input, Checkbox, Link, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";

interface CreateAccountFormProps {
  submitCallback: (email: string, password: string) => void;
}

export default function CreateAccountForm({
  submitCallback,
}: CreateAccountFormProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);
  const createAccount = (_event: MouseEvent<HTMLButtonElement>) => {
    submitCallback(email, password);
  };

  return (
    <React.Fragment>
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
        <Input
          isRequired
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
          label="Password"
          name="password"
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
          variant="bordered"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Checkbox isRequired className="py-4" size="sm">
          I agree with the&nbsp;
          <Link href="#" size="sm">
            Terms
          </Link>
          &nbsp;and&nbsp;
          <Link href="#" size="sm">
            Privacy Policy
          </Link>
        </Checkbox>
        <Button color="primary" type="submit" onClick={createAccount}>
          Create Account
        </Button>
      </form>
      <div className="flex items-center gap-4 py-2">
        <Divider className="flex-1" />
        <p className="shrink-0 text-tiny text-default-500">OR</p>
        <Divider className="flex-1" />
      </div>
      {/* <div className="flex flex-col gap-2">
        <Button
          startContent={<Icon icon="flat-color-icons:google" width={24} />}
          variant="bordered"
        >
          Create Account with Google
        </Button>
      </div> */}
      <p className="text-left text-small">
        Already have an account?&nbsp;
        <Link href="sign-in" size="sm">
          Sign In
        </Link>
      </p>
    </React.Fragment>
  );
}