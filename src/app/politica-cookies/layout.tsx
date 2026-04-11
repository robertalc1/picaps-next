import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politica de Cookies",
    description: "Politica de cookies a PI CAPS — cum utilizăm cookie-urile pe site-ul nostru.",
    alternates: {
        canonical: "https://picaps.ro/politica-cookies",
    },
};

export default function PoliticaCookiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
