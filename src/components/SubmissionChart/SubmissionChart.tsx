"use client";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { stage: 'Docs Uploaded', count: 3 },
  { stage: 'Invoice Generated', count: 1 },
  { stage: 'Annexures Ready', count: 2 },
  { stage: 'Submitted', count: 0 },
];

export default function SubmissionChart(): JSX.Element {
  return (
    <section className='p-4 bg-white dark:bg-gray-900 rounded shadow'>
      <h2 className='text-xl font-bold mb-2'>Submission Progress</h2>
      <ResponsiveContainer width='100%' height={250}>
        <BarChart data={data}>
          <XAxis dataKey='stage' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='count' fill='#2563eb' />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
