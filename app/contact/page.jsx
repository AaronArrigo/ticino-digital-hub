"use client";
import React from "react";

export default function ContactPage() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const onChange = (e) => { const { name, value } = e.target; setForm((f) => ({ ...f, [name]: value })); };
  const onSubmit = async (e) => { e.preventDefault(); /* await fetch('/api/contact', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)}); */ setSent(true); };

  return (
    <main className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Contattaci</h1>
        <p className="mt-2 text-neutral-700">Scrivici due righe sul progetto. Ti risponderemo entro 24h lavorative.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <form onSubmit={onSubmit} className="grid gap-3">
              <input name="name" placeholder="Nome e cognome" required value={form.name} onChange={onChange} className="h-10 rounded-md border px-3 text-sm" />
              <input name="email" type="email" placeholder="Email" required value={form.email} onChange={onChange} className="h-10 rounded-md border px-3 text-sm" />
              <textarea name="message" placeholder="Messaggio" value={form.message} onChange={onChange} className="min-h-[140px] rounded-md border px-3 py-2 text-sm" />
              <button className="h-10 rounded-md bg-black text-white hover:scale-[1.01] transition">Invia</button>
            </form>
            {sent && <p className="mt-3 text-sm text-green-600">Messaggio inviato ✅</p>}
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-sm text-neutral-600">Oppure scrivici:</div>
            <div className="mt-2 text-lg font-semibold">info@alpander.ch</div>
            <div className="mt-4 text-sm text-neutral-600">Corso Elvezia 00, 6900 Lugano</div>
          </div>
        </div>
      </div>
    </main>
  );
}