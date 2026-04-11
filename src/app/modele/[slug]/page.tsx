import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import ProductPageClient from "./ProductPageClient";

// Generate static params for all products
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const PRODUCT_METADATA: Record<
  string,
  { title: string; description: string; ogImage: string }
> = {
  alpha: {
    title: "Capsula Modulara Alpha 18m² | €23.500 | PI CAPS",
    description:
      "Casa modulara Alpha 18m² la cheie. Fara autorizatie in majoritatea cazurilor. Dormitor + baie + instalatii complete. Livrare 100 zile. €23.500 + TVA.",
    ogImage: "https://picaps.ro/p-alpha/exterior1-alpha.jpeg",
  },
  beta: {
    title: "Capsula Modulara Beta 28m² | €33.500 | PI CAPS",
    description:
      "Casa modulara Beta 28m² cu dormitor separat si baie completa. Zona de zi distincta. Livrare 100 zile. Design premium. €33.500 + TVA.",
    ogImage: "https://picaps.ro/p-beta/exterior1-beta.jpeg",
  },
  gamma: {
    title: "Capsula Modulara Gamma 38m² | €42.500 | PI CAPS",
    description:
      "Casa modulara Gamma 38m² - locuinta completa. Living spatios, dormitor, bucatarie, baie premium. Livrare 100 zile. €42.500 + TVA.",
    ogImage: "https://picaps.ro/p-gamma/exterior2-gamma.jpeg",
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produs negăsit",
    };
  }

  const meta = PRODUCT_METADATA[slug] ?? {
    title: `Capsula Modulara ${product.name} ${product.size} | PI CAPS`,
    description: `${product.tagline} Suprafata utila ${product.size}, pret de la ${product.price}.`,
    ogImage: `https://picaps.ro${product.heroImage}`,
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      `capsula modulara ${product.name.toLowerCase()}`,
      `casa modulara ${product.size}`,
      `capsule modulare ${product.size}`,
      "casa modulara romania",
      "capsule modulare pret",
      `PI CAPS ${product.name.toLowerCase()}`,
    ],
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://picaps.ro/modele/${product.slug}`,
      images: [
        {
          url: meta.ogImage,
          width: 1200,
          height: 630,
          alt: `PI CAPS Capsula Modulara ${product.name} ${product.size} Romania`,
        },
      ],
    },
    alternates: {
      canonical: `https://picaps.ro/modele/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Capsula Modulara ${product.name} PI CAPS - ${product.size}`,
    description: product.tagline,
    brand: { "@type": "Brand", name: "PI CAPS" },
    image: [
      `https://picaps.ro${product.heroImage}`,
      ...product.galleryImages
        .slice(0, 3)
        .map((img) => `https://picaps.ro${img.src}`),
    ],
    offers: {
      "@type": "Offer",
      price: product.priceValue,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `https://picaps.ro/modele/${product.slug}`,
      seller: { "@id": "https://picaps.ro/#organization" },
      priceValidUntil: "2026-12-31",
    },
    manufacturer: { "@id": "https://picaps.ro/#organization" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductPageClient product={product} />
    </>
  );
}
