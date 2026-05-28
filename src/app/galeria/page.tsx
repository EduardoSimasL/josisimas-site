import type { Metadata } from "next";
import {
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_POSTS,
  BUSINESS_NAME,
} from "@/lib/site";
import InstagramFeed from "@/components/InstagramFeed";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Galeria de trabalhos",
  description: `Veja trabalhos de micropigmentação e estética de ${BUSINESS_NAME}.`,
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  const hasPosts = INSTAGRAM_POSTS.length > 0;

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12 text-center">
        <p className="eyebrow">Portfólio</p>
        <h1 className="mt-3 text-4xl md:text-5xl text-ink">Galeria de trabalhos</h1>
        <p className="mt-5 max-w-2xl mx-auto text-ink-soft">
          Trabalhos reais direto do Instagram. Para ver o portfólio completo e
          atualizado, acompanhe o{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-rose-deep hover:underline"
          >
            @{INSTAGRAM_HANDLE}
          </a>
          .
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        {hasPosts ? (
          <InstagramFeed posts={INSTAGRAM_POSTS} />
        ) : (
          // Fallback enquanto não há posts configurados em INSTAGRAM_POSTS.
          <div className="rounded-2xl border border-nude/60 bg-white/60 p-10 text-center">
            <p className="text-ink">
              Em breve, uma seleção dos melhores trabalhos aqui.
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Enquanto isso, veja tudo no Instagram:
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full bg-rose-deep px-8 py-3 font-semibold text-cream hover:bg-rose transition-colors"
            >
              Ver no @{INSTAGRAM_HANDLE}
            </a>
          </div>
        )}
      </section>

      <CTA />
    </>
  );
}
