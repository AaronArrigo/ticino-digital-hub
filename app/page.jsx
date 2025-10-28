"use client";

import React, { useState } from "react";

// Single-file, pure JavaScript + Tailwind version (no TypeScript, no external UI libs)
// Save this file as: app/page.jsx (Next.js App Router)
// If your project was created in TypeScript, it's fine to have a .jsx page.

const categories = [
  { title: "Siti vetrina & eCommerce", lead: "da 1'900 CHF", notes: ["WordPress / WooCommerce", "Shopify", "Headless"] },
  { title: "Web App & Portali", lead: "da 6'500 CHF", notes: ["React / Next.js", "Node / Python", "API & integrazioni"] },
  { title: "Branding & UX/UI", lead: "da 1'200 CHF", notes: ["Design system", "Prototipi Figma", "User testing"] },
  { title: "SEO & Growth", lead: "su preventivo", notes: ["SEO tecnico", "Local SEO", "Ads & Analytics"] },
];

const faqs = [
  {
    q: "Perché non posso lavorare direttamente con il programmatore?",
    a: "Per tutelare qualità, tempi e budget. Gestiamo contratto, escrow, QA, e garanzia post-lancio: così eviti sorprese e ritardi.",
  },
  {
    q: "Qual è la vostra commissione?",
    a: "Tipicamente 15–25% a seconda della complessità, copre PM, QA, garanzia, e strumenti di collaborazione.",
  },
  {
    q: "Come funzionano i pagamenti?",
    a: "Dividiamo il progetto in milestone. I fondi vengono rilasciati solo a test superati e accettazione.",
  },
  {
    q: "Chi possiede il codice?",
    a: "Il cliente alla consegna finale e saldo. Clausa di trasferimento IP inclusa nel contratto.",
  },
];

function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
  );
}

function Pill({ children }) {
  return <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">{children}</span>;
}

