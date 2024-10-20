"use client";

import React from "react";
import { Button } from "./ui/button";
import { getAurinkoAuthUrl } from "@/lib/aurinko";

const LinkAccountButton = () => {
  const onClick = async () => {
    const authUrl = await getAurinkoAuthUrl("Google");
    window.location.href = authUrl;
  };

  return <Button onClick={onClick}>Link Account</Button>;
};

export default LinkAccountButton;
