import Link from "next/link";
import {
  NAV_LINKS,
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  WHATSAPP_URL,
  CONTACT_EMAIL,
} from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-cream">{BUSINESS_NAME}</p>
          <p className="mt-2 text-sm text-cream/60">{BUSINESS_TAGLINE}</p>
        </div>

        <div>
          <p className="eyebrow !text-gold">Navegação</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-cream transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-gold">Contato</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream transition-colors"
              >
                Instagram @{INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream transition-colors"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-cream transition-colors">
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-xs text-cream/50">
          © {year} {BUSINESS_NAME}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
