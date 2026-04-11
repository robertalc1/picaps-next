import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pi Business Resort",
    description:
        "Investiție inteligentă cu PI CAPS Business Resort. Capsule modulare premium pentru turism, glamping și afaceri hoteliere cu randament ridicat.",
    openGraph: {
        title: "Pi Business Resort — PI CAPS",
        description:
            "Capsule modulare premium pentru turism, glamping și afaceri hoteliere.",
        url: "https://picaps.ro/pi-business-resort",
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
