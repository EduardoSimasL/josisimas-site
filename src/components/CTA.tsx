import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/site";

export default function CTA() {
  return (
    <section className="bg-nude/40">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="eyebrow">Vamos conversar</p>
        <h2 className="mt-3 text-3xl md:text-4xl text-ink">
          Pronta para realçar a sua beleza natural?
        </h2>
        <p className="mt-4 text-ink-soft max-w-xl mx-auto">
          Agende uma avaliação e tire suas dúvidas. Atendimento personalizado,
          do primeiro contato ao acompanhamento pós-procedimento.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-rose-deep px-8 py-3 font-semibold text-cream hover:bg-rose transition-colors"
          >
            Agendar pelo WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-rose-deep px-8 py-3 font-semibold text-rose-deep hover:bg-rose-deep hover:text-cream transition-colors"
          >
            @{INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </section>
  );
}
