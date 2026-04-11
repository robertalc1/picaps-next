import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Modele",
    description:
        "Descoperă gama PI CAPS: Alpha 18m², Beta 28m², Gamma 38m². Capsule modulare premium cu design futurist și eficiență energetică maximă.",
    openGraph: {
        title: "Modele — PI CAPS",
        description:
            "Descoperă gama PI CAPS: Alpha 18m², Beta 28m², Gamma 38m². Capsule modulare premium.",
        url: "https://picaps.ro/modele",
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
