"use client";
import React, { useState } from "react";

export default function AnnexureAutoFill(): JSX.Element {
  const [form, setForm] = useState({
    company: 'BidSmart Technologies Pvt. Ltd.',
    declaration: 'We hereby declare...',
    authorized: 'Parthav B. Thakkar',
  });

  return (
    <section className='p-4 bg-white dark:bg-gray-900 rounded shadow'>
      <h2 className='text-xl font-bold mb-2'>Annexure Auto-Fill</h2>
      <form className='space-y-4 text-sm'>
        <input className='w-full p-2 border rounded' value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
        <textarea className='w-full p-2 border rounded' rows={4} value={form.declaration} onChange={(e) => setForm({ ...form, declaration: e.target.value })} />
        <input className='w-full p-2 border rounded' value={form.authorized} onChange={(e) => setForm({ ...form, authorized: e.target.value })} />
        <button type='submit' className='px-3 py-2 bg-blue-600 text-white rounded'>Export Annexure</button>
      </form>
    </section>
  );
}
