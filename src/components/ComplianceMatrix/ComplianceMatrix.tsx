"use client";
import React from "react";

export default function ComplianceMatrix(): JSX.Element {
  return (
    <section className='p-4 bg-white dark:bg-gray-900 rounded shadow'>
      <h1 className='text-2xl font-bold mb-2'>ComplianceMatrix</h1>
      <p className='text-sm text-muted-foreground mb-4'>
        Strategic cockpit module: Check Compliance
      </p>
      <button className='px-3 py-2 bg-yellow-600 text-white rounded'>Check Compliance</button>
    </section>
  );
}
