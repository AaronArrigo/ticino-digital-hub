"use client";
import React from "react";
import Link from "next/link";
import "../globals.css"; // assicurati che esista (può essere anche vuoto)

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-2xl bg-black" />
          <span className="text-lg font-semibold">Alpander</span>
        </Link>
        <nav className="hidden gap-6 md:flex text-sm">
          <Link href="/services">Servizi</Link>
          <Link href="/pricing">Prezzi</Link>
          <Link href="/contact">Contatti</Link>
        </nav>
        <Link href="/contact" className="hidden md:inline-flex rounded-xl bg-black px-4 py-2 text-white hover:scale-[1.02] transition">
          Richiedi preventivo
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t py-10 bg-white/90">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-xl bg-black" />
            <span className="font-semibold">Alpander</span>
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
            <li>Email: info@alpander.ch</li>
            <li>Tel: +41 00 000 00 00</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-4 text-xs text-neutral-600">© {new Date().getFullYear()} Alpander. All rights reserved.</div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head />
      <body className="min-h-screen bg-white text-black antialiased">
        {/* background animato leggero */}
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-60" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_30%_10%,#dbeafe,transparent),radial-gradient(900px_500px_at_80%_0%,#fde68a,transparent),radial-gradient(900px_600px_at_60%_60%,#f3e8ff,transparent)] animate-[pulse_12s_ease-in-out_infinite]" />
        </div>
        <style>{`
          @keyframes pulse { 0%,100%{opacity:.55; transform:translateY(0)} 50%{opacity:.85; transform:translateY(-6px)} }
          .reveal { opacity: 0; transform: translateY(8px); transition: opacity .6s ease, transform .6s ease; }
          .reveal.show { opacity: 1; transform: translateY(0); }
        `}</style>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
