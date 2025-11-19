"use client";
import React from "react";

export default function MobileWrapper({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className='max-w-md mx-auto bg-white dark:bg-black min-h-screen shadow-md'>
      <header className='p-4 border-b border-gray-300 dark:border-gray-700'>
        <h1 className='text-xl font-bold'>?? BidSmart Mobile</h1>
      </header>
      <main className='p-4'>{children}</main>
    </div>
  );
}
