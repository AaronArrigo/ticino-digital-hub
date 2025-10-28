"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add("show"));
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 -top-10 -z-10">
          {/* Mountains */}
          <div className="h-[420px] md:h-[520px]">
            <svg className="h-full w-full" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="alp-hero" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#e0f2fe"/>
                  <stop offset="100%" stopColor="#f8fafc"/>
                </linearGradient>
              </defs>
              <rect width="1440" height="600" fill="url(#alp-hero)"/>
              <path d="M0 420 L240 360 L420 410 L630 320 L820 380 L1030 330 L1210 370 L1440 340 L1440 600 L0 600 Z" fill="#e5e7eb"/>
              <path d="M0 450 L200 400 L380 450 L560 380 L740 430 L920 380 L1120 430 L1300 400 L1440 420 L1440 600 L0 600 Z" fill="#cbd5e1"/>
              <path d="M180 480 L320 300 L460 480 Z" fill="#94a3b8"/>
              <path d="M320 300 L360 360 L280 360 Z" fill="#ffffff"/>
              <path d="M520 480 L700 260 L880 480 Z" fill="#94a3b8"/>
              <path d="M700 260 L760 340 L640 340 Z" fill="#ffffff"/>
              <path d="M940 480 L1100 320 L1260 480 Z" fill="#94a3b8"/>
              <path d="M1100 320 L1140 360 L1060 360 Z" fill="#ffffff"/>
            </svg>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:grid-cols-2 lg:px-8">
          <div className="reveal">
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">Marketplace gestito • Ticino</span>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Alpander — costruiamo il tuo sito e software <span className="block">con team verificati</span>
            </h1>
            <p className="mt-4 text-neutral-700">Un unico referente, pagamenti sicuri a milestone, garanzia di consegna. Tu parli con noi, noi coordiniamo i team.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="rounded-xl bg-black px-4 py-2 text-white hover:scale-[1.02] transition">Inizia un progetto →</Link>
              <div className="text-sm">★ ★ ★ ★ ★ <span className="ml-1">4.9/5</span></div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-neutral-600">
              <span className="inline-flex items-center rounded-full border px-3 py-1">Contratto & escrow</span>
              <span className="inline-flex items-center rounded-full border px-3 py-1">QA interno</span>
              <span className="inline-flex items-center rounded-full border px-3 py-1">Trasferimento IP</span>
              <span className="inline-flex items-center rounded-full border px-3 py-1">Assistenza 30 giorni</span>
            </div>
          </div>

          <div className="reveal rounded-2xl border bg-white shadow-xl">
            <div className="border-b p-6">
              <div className="text-xl font-semibold">Stima rapida in 60 secondi</div>
              <p className="text-sm text-neutral-600">Raccontaci il progetto e ricevi un preventivo indicativo.</p>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:px-8 md:grid-cols-3">
          {[
            { t: "Contratti anti-disintermediazione", d: "Accordi chiari, escrow e garanzia: il cliente resta con la piattaforma, non col singolo." },
            { t: "SLA e consegne veloci", d: "Timeline e milestone definite, penali e ripianificazioni gestite da noi." },
            { t: "Talento locale e nearshore", d: "Network verificato in Ticino + partner esteri per rapporto qualità/prezzo." },
          ].map((x) => (
            <div key={x.t} className="reveal rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="text-lg font-semibold">{x.t}</div>
              <p className="mt-2 text-sm text-neutral-600">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl rounded-3xl border bg-white/80 p-10 text-center shadow-sm backdrop-blur">
          <h2 className="text-2xl font-semibold">Pronto a partire con Alpander?</h2>
          <p className="mt-2 text-neutral-700">Scrivici due righe: riceverai un preventivo indicativo e una timeline.</p>
          <div className="mt-6 flex justify-center">
            <Link href="/contact" className="rounded-xl bg-black px-6 py-3 text-white hover:scale-[1.02] transition">Contattaci</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function LeadForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", company: "", category: "Siti vetrina & eCommerce", budget: "", deadline: "", description: "", nda: false });
  const onChange = (e) => { const { name, value, type, checked } = e.target; setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value })); };
  const onSubmit = async (e) => { e.preventDefault(); /* await fetch('/api/lead', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form)}); */ setSubmitted(true); };
  return (
    <div className="p-6">
      {submitted ? (
        <div className="rounded-xl border p-6 text-center">
          <div className="text-lg font-semibold">Richiesta inviata ✅</div>
          <p className="mt-2 text-sm text-neutral-600">Ti contatteremo entro 24h lavorative.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-3">
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
              {["Siti vetrina & eCommerce","Web App & Portali","Branding & UX/UI","SEO & Growth"].map((c) => (
                <option key={c} value={c}>{c}</option>
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
          <button type="submit" className="h-10 rounded-md bg-black text-white hover:scale-[1.01] active:scale-[.99] transition">Ricevi stima</button>
        </form>
      )}
    </div>
  );
}