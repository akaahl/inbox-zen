"use server";

import { env } from "@/env";
import { auth } from "@clerk/nextjs/server";

type ServiceType =
  | "Google"
  | "Office365"
  | "EWS"
  | "IMAP"
  | "Salesforce"
  | "Salesflare"
  | "Repfabric"
  | "Slack"
  | "SugarCRM"
  | "HighLevel"
  | "Hubspot"
  | "Zoom"
  | "Webex"
  | "WebexBot"
  | "Pipedrive"
  | "EclipseERP"
  | "AutoQuotes"
  | "Teamwork"
  | "NetSuite"
  | "SpecPath"
  | "Zoho"
  | "Clientify"
  | "QuickBooks"
  | "ActiveCampaign"
  | "Creatio"
  | "ConstantContact"
  | "Fishbowl"
  | "iCloud";

export const getAurinkoAuthUrl = async (serviceType: ServiceType) => {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const params = new URLSearchParams({
    clientId: env.AURINKO_CLIENT_ID as string,
    serviceType,
    scopes: "Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts Mail.All",
    responseType: "code",
    returnUrl: `${env.NEXT_PUBLIC_URL}/api/aurinko/callback`,
  });

  return `https://api.aurinko.io/v1/auth/authorize?${params.toString()}`;
};
