import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact PI CAPS | Solicita Oferta Capsule Modulare",
  description:
    "Solicita oferta personalizata pentru capsule modulare PI CAPS. Tel: +40 727 511 563. Email: contact@picaps.ro. Raspundem in 24h.",
  keywords: [
    "contact capsule modulare",
    "oferta capsule modulare",
    "PI CAPS contact",
    "solicita oferta casa modulara",
  ],
  openGraph: {
    title: "Contact PI CAPS | Solicita Oferta Capsule Modulare",
    description:
      "Solicita oferta personalizata pentru capsule modulare PI CAPS. Tel: +40 727 511 563. Raspundem in 24h.",
    url: "https://picaps.ro/contact",
    images: [
      {
        url: "https://picaps.ro/p-gamma/exterior2-gamma.jpeg",
        width: 1200,
        height: 630,
        alt: "PI CAPS Contact Capsule Modulare Romania",
      },
    ],
  },
  alternates: {
    canonical: "https://picaps.ro/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
