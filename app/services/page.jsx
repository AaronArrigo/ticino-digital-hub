"use client";
import React from "react";

const categories = [
  { title: "Siti vetrina & eCommerce", lead: "da 1'900 CHF", notes: ["WordPress / WooCommerce", "Shopify", "Headless"] },
  { title: "Web App & Portali", lead: "da 6'500 CHF", notes: ["React / Next.js", "Node / Python", "API & integrazioni"] },
  { title: "Branding & UX/UI", lead: "da 1'200 CHF", notes: ["Design system", "Prototipi Figma", "User testing"] },
  { title: "SEO & Growth", lead: "su preventivo", notes: ["SEO tecnico", "Local SEO", "Ads & Analytics"] },
];

export default function ServicesPage() {
  return (
    <main className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Servizi</h1>
        <p className="mt-2 text-neutral-700">Selezioniamo e gestiamo i team più adatti per il tuo progetto, con QA e PM interni.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="group rounded-2xl border bg-white p-6 shadow-sm ring-1 ring-transparent transition hover:shadow-md hover:ring-black/10">
              <div className="text-lg font-semibold">{c.title}</div>
              <p className="text-sm text-neutral-600">Progetti curati e garantiti.</p>
              <ul className="mt-4 space-y-2 text-sm">
                {c.notes.map((n) => (
                  <li key={n} className="flex gap-2">• {n}</li>
                ))}
              </ul>
              <div className="mt-4 text-sm font-medium">{c.lead}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}