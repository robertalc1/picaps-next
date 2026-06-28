import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modele Capsule Modulare | Alpha 18m² Beta 28m² Gamma 38m² | PI CAPS",
  description:
    "Alege capsula modulară potrivită: Alpha 18m², Beta 28m², Gamma 38m². Livrare 100 zile, fără autorizație în majoritatea cazurilor.",
  keywords: [
    "capsule modulare modele",
    "alpha 18m2",
    "beta 28m2",
    "gamma 38m2",
    "case modulare pret",
    "capsule locuibile romania",
  ],
  openGraph: {
    title: "Modele Capsule Modulare | Alpha Beta Gamma — PI CAPS",
    description:
      "Capsule modulare Alpha 18m², Beta 28m², Gamma 38m². Case modulare premium la cheie. Livrare 100 zile.",
    url: "https://picaps.ro/modele",
    images: [
      {
        url: "https://picaps.ro/p-gamma/exterior2-gamma.jpeg",
        width: 1200,
        height: 630,
        alt: "Modele Capsule Modulare PI CAPS Romania",
      },
    ],
  },
  alternates: {
    canonical: "https://picaps.ro/modele",
  },
};

export default function ModeleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
