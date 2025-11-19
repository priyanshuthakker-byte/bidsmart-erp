"use client";
import React, { useState } from "react";

export default function DSCModule(): JSX.Element {
  const [signed, setSigned] = useState(false);
  const handleSign = async () => {
    await fetch('/api/sign-pdf', { method: 'POST' });
    setSigned(true);
  };
  return (
    <section className='p-4 bg-white dark:bg-gray-900 rounded shadow'>
      <h2 className='text-xl font-bold mb-2'>Digital Signature</h2>
      <button onClick={handleSign} className='px-3 py-2 bg-green-600 text-white rounded'>Sign PDF</button>
      {signed && <p className='mt-4 text-green-600'>? Document signed</p>}
    </section>
  );
}
