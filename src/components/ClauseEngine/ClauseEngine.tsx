"use client";
import React from "react";
import ClauseLogic from "./ClauseLogic";

export default function ClauseEngine(): JSX.Element {
  return (
    <section className='p-4 bg-white dark:bg-gray-900 rounded shadow'>
      <h1 className='text-2xl font-bold mb-2'>Clause Engine</h1>
      <p className='text-sm text-muted-foreground mb-4'>
        Map clauses, override learning, and generate pre-bid questions
      </p>
      <ClauseLogic />
    </section>
  );
}
