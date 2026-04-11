import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Despre Noi",
    description:
        "Află povestea PI CAPS — capsule modulare premium, fabricate în 30 de zile, cu garanție 10 ani și materiale eco-friendly.",
    openGraph: {
        title: "Despre Noi — PI CAPS",
        description:
            "Află povestea PI CAPS — capsule modulare premium fabricate cu materiale sustenabile.",
        url: "https://picaps.ro/despre",
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
