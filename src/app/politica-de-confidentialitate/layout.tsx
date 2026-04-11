import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Confidentialitate | PI CAPS",
  description:
    "Politica de confidentialitate PI CAPS — cum protejam datele tale personale.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://picaps.ro/politica-de-confidentialitate",
  },
};

export default function PoliticaConfidentialitateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
