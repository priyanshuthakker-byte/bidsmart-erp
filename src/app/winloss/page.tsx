"use client";
import React from "react";
import WinLossTracker from "@/components/WinLossTracker/WinLossTracker";

export default function WinLossTrackerPage(): JSX.Element {
  return (
    <main className='p-6'>
      <WinLossTracker />
    </main>
  );
}
