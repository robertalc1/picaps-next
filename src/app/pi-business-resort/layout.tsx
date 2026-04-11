import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pi Business Resort | Investitie Capsule Modulare Turism Romania",
  description:
    "Investeste in capsule modulare pentru turism, glamping si hospitality. Program finantare 50/50. ROI rapid. Minim 4 unitati. PI CAPS Business Resort Romania.",
  keywords: [
    "capsule modulare turism",
    "glamping capsule",
    "investitie capsule modulare",
    "business resort capsule",
    "finantare capsule modulare",
    "capsule hospitality",
  ],
  openGraph: {
    title: "Pi Business Resort | Investitie Capsule Modulare Turism Romania",
    description:
      "Investeste in capsule modulare pentru turism si glamping. Finantare 50/50. ROI rapid. Minim 4 unitati.",
    url: "https://picaps.ro/pi-business-resort",
    images: [
      {
        url: "https://picaps.ro/p-gamma/exterior2-gamma.jpeg",
        width: 1200,
        height: 630,
        alt: "PI CAPS Business Resort Capsule Modulare Turism Romania",
      },
    ],
  },
  alternates: {
    canonical: "https://picaps.ro/pi-business-resort",
  },
};

export default function PiBusinessResortLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
