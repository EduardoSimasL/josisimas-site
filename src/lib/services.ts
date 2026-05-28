/** Serviços oferecidos — reutilizados na home e na página de Serviços. */
export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    slug: "sobrancelhas",
    title: "Micropigmentação de Sobrancelhas",
    short: "Fios realistas ou efeito esfumado, sob medida pro seu rosto.",
    description:
      "Desenho personalizado respeitando a harmonia do rosto. Técnicas fio a fio, " +
      "shadow e combinadas para um resultado natural e duradouro.",
  },
  {
    slug: "labial",
    title: "Micropigmentação Labial",
    short: "Cor, contorno e viço para lábios mais definidos.",
    description:
      "Realça o tom natural dos lábios, corrige assimetrias e devolve definição " +
      "ao contorno, com aparência leve e elegante.",
  },
  {
    slug: "olhos",
    title: "Delineado / Olhos",
    short: "Olhar marcante sem depender da maquiagem do dia a dia.",
    description:
      "Delineado discreto ou marcante, pensado para valorizar o olhar e " +
      "facilitar a rotina, com total segurança.",
  },
  {
    slug: "lash-line",
    title: "Lash Line & Detalhes",
    short: "Preenchimento da linha dos cílios para um olhar mais denso.",
    description:
      "Técnica delicada que adensa visualmente a base dos cílios, criando " +
      "profundidade ao olhar de forma natural.",
  },
];
