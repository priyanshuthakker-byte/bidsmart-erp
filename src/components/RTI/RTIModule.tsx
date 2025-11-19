"use client";
import React from "react";

export default function RTIModule(): JSX.Element {
  return (
    <section className="p-4 bg-white dark:bg-gray-900 rounded shadow">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">RTI Module</h1>
        <p className="text-sm text-muted-foreground">
          Right to Information helpers and generators
        </p>
      </header>

      <div className="space-y-3">
        <button className="px-3 py-2 bg-blue-600 text-white rounded">Generate RTI</button>
        <button className="px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded">Open RTI Logs</button>
      </div>
    </section>
  );
}
