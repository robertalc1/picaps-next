import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni si Conditii | PI CAPS",
  description:
    "Termenii si conditiile de utilizare a serviciilor PI CAPS pentru capsule modulare.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://picaps.ro/termeni",
  },
};

export default function TermeniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
