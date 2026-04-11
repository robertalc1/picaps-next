import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Contactează echipa PI CAPS pentru informații despre capsulele modulare premium. Telefon: +40 727 511 563, Email: contact@picaps.ro.",
    openGraph: {
        title: "Contact — PI CAPS",
        description:
            "Contactează echipa PI CAPS pentru informații despre capsulele modulare premium.",
        url: "https://picaps.ro/contact",
    },
    alternates: {
        canonical: "https://picaps.ro/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
