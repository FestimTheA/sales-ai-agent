"use client";

import React from "react";
import {Button, Divider} from "@nextui-org/react";
import {Icon} from "@iconify/react";

export default function Component() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full max-w-lg">
        <div className="flex w-full flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          <h1 className="text-2xl font-[700] leading-[32px] mb-4">The Office Extension</h1>
          <div className="flex flex-col gap-3">
            <Button
              startContent={<Icon icon="mdi:linkedin" width={24} />}
              color="primary"
            >
              Connect with LinkedIn
            </Button>
            <Button
              variant="bordered"
            >
              Go to The Office
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
