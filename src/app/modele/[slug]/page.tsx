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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produs negăsit",
    };
  }

  return {
    title: `Capsula ${product.name} — ${product.size}`,
    description: `${product.tagline} Suprafață utilă ${product.size}, preț de la ${product.price}. ${product.features.slice(0, 3).join(", ")}.`,
    openGraph: {
      title: `Capsula ${product.name} ${product.size} — PI CAPS`,
      description: product.tagline,
      url: `https://picaps.ro/modele/${product.slug}`,
      images: [
        {
          url: product.heroImage,
          width: 1200,
          height: 630,
          alt: `PI CAPS Capsula ${product.name}`,
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

  return <ProductPageClient product={product} />;
}