"use client";
import React, { useState } from "react";

export default function ClauseParser(): JSX.Element {
  const [clauses, setClauses] = useState<string[]>([]);

  const handleParse = async () => {
    const res = await fetch("/api/parse-clauses", { method: "POST" });
    const data = await res.json();
    setClauses(data.clauses);
  };

  return (
    <section className='p-4 bg-white dark:bg-gray-900 rounded shadow'>
      <h2 className='text-xl font-bold mb-2'>Clause Parser</h2>
      <button onClick={handleParse} className='px-3 py-2 bg-blue-600 text-white rounded'>Parse Clauses</button>
      <ul className='mt-4 list-disc pl-5 text-sm text-muted-foreground'>
        {clauses.map((c, i) => <li key={i}>{c}</li>)}
      </ul>
    </section>
  );
}
