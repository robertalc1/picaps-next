import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre PI CAPS | Producator Capsule Modulare Romania",
  description:
    "PI CAPS - producator roman de capsule modulare premium. Fabrica proprie, control calitate total, livrare 100 zile, garantie 2 ani. Capsule modulare la cheie.",
  keywords: [
    "producator capsule modulare",
    "PI CAPS Romania",
    "fabrica capsule modulare",
    "capsule modulare la cheie",
  ],
  openGraph: {
    title: "Despre PI CAPS | Producator Capsule Modulare Romania",
    description:
      "PI CAPS - producator roman de capsule modulare premium. Fabrica proprie, livrare 100 zile, garantie 2 ani.",
    url: "https://picaps.ro/despre",
    images: [
      {
        url: "https://picaps.ro/p-gamma/exterior2-gamma.jpeg",
        width: 1200,
        height: 630,
        alt: "PI CAPS Producator Capsule Modulare Romania",
      },
    ],
  },
  alternates: {
    canonical: "https://picaps.ro/despre",
  },
};

export default function DespreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
