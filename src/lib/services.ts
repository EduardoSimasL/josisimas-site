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
    slug: "palpebras",
    title: "Micropigmentação de Pálpebras",
    short: "Olhar marcante e definido, sem depender de maquiagem.",
    description:
      "Micropigmentação das pálpebras com efeito de delineado discreto ou " +
      "marcante, valorizando o olhar e facilitando a rotina, com total segurança.",
  },
  {
    slug: "tratamentos-faciais",
    title: "Tratamentos Faciais",
    short: "Rejuvenescimento, acne e manchas para uma pele renovada.",
    description:
      "Procedimentos estéticos faciais voltados ao rejuvenescimento, ao " +
      "controle da acne e à uniformização de manchas, devolvendo viço e " +
      "saúde à pele.",
  },
];
