import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { WHATSAPP_URL, BUSINESS_TAGLINE } from "@/lib/site";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sand via-cream to-nude/50" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36 text-center">
          <p className="eyebrow">{BUSINESS_TAGLINE}</p>
          <h1 className="mt-4 text-4xl md:text-6xl leading-tight text-ink">
            Beleza que valoriza
            <br />
            <span className="text-rose-deep">a sua naturalidade</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg text-ink-soft">
            Micropigmentação e maquiagem permanente com técnica, segurança e um
            olhar atento a cada detalhe do seu rosto.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-rose-deep px-8 py-3 font-semibold text-cream hover:bg-rose transition-colors"
            >
              Agendar avaliação
            </a>
            <Link
              href="/servicos"
              className="rounded-full border border-ink/20 px-8 py-3 font-semibold text-ink hover:border-rose-deep hover:text-rose-deep transition-colors"
            >
              Ver serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços (resumo) */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="eyebrow">O que faço</p>
          <h2 className="mt-3 text-3xl md:text-4xl text-ink">Serviços</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="rounded-2xl bg-white/60 border border-nude/60 p-7 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <h3 className="text-lg text-ink leading-snug">{s.title}</h3>
              <p className="mt-3 text-sm text-ink-soft">{s.short}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/servicos"
            className="text-sm font-semibold text-rose-deep hover:underline"
          >
            Conhecer todos os serviços →
          </Link>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-white/50 border-y border-nude/60">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-10 md:grid-cols-3 text-center">
          {[
            {
              title: "Atendimento personalizado",
              text: "Cada procedimento é planejado de acordo com seus traços e expectativas.",
            },
            {
              title: "Higiene e segurança",
              text: "Materiais descartáveis e protocolos rigorosos em todas as etapas.",
            },
            {
              title: "Resultado natural",
              text: "Técnicas atuais para um acabamento elegante e duradouro.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm text-ink-soft">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
