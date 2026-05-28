import type { Metadata } from "next";
import { BUSINESS_NAME } from "@/lib/site";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça ${BUSINESS_NAME}, especialista em micropigmentação e estética.`,
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-12 text-center">
        <p className="eyebrow">Sobre</p>
        <h1 className="mt-3 text-4xl md:text-5xl text-ink">{BUSINESS_NAME}</h1>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 space-y-6 text-lg leading-relaxed text-ink-soft">
        <p>
          Apaixonada por realçar a beleza única de cada pessoa, {BUSINESS_NAME}{" "}
          dedica-se à micropigmentação e à estética com foco em naturalidade,
          harmonia e segurança.
        </p>
        <p>
          {/* TODO: substituir pelo texto/biografia real da Josi */}
          Com formação especializada e constante atualização nas técnicas mais
          atuais de micropigmentação, oferece um atendimento atencioso do primeiro contato ao
          acompanhamento pós-procedimento, sempre priorizando higiene e
          resultados duradouros.
        </p>
        <p>
          O objetivo é simples: que você se sinta mais confiante e bonita todos
          os dias, com menos tempo em frente ao espelho e mais praticidade na
          rotina.
        </p>
      </section>

      <CTA />
    </>
  );
}
