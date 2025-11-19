"use client";
import React from "react";

export default function SubmissionModule(): JSX.Element {
  return (
    <section className='p-4 bg-white dark:bg-gray-900 rounded shadow'>
      <header className='mb-4'>
        <h1 className='text-2xl font-bold'>Submission Module</h1>
        <p className='text-sm text-muted-foreground'>
          Upload final documents, generate invoices, and track submission status
        </p>
      </header>

      <div className='space-y-3'>
        <button className='px-3 py-2 bg-green-600 text-white rounded'>Upload Final Docs</button>
        <button className='px-3 py-2 bg-yellow-500 text-white rounded'>Generate Invoice</button>
        <button className='px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded'>Track Submission</button>
      </div>
    </section>
  );
}
