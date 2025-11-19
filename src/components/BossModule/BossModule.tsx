"use client";
import React from "react";

export default function BossModule(): JSX.Element {
  return (
    <section className="p-4 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-2xl font-bold mb-2">Boss Module</h1>
      <p className="text-sm text-muted-foreground mb-4">
        AI-filled summary table for tender approval
      </p>
      <button className="px-3 py-2 bg-purple-600 text-white rounded">View Summary Table</button>
    </section>
  );
}
