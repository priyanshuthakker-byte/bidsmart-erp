"use client";
import React from "react";

export default function ClauseLogic(): JSX.Element {
  return (
    <section className='p-4 bg-white dark:bg-gray-900 rounded shadow'>
      <h1 className='text-2xl font-bold mb-2'>Clause Intelligence</h1>
      <p className='text-sm text-muted-foreground mb-4'>
        Parses eligibility, experience, consortium rules, and generates pre-bid questions
      </p>
      <ul className='list-disc pl-5 space-y-1 text-sm'>
        <li>? Eligibility Clause Detected</li>
        <li>?? Experience Requirement: 3 years</li>
        <li>?? Consortium: Allowed</li>
        <li>?? Pre-Bid Questions: 4 generated</li>
      </ul>
      <button className='mt-4 px-3 py-2 bg-red-600 text-white rounded'>Export Questions</button>
    </section>
  );
}
