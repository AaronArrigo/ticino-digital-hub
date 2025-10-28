"use client";
import React from "react";

const plans = [
  { name: "Start", price: "15%", desc: "Progetti semplici (< CHF 5'000)", points: ["PM leggero", "QA standard", "Garanzia 15 giorni"] },
  { name: "Pro", price: "20%", desc: "Progetti medi (CHF 5'000–25'000)", points: ["PM dedicato", "QA avanzato", "Garanzia 30 giorni"] },
  { name: "Enterprise", price: "25%", desc: "Progetti complessi (> CHF 25'000)", points: ["SLA contrattuale", "Security review", "Garanzia 60 giorni"] },
];

export default function PricingPage() {
  return (
    <main className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Prezzi trasparenti</h1>
        <p className="mt-2 text-neutral-700">Fee applicata sul valore del progetto. Copre PM, QA, garanzia e strumenti di collaborazione.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="text-sm text-neutral-600">Piano</div>
              <div className="text-2xl font-semibold">{p.name}</div>
              <div className="text-neutral-600">{p.desc}</div>
              <div className="mt-4 text-4xl font-bold">{p.price}<span className="text-lg font-normal"> di fee</span></div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">• {pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}