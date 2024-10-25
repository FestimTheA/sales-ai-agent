"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";

interface CompanyInfoFormProps {
  submitCallback: (name: string, website: string) => void;
}

export default function CompanyInfoForm({
  submitCallback,
}: CompanyInfoFormProps) {
  const [name, setName] = React.useState("");
  const [website, setWebsite] = React.useState("");

  return (
    <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
      <Input
        isRequired
        label="Company Name"
        name="company-name"
        placeholder="Enter your company name"
        type="text"
        variant="bordered"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        isRequired
        label="Company Website"
        name="company-website"
        placeholder="Enter your company website"
        type="url"
        variant="bordered"
        onChange={(e) => setWebsite(e.target.value)}
      />
      <Button
        color="primary"
        type="submit"
        onClick={() => {
          submitCallback(name, website);
        }}
      >
        Save
      </Button>
    </form>
  );
}
