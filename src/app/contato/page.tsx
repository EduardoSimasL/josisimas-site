import type { Metadata } from "next";
import {
  WHATSAPP_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  CONTACT_EMAIL,
  ADDRESS,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato para agendar sua avaliação de micropigmentação e estética.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 pb-28 text-center">
      <p className="eyebrow">Contato</p>
      <h1 className="mt-3 text-4xl md:text-5xl text-ink">Vamos agendar?</h1>
      <p className="mt-5 text-ink-soft">
        O agendamento e o atendimento de dúvidas são feitos pelo WhatsApp e pelo
        Instagram. Será um prazer te atender!
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 text-left">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-nude/60 bg-white/60 p-6 hover:border-rose-deep transition-colors"
        >
          <p className="eyebrow">WhatsApp</p>
          <p className="mt-2 text-lg text-ink">Agendar conversa</p>
          <p className="mt-1 text-sm text-ink-soft">Resposta rápida no horário comercial.</p>
        </a>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-nude/60 bg-white/60 p-6 hover:border-rose-deep transition-colors"
        >
          <p className="eyebrow">Instagram</p>
          <p className="mt-2 text-lg text-ink">@{INSTAGRAM_HANDLE}</p>
          <p className="mt-1 text-sm text-ink-soft">Portfólio e novidades.</p>
        </a>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="rounded-2xl border border-nude/60 bg-white/60 p-6 hover:border-rose-deep transition-colors"
        >
          <p className="eyebrow">E-mail</p>
          <p className="mt-2 text-lg text-ink break-all">{CONTACT_EMAIL}</p>
        </a>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${ADDRESS.street}, ${ADDRESS.city} - ${ADDRESS.state}, ${ADDRESS.postalCode}`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-nude/60 bg-white/60 p-6 hover:border-rose-deep transition-colors"
        >
          <p className="eyebrow">Atendimento</p>
          <p className="mt-2 text-lg text-ink">{ADDRESS.street}</p>
          <p className="mt-1 text-sm text-ink-soft">
            {ADDRESS.city} — {ADDRESS.state}, {ADDRESS.postalCode}
          </p>
          <p className="mt-1 text-sm text-ink-soft">Com hora marcada · ver no mapa</p>
        </a>
      </div>
    </section>
  );
}
