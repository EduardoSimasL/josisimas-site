import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import {
  SITE_URL,
  BUSINESS_NAME,
  BUSINESS_TAGLINE,
  BUSINESS_DESCRIPTION,
  INSTAGRAM_URL,
  CITY,
  STATE,
  ADDRESS,
  GEO,
  PHONE,
  MAPS_URL,
} from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} | ${BUSINESS_TAGLINE}`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: BUSINESS_DESCRIPTION,
  keywords: [
    "micropigmentação",
    "PMU",
    "estética",
    "sobrancelhas",
    "micropigmentação labial",
    "designer de sobrancelhas",
    "micropigmentação de sobrancelhas",
    "tratamentos faciais",
    "rejuvenescimento facial",
    "tratamento de acne",
    "tratamento de manchas",
    `micropigmentação ${CITY}`,
    `PMU ${CITY}`,
    `estética ${CITY}`,
    BUSINESS_NAME,
  ],
  authors: [{ name: BUSINESS_NAME }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | ${BUSINESS_TAGLINE}`,
    description: BUSINESS_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} | ${BUSINESS_TAGLINE}`,
    description: BUSINESS_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD (Schema.org) — ajuda o Google a entender que é um negócio local de estética.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: BUSINESS_NAME,
  description: BUSINESS_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: PHONE,
  sameAs: [INSTAGRAM_URL, MAPS_URL],
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: CITY,
    addressRegion: STATE,
    postalCode: ADDRESS.postalCode,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  hasMap: MAPS_URL,
  areaServed: CITY,
  knowsAbout: [
    "Micropigmentação de sobrancelhas",
    "Micropigmentação labial",
    "Micropigmentação de pálpebras",
    "Tratamentos faciais",
    "Rejuvenescimento facial",
    "Tratamento de acne",
    "Tratamento de manchas",
    "Estética",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
