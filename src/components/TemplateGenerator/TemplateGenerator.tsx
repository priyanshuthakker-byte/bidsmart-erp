"use client";
import React, { useState } from "react";

const templates = {
  'Work Plan': 'Milestone-based execution...',
  'Turnover Certificate': 'Certified by CA...',
  'OEM Letter': 'We authorize...',
  'Compliance Sheet': 'Clause-wise matrix...',
};

export default function TemplateGenerator(): JSX.Element {
  const [selected, setSelected] = useState('Work Plan');
  return (
    <section className='p-4 bg-white dark:bg-gray-900 rounded shadow'>
      <h2 className='text-xl font-bold mb-2'>GeM RFP Templates</h2>
      <select className='mb-4 p-2 border rounded' onChange={(e) => setSelected(e.target.value)}>
        {Object.keys(templates).map((t) => <option key={t}>{t}</option>)}
      </select>
      <pre className='bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm whitespace-pre-wrap'>
        {templates[selected]}
      </pre>
    </section>
  );
}
