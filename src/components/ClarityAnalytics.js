"use client";

import clarity from "@microsoft/clarity";
import { useEffect } from "react";

export default function ClarityAnalytics() {
  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
    if (id) {
      clarity.init(id);
    }
  }, []);

  return null;
}
