import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Micropigmentação de sobrancelhas, lábios, delineado e lash line. " +
    "Conheça os serviços de micropigmentação e estética da Josi Simas.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
        <p className="eyebrow">Serviços</p>
        <h1 className="mt-3 text-4xl md:text-5xl text-ink">
          Micropigmentação & Estética
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-ink-soft">
          Técnicas modernas de micropigmentação, sempre pensadas para realçar a
          sua beleza de forma natural e segura.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="rounded-2xl bg-white/60 border border-nude/60 p-8"
            >
              <h2 className="text-2xl text-ink leading-snug">{s.title}</h2>
              <p className="mt-4 text-ink-soft">{s.description}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
