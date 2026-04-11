import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie Capsule Modulare | Poze Interior Exterior | PI CAPS",
  description:
    "Galerie foto capsule modulare PI CAPS: exterior si interior Alpha 18m², Beta 28m², Gamma 38m². Imagini reale din productia noastra romaneasca.",
  keywords: [
    "galerie capsule modulare",
    "poze case modulare",
    "interior capsule modulare",
    "exterior capsule modulare",
    "PI CAPS galerie foto",
  ],
  openGraph: {
    title: "Galerie Capsule Modulare | Poze Interior Exterior — PI CAPS",
    description:
      "Galerie foto capsule modulare PI CAPS: exterior si interior Alpha 18m², Beta 28m², Gamma 38m².",
    url: "https://picaps.ro/galerie",
    images: [
      {
        url: "https://picaps.ro/p-gamma/exterior2-gamma.jpeg",
        width: 1200,
        height: 630,
        alt: "Galerie Capsule Modulare PI CAPS Romania",
      },
    ],
  },
  alternates: {
    canonical: "https://picaps.ro/galerie",
  },
};

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
