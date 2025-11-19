"use client";
import React from "react";

export default function ExperienceSheet(): JSX.Element {
  return (
    <section className='p-4 bg-white dark:bg-gray-900 rounded shadow'>
      <h1 className='text-2xl font-bold mb-2'>ExperienceSheet</h1>
      <p className='text-sm text-muted-foreground mb-4'>
        Strategic cockpit module: Generate Experience Sheet
      </p>
      <button className='px-3 py-2 bg-indigo-600 text-white rounded'>Generate Experience Sheet</button>
    </section>
  );
}
