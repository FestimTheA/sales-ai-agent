/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";

import React, { useState } from "react";

import CreateAccountForm from "./create_account_form";
import CompanyInfoForm from "./company_info_form";
import Cookies from "js-cookie";
import { callApiFromClient } from "@/utils/client-api-service";
import { useRouter } from "next/navigation";

export default function Component() {
  const [isCompanyInfo, setIsCompanyInfo] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const createAccountSubmit = (email: string, password: string) => {
    setEmail(email);
    setPassword(password);
    setIsCompanyInfo(true);
  }

  const companyInfoSubmit = async (companyName: string, website: string) => {
    const response = await callApiFromClient("customers", {
      method: "POST",
      body: JSON.stringify({ email, password, website, name: companyName }),
    });

    if (response.ok) {
      const result = await response.json();

      Cookies.set("jwt", result.token, {
        expires: 7,
        path: "/",
        sameSite: "Lax",
        secure: process.env.NODE_ENV === "production",
      });
      Cookies.set("user-id", result.id, {
        expires: 7,
        path: "/",
        sameSite: "Lax",
        secure: process.env.NODE_ENV === "production",
      });

      router.push("/campaigns");
    } else {
      console.error(`HTTP error! Status: ${response.status}`);
    }
  }

  return (
    <div className="flex h-full w-full justify-center">
      <div className="w-full max-w-lg">
        <h1 className="text-2xl font-[700] leading-[32px] mb-4">{isCompanyInfo ? 'Company Info' : 'Create Account'} </h1>
        <div className="flex w-full flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
          {isCompanyInfo ? <CompanyInfoForm submitCallback={companyInfoSubmit} /> : <CreateAccountForm submitCallback={createAccountSubmit} />}
        </div>
      </div>
    </div>
  );
}
