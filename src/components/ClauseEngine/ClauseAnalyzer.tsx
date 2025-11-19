"use client";
import React from "react";

export default function ClauseAnalyzer(): JSX.Element {
  return (
    <section className='p-4 bg-white dark:bg-gray-900 rounded shadow'>
      <h1 className='text-2xl font-bold mb-2'>Clause-Aware Intelligence</h1>
      <p className='text-sm text-muted-foreground mb-4'>
        Analyze eligibility, experience, consortium rules, and generate pre-bid questions
      </p>
      <button className='px-3 py-2 bg-red-600 text-white rounded'>Run Pre-Bid Analyzer</button>
    </section>
  );
}
