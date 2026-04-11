import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PI CAPS - Capsule Modulare Premium | Livrare 100 Zile",
    template: "%s | PI CAPS Romania",
  },
  description:
    "Capsule modulare Alpha 18m², Beta 28m², Gamma 38m² la cheie în România. Fără autorizație în majoritatea cazurilor. Livrare 100 zile. De la €23.500 + TVA.",
  keywords: [
    "capsule modulare",
    "case modulare",
    "casa modulara prefabricata",
    "tiny house romania",
    "casa container design",
    "locuinta modulara",
    "capsule locuibile",
    "casa modulara romania",
    "capsule modulare pret",
    "case modulare prefabricate",
    "casa capsula",
    "capsule locuit",
  ],
  authors: [{ name: "PI CAPS" }],
  creator: "PI CAPS",
  publisher: "PI CAPS",
  metadataBase: new URL("https://picaps.ro"),
  alternates: { canonical: "https://picaps.ro" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://picaps.ro",
    siteName: "PI CAPS - Capsule Modulare Romania",
    title: "PI CAPS - Capsule Modulare Premium România",
    description:
      "Capsule modulare de locuit la cheie în România. Livrare în 100 zile. De la €23.500 + TVA.",
    images: [
      {
        url: "https://picaps.ro/p-gamma/exterior2-gamma.jpeg",
        width: 1200,
        height: 630,
        alt: "PI CAPS Capsule Modulare Premium Romania",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PI CAPS - Capsule Modulare Premium România",
    description:
      "Capsule modulare de locuit la cheie în România. De la €23.500 + TVA.",
    images: ["https://picaps.ro/p-gamma/exterior2-gamma.jpeg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://picaps.ro/#organization",
      name: "PI CAPS",
      url: "https://picaps.ro",
      logo: {
        "@type": "ImageObject",
        url: "https://picaps.ro/logo-picaps.png",
        width: 180,
        height: 50,
      },
      image: "https://picaps.ro/p-gamma/exterior2-gamma.jpeg",
      telephone: "+40727511563",
      email: "contact@picaps.ro",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bucuresti",
        addressCountry: "RO",
      },
      description:
        "Producator roman de capsule modulare premium cu livrare in 100 zile",
      priceRange: "€€€",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "10:00",
          closes: "14:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://picaps.ro/#website",
      url: "https://picaps.ro",
      name: "PI CAPS - Capsule Modulare Romania",
      publisher: { "@id": "https://picaps.ro/#organization" },
    },
    {
      "@type": "SiteNavigationElement",
      name: "Alpha 18m² - Capsulă Modulară",
      url: "https://picaps.ro/modele/alpha",
      description: "Capsulă modulară compactă 18m² de la €23.500 + TVA",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Beta 28m² - Capsulă Modulară",
      url: "https://picaps.ro/modele/beta",
      description: "Capsulă modulară cu dormitor separat 28m² de la €33.500 + TVA",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Gamma 38m² - Capsulă Modulară",
      url: "https://picaps.ro/modele/gamma",
      description: "Locuință modulară completă 38m² de la €42.500 + TVA",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Contact PI CAPS",
      url: "https://picaps.ro/contact",
      description: "Solicită ofertă personalizată capsule modulare",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${syne.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