export default function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: categories[0].title,
    budget: "",
    deadline: "",
    description: "",
    nda: false,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with your API/webhook (e.g., /api/lead)
    // await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-black antialiased">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <Section className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-black" />
            <span className="text-lg font-semibold">Ticino Digital Hub</span>
          </div>
          <nav className="hidden gap-6 md:flex text-sm">
            <a href="#come-funziona">Come funziona</a>
            <a href="#servizi">Servizi</a>
            <a href="#pricing">Prezzi</a>
            <a href="#contatti">Contatti</a>
          </nav>
          <a href="#preventivo" className="hidden md:inline-flex rounded-xl bg-black px-4 py-2 text-white">Richiedi preventivo</a>
        </Section>
      </header>

      {/* Hero */}
      <Section className="py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Pill>Marketplace gestito • Ticino</Pill>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Costruiamo il tuo sito o software <span className="block">con team verificati</span>
            </h1>
            <p className="mt-4 text-neutral-600">
              Un unico referente, pagamenti sicuri a milestone, garanzia di consegna. Niente corse dietro ai freelancer.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#preventivo" className="rounded-xl bg-black px-4 py-2 text-white">Inizia un progetto →</a>
              <div className="text-sm">★ ★ ★ ★ ★ <span className="ml-1">4.9/5</span></div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-600">
              <Pill>Contratto & escrow</Pill>
              <Pill>QA interno</Pill>
              <Pill>Trasferimento IP</Pill>
              <Pill>Assistenza 30 giorni</Pill>
            </div>
          </div>

          <div className="rounded-2xl border bg-white shadow-lg">
            <div className="border-b p-6">
              <div className="text-xl font-semibold">Stima rapida in 60 secondi</div>
              <p className="text-sm text-neutral-600">Raccontaci il progetto e ricevi un preventivo indicativo.</p>
            </div>
            <div className="p-6">
              {submitted ? (
                <div className="rounded-xl border p-6 text-center">
                  <div className="text-lg font-semibold">Richiesta inviata ✅</div>
                  <p className="mt-2 text-sm text-neutral-600">Ti contatteremo entro 24h lavorative.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-3">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input name="name" placeholder="Nome e cognome" required value={form.name} onChange={onChange} className="h-10 rounded-md border px-3 text-sm" />
                    <input name="email" type="email" placeholder="Email" required value={form.email} onChange={onChange} className="h-10 rounded-md border px-3 text-sm" />
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <input name="phone" placeholder="Telefono" value={form.phone} onChange={onChange} className="h-10 rounded-md border px-3 text-sm" />
                    <input name="company" placeholder="Azienda (opzionale)" value={form.company} onChange={onChange} className="h-10 rounded-md border px-3 text-sm" />
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <select name="category" value={form.category} onChange={onChange} className="h-10 rounded-md border px-3 text-sm">
                      {categories.map((c) => (
                        <option key={c.title} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                    <input name="budget" placeholder="Budget indicativo (CHF)" value={form.budget} onChange={onChange} className="h-10 rounded-md border px-3 text-sm" />
                  </div>
                  <input name="deadline" placeholder="Deadline (es. 8 settimane)" value={form.deadline} onChange={onChange} className="h-10 rounded-md border px-3 text-sm" />
                  <textarea name="description" placeholder="Descrivi in breve obiettivi, funzioni e riferimenti" value={form.description} onChange={onChange} className="min-h-[96px] rounded-md border px-3 py-2 text-sm" />
                  <label className="flex items-center gap-2 text-sm select-none">
                    <input type="checkbox" name="nda" checked={form.nda} onChange={onChange} />
                    Firma NDA prima del brief
                  </label>
                  <button type="submit" className="h-10 rounded-md bg-black text-white">Ricevi stima</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Come funziona */}
      <Section id="come-funziona" className="py-16">
        <h2 className="text-3xl font-bold">Come funziona</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[{ step: 1, title: "Brief guidato", text: "Allineiamo obiettivi, budget e scadenze. Se serve firmiamo un NDA." }, { step: 2, title: "Match e preventivo", text: "Selezioniamo il team più adatto e definiamo milestone con criteri di accettazione." }, { step: 3, title: "Delivery garantita", text: "Pagamenti in escrow, QA interno e assistenza post-lancio." }].map((s) => (
            <div key={s.step} className="rounded-2xl border bg-white p-6">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border text-sm">{s.step}</span>
                {s.title}
              </div>
              <p className="mt-2 text-sm text-neutral-600">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Servizi */}
      <Section id="servizi" className="py-16">
        <h2 className="text-3xl font-bold">Servizi</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.title} className="rounded-2xl border bg-white p-6">
              <div className="text-lg font-semibold">{c.title}</div>
              <p className="text-sm text-neutral-600">Progetti curati da PM e QA interni.</p>
              <ul className="mt-4 space-y-2 text-sm">
                {c.notes.map((n) => (
                  <li key={n} className="flex gap-2">• {n}</li>
                ))}
              </ul>
              <div className="mt-4 text-sm font-medium">{c.lead}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Perché noi */}
      <Section className="py-16">
        <div className="grid gap-6 lg:grid-cols-4">
          {[{ title: "Contratti anti-disintermediazione", text: "Accordi chiari, escrow e garanzia: il cliente resta con la piattaforma, non con il singolo programmatore." }, { title: "SLA e consegne veloci", text: "Timeline e milestone definite, con penali e ripianificazioni gestite da noi." }, { title: "Pagamenti a milestone", text: "Fondi custoditi e rilasciati solo a test superati e accettazione del cliente." }, { title: "Talento locale e nearshore", text: "Network verificato in Ticino + partner esteri per ottimo rapporto qualità/prezzo." }].map((f) => (
            <div key={f.title} className="rounded-2xl border bg-white p-6">
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-sm text-neutral-600">{f.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="py-16">
        <h2 className="text-3xl font-bold">Prezzi trasparenti</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[{ name: "Start", price: "15%", desc: "Per progetti semplici (< CHF 5'000)", points: ["PM leggero", "QA standard", "Garanzia 15 giorni"] }, { name: "Pro", price: "20%", desc: "Per progetti medi (CHF 5'000–25'000)", points: ["PM dedicato", "QA avanzato", "Garanzia 30 giorni"] }, { name: "Enterprise", price: "25%", desc: "Progetti complessi (> CHF 25'000)", points: ["SLA contrattuale", "Security review", "Garanzia 60 giorni"] }].map((p) => (
            <div key={p.name} className="rounded-2xl border bg-white p-6">
              <div className="text-sm text-neutral-600">Piano</div>
              <div className="text-2xl font-semibold">{p.name}</div>
              <div className="text-neutral-600">{p.desc}</div>
              <div className="mt-4 text-4xl font-bold">{p.price}<span className="text-lg font-normal"> di fee</span></div>
              <ul className="mt-4 space-y-2 text-sm">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">• {pt}</li>
                ))}
              </ul>
              <a href="#preventivo" className="mt-6 block rounded-md bg-black px-4 py-2 text-center text-white">Seleziona</a>
            </div>
          ))}
        </div>
      </Section>

      {/* Preventivo */}
      <Section id="preventivo" className="py-16">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Parliamo del tuo progetto</h2>
            <p className="mt-2 text-neutral-600">
              Al termine del brief riceverai uno scope con milestone, criteri di accettazione e un'offerta vincolata per 15 giorni.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {["Clausola di non-circumvention 12 mesi", "Trasferimento IP al saldo", "Pagamenti in escrow a milestone", "Reportistica settimanale e demo recording"].map((t) => (
                <li key={t} className="flex gap-2">• {t}</li>
              ))}
            </ul>
          </div>

          <div id="contatti" className="rounded-2xl border bg-white">
            <div className="border-b p-6">
              <div className="text-xl font-semibold">Contattaci</div>
              <div className="text-sm text-neutral-600">Preferisci email? info@ticinodigitalhub.ch</div>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="grid gap-3">
                <input name="name" placeholder="Nome e cognome" required value={form.name} onChange={onChange} className="h-10 rounded-md border px-3 text-sm" />
                <input name="email" type="email" placeholder="Email" required value={form.email} onChange={onChange} className="h-10 rounded-md border px-3 text-sm" />
                <input name="phone" placeholder="Telefono" value={form.phone} onChange={onChange} className="h-10 rounded-md border px-3 text-sm" />
                <textarea name="description" placeholder="Raccontaci l'idea in 3–5 righe" value={form.description} onChange={onChange} className="min-h-[96px] rounded-md border px-3 py-2 text-sm" />
                <button type="submit" className="h-10 rounded-md bg-black text-white">Invia</button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-16">
        <h2 className="text-3xl font-bold">Domande frequenti</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border bg-white p-6">
              <div className="text-lg font-semibold">{f.q}</div>
              <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t py-10">
        <Section>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-xl bg-black" />
                <span className="font-semibold">Ticino Digital Hub</span>
              </div>
              <p className="mt-2 text-sm text-neutral-600">Corso Elvezia 00, 6900 Lugano • CHE-000.000.000 IVA</p>
            </div>
            <div className="text-sm">
              <div className="font-medium">Legale</div>
              <ul className="mt-2 space-y-1">
                <li><a href="#" className="underline">Termini di servizio</a></li>
                <li><a href="#" className="underline">Privacy & LPD</a></li>
                <li><a href="#" className="underline">Cookie</a></li>
              </ul>
            </div>
            <div className="text-sm">
              <div className="font-medium">Contatti</div>
              <ul className="mt-2 space-y-1">
                <li>Email: info@ticinodigitalhub.ch</li>
                <li>Tel: +41 00 000 00 00</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-xs text-neutral-600">© {new Date().getFullYear()} Ticino Digital Hub. All rights reserved.</div>
        </Section>
      </footer>
    </div>
  );
}
