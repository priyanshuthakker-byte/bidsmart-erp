"use client";
import React from "react";
import InvoiceGenerator from "@/components/InvoiceGenerator/InvoiceGenerator";

export default function InvoiceGeneratorPage(): JSX.Element {
  return (
    <main className='p-6'>
      <InvoiceGenerator />
    </main>
  );
}
