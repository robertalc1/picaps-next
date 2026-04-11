import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galerie",
    description:
        "Explorează galeria foto PI CAPS: imagini exterioare și interioare ale capsulelor modulare Alpha, Beta și Gamma.",
    openGraph: {
        title: "Galerie — PI CAPS",
        description:
            "Imagini exterioare și interioare ale capsulelor modulare PI CAPS.",
        url: "https://picaps.ro/galerie",
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
