"use client";
import React from "react";

export default function DocumentVault(): JSX.Element {
  return (
    <section className='p-4 bg-white dark:bg-gray-900 rounded shadow'>
      <h1 className='text-2xl font-bold mb-2'>Document Vault</h1>
      <p className='text-sm text-muted-foreground mb-4'>
        Upload, store, and manage all tender documents securely
      </p>
      <button className='px-3 py-2 bg-blue-600 text-white rounded'>Upload Document</button>
      <button className='px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded'>View Vault</button>
    </section>
  );
}
