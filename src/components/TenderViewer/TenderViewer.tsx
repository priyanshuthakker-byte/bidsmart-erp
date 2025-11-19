"use client";
import React from "react";

export default function TenderViewer(): JSX.Element {
  return (
    <section className="p-4 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-2xl font-bold mb-2">Tender Viewer</h1>
      <p className="text-sm text-muted-foreground mb-4">
        View uploaded tender PDFs with clause-aware intelligence
      </p>
      <button className="px-3 py-2 bg-indigo-600 text-white rounded">Open Tender PDF</button>
    </section>
  );
}
