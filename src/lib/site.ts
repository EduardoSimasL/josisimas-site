/**
 * Configuração central do site. Edite aqui os dados de contato, redes e domínio
 * — todas as páginas, o SEO e o JSON-LD leem destas constantes.
 */

// Domínio real (sem barra no final). Coerente com a regra de www do .htaccess.
export const SITE_URL = "https://www.josisimas.com.br";

export const BUSINESS_NAME = "Josi Simas";
export const BUSINESS_TAGLINE = "Micropigmentação & Estética";
export const BUSINESS_DESCRIPTION =
  "Josi Simas — especialista em micropigmentação e estética. " +
  "Sobrancelhas, lábios e olhos com técnica, naturalidade e acabamento premium.";

// Redes sociais
export const INSTAGRAM_HANDLE = "josisimaspmu";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

// Posts do Instagram exibidos na galeria (embed oficial, ao vivo).
// Cole aqui os links dos posts: abra o post → "..." → "Copiar link".
// Ex: "https://www.instagram.com/p/Cxxxxxxxxxx/"
export const INSTAGRAM_POSTS: string[] = [
  // adicione os links dos posts aqui
];

// Contato
// ⚠️ Confira o WhatsApp: celulares no Brasil têm 9 dígitos após o DDD (9XXXX-XXXX).
// O número informado tinha 8 dígitos (41 9634-3187) — pode estar faltando um dígito.
export const WHATSAPP_NUMBER = "554196343187"; // formato internacional, só números
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const CONTACT_EMAIL = "josi@josisimas.com.br";
export const CITY = "Curitiba";
export const STATE = "PR";

// Endereço (usado no rodapé, contato e JSON-LD para SEO local)
export const ADDRESS = {
  street: "R. Brig. Franco, 2895 — Água Verde",
  city: "Curitiba",
  state: "PR",
  postalCode: "80220-100",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/galeria", label: "Galeria" },
  { href: "/contato", label: "Contato" },
] as const;
