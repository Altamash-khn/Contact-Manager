import { NextResponse } from "next/server";
import React from "react";

export const GET = () => {
  return NextResponse.json({
    message: "this will work",
    status: "success",
  });
};
