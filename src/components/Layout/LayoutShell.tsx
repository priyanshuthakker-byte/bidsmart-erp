"use client";
import React from "react";
import SidebarFilters from "./SidebarFilters";
import MobileWrapper from "../Mobile/MobileWrapper";

export default function LayoutShell({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className='flex min-h-screen bg-gray-50 dark:bg-black transition-all duration-300 ease-in-out'>
      <SidebarFilters />
      <div className='flex-1 overflow-y-auto'>
        <MobileWrapper>
          {children}
        </MobileWrapper>
      </div>
    </div>
  );
}
