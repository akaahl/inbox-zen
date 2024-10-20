import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json("Unauthorized!", { status: 401 });
  }

  console.log("User id", userId);

  const params = req.nextUrl.searchParams;
  console.log(params);
};
