"use client";
import React from "react";

export default function WorkOrders(): JSX.Element {
  return (
    <section className='p-4 bg-white dark:bg-gray-900 rounded shadow'>
      <h1 className='text-2xl font-bold mb-2'>WorkOrders</h1>
      <p className='text-sm text-muted-foreground mb-4'>
        Strategic cockpit module: Search Work Orders
      </p>
      <button className='px-3 py-2 bg-orange-600 text-white rounded'>Search Work Orders</button>
    </section>
  );
}
