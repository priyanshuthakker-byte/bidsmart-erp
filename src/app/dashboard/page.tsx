"use client";
import React from "react";
import MobileWrapper from "@/components/Mobile/MobileWrapper";

export default function DashboardPage(): JSX.Element {
  return (
    <MobileWrapper>
      <h1 className='text-xl font-bold mb-2'>?? Dashboard</h1>
      <p className='text-sm text-muted-foreground mb-4'>Live status, reminders, and cockpit overview</p>
    </MobileWrapper>
  );
}
