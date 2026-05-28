"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, BUSINESS_NAME, WHATSAPP_URL } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-nude/60">
      <nav className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {BUSINESS_NAME}
          <span className="text-rose-deep">.</span>
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-ink-soft hover:text-rose-deep transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-rose-deep px-5 py-2 text-sm font-semibold text-cream hover:bg-rose transition-colors"
            >
              Agendar
            </a>
          </li>
        </ul>

        {/* Botão mobile */}
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="block h-0.5 w-6 bg-ink" />
        </button>
      </nav>

      {/* Menu mobile */}
      {open && (
        <ul className="md:hidden border-t border-nude/60 bg-cream px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-ink-soft hover:text-rose-deep"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full justify-center rounded-full bg-rose-deep px-5 py-3 text-sm font-semibold text-cream"
            >
              Agendar pelo WhatsApp
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
