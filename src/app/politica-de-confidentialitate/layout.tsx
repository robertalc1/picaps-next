import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politica de Confidențialitate",
    description: "Politica de confidențialitate PI CAPS — cum protejăm datele tale personale.",
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
