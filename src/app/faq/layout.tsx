import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Întrebări Frecvente",
    description:
        "Răspunsuri la cele mai frecvente întrebări despre capsulele modulare PI CAPS: autorizații, montaj, garanție, plată și specificații tehnice.",
    openGraph: {
        title: "FAQ — PI CAPS",
        description:
            "Răspunsuri la întrebări frecvente despre capsulele modulare PI CAPS.",
        url: "https://picaps.ro/faq",
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
