"use client";
import React from "react";

export default function AnnexureBundler(): JSX.Element {
  return (
    <section className='p-4 bg-white dark:bg-gray-900 rounded shadow'>
      <h1 className='text-2xl font-bold mb-2'>AnnexureBundler</h1>
      <p className='text-sm text-muted-foreground mb-4'>
        Strategic cockpit module: Bundle Annexures
      </p>
      <button className='px-3 py-2 bg-pink-600 text-white rounded'>Bundle Annexures</button>
    </section>
  );
}
