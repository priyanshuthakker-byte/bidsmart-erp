"use client";
import React from "react";

export default function SidebarFilters(): JSX.Element {
  return (
    <aside className='w-64 p-4 bg-gray-100 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700'>
      <h2 className='text-lg font-semibold mb-2'>?? Filters</h2>
      <ul className='space-y-2 text-sm text-muted-foreground'>
        <li>?? Department</li>
        <li>?? Due Date</li>
        <li>?? Evaluation Method</li>
        <li>? Eligibility</li>
      </ul>
    </aside>
  );
}
