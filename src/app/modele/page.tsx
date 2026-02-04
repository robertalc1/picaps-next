"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Maximize2, Check } from "lucide-react";
import { products } from "@/data/products";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { AntigravityButton } from "@/components/ui/antigravity-button";

// ✅ Mapare directă pe imaginile tale din /public (conform structurii din screenshot)
const MODEL_IMAGES: Record<string, string> = {
  alfa: "/p-alfa/exterior1-alfa.jpeg",
  beta: "/p-beta/exterior1-beta.jpeg",
  gamma: "/p-gamma/exterior2-gamma.jpeg",
};

export default function ModelePage() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-secondary/50 to-background">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-inter font-semibold rounded-full mb-6"
              >
                Colecția PI CAPS
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="section-title text-foreground mb-6"
              >
                Alege Capsula Perfectă
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="body-text text-muted-foreground"
              >
                Trei dimensiuni. Un standard de calitate. Explorează fiecare
                model și descoperă care se potrivește cel mai bine stilului tău
                de viață.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="space-y-16 lg:space-y-24">
              {products.map((product, index) => {
                const imgSrc =
                  MODEL_IMAGES[product.slug] ??
                  "/p-alfa/exterior1-alfa.jpeg"; // fallback safe

                return (
                  <motion.div
                    key={product.slug}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                      }`}
                  >
                    {/* Image (REAL) */}
                    <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                      <Link
                        href={`/modele/${product.slug}`}
                        className="block group relative aspect-[4/3] rounded-3xl overflow-hidden bg-secondary"
                      >
                        <Image
                          src={imgSrc}
                          alt={`Exterior ${product.name}`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority={index === 0}
                        />

                        {/* Size Badge */}
                        <div className="absolute top-6 left-6 z-10">
                          <span className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/90 backdrop-blur-sm text-background font-inter font-semibold rounded-full">
                            <Maximize2 className="w-4 h-4" />
                            {product.size}
                          </span>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <span className="text-white font-inter font-semibold flex items-center gap-2">
                            Vezi Detalii Complete
                            <ArrowRight className="w-5 h-5" />
                          </span>
                        </div>
                      </Link>
                    </div>

                    {/* Content */}
                    <div
                      className={
                        index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                      }
                    >
                      <span className="text-sm font-inter font-semibold text-primary uppercase tracking-wider">
                        {product.sizeCategory}
                      </span>

                      <h2 className="font-pirulen text-4xl lg:text-5xl text-foreground mt-2 mb-4">
                        {product.name}
                      </h2>

                      <p className="text-lg text-muted-foreground mb-6">
                        {product.tagline}
                      </p>

                      <div className="text-3xl font-inter font-bold text-foreground mb-8">
                        {product.price}
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {product.keyBenefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-foreground/80">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Ideal For */}
                      <div className="mb-8">
                        <p className="text-sm text-muted-foreground mb-3">
                          Ideal pentru:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {product.idealFor.slice(0, 3).map((use, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-secondary text-foreground/70 text-sm rounded-full"
                            >
                              {use}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <AntigravityButton
                          variant="primary"
                          href={`/modele/${product.slug}`}
                          magnetic={true}
                          withArrow={true}
                        >
                          Explorează {product.name}
                        </AntigravityButton>

                        <AntigravityButton
                          variant="secondary"
                          href="/contact"
                          magnetic={true}
                        >
                          Contactează-ne
                        </AntigravityButton>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-title text-foreground mb-4">
                Compară Modelele
              </h2>
              <p className="body-text text-muted-foreground">
                Vizualizează rapid diferențele dintre modele.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] bg-background rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-inter font-semibold text-foreground">
                      Caracteristică
                    </th>
                    {products.map((product) => (
                      <th
                        key={product.slug}
                        className="text-center p-6 font-pirulen text-xl text-foreground"
                      >
                        {product.name}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-6 text-muted-foreground">Suprafață</td>
                    {products.map((product) => (
                      <td
                        key={product.slug}
                        className="text-center p-6 font-semibold text-foreground"
                      >
                        {product.size}
                      </td>
                    ))}
                  </tr>

                  <tr className="border-b border-border/50">
                    <td className="p-6 text-muted-foreground">Preț de la</td>
                    {products.map((product) => (
                      <td
                        key={product.slug}
                        className="text-center p-6 font-semibold text-foreground"
                      >
                        €{product.priceValue.toLocaleString()}
                      </td>
                    ))}
                  </tr>

                  <tr className="border-b border-border/50">
                    <td className="p-6 text-muted-foreground">Baie completă</td>
                    {products.map((product, i) => (
                      <td key={product.slug} className="text-center p-6">
                        {i > 0 ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">Opțional</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  <tr className="border-b border-border/50">
                    <td className="p-6 text-muted-foreground">Bucătărie</td>
                    {products.map((product, i) => (
                      <td key={product.slug} className="text-center p-6">
                        {i > 0 ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">Opțional</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-6 text-muted-foreground">
                      Camere separate
                    </td>
                    {products.map((product, i) => (
                      <td key={product.slug} className="text-center p-6">
                        {i === 0 ? "1" : i === 1 ? "1-2" : "2+"}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
