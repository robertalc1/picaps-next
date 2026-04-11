import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intrebari Frecvente Capsule Modulare | PI CAPS",
  description:
    "Tot ce trebuie sa stii despre capsulele modulare PI CAPS: autorizatii, costuri, livrare, garantie, montaj. Raspunsuri complete si transparente.",
  keywords: [
    "intrebari capsule modulare",
    "faq case modulare",
    "autorizatie capsule",
    "livrare capsule modulare",
    "garantie capsule modulare",
  ],
  openGraph: {
    title: "Intrebari Frecvente Capsule Modulare — PI CAPS",
    description:
      "Raspunsuri la intrebarile frecvente despre capsulele modulare PI CAPS: autorizatii, costuri, livrare, garantie.",
    url: "https://picaps.ro/faq",
    images: [
      {
        url: "https://picaps.ro/p-gamma/exterior2-gamma.jpeg",
        width: 1200,
        height: 630,
        alt: "PI CAPS Capsule Modulare FAQ Romania",
      },
    ],
  },
  alternates: {
    canonical: "https://picaps.ro/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
