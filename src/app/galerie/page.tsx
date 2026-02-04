"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { AntigravityButton } from "@/components/ui/antigravity-button";

const categories = ["Toate", "Exterior", "Interior"] as const;
type Category = (typeof categories)[number];

type GalleryItem = {
  id: string;
  category: Exclude<Category, "Toate">;
  src: string;
  alt: string;
  aspect: "portrait" | "square" | "landscape";
};

const GALLERY_ITEMS: GalleryItem[] = [
  // --- ALFA (Interior) ---
  { id: "alfa-baie", category: "Interior", src: "/p-alfa/baie-alfa.jpeg", alt: "Alfa - Baie", aspect: "landscape" },
  { id: "alfa-camera", category: "Interior", src: "/p-alfa/camera-alfa.jpeg", alt: "Alfa - Cameră", aspect: "landscape" },

  // --- ALFA (Exterior) ---
  { id: "alfa-exterior-1", category: "Exterior", src: "/p-alfa/exterior1-alfa.jpeg", alt: "Alfa - Exterior 1", aspect: "landscape" },
  { id: "alfa-exterior-2", category: "Exterior", src: "/p-alfa/exterior2-alfa.jpeg", alt: "Alfa - Exterior 2", aspect: "landscape" },

  // --- BETA (Interior) ---
  { id: "beta-baie", category: "Interior", src: "/p-beta/baie-beta.jpeg", alt: "Beta - Baie", aspect: "portrait" },
  { id: "beta-camera", category: "Interior", src: "/p-beta/camera-beta.jpeg", alt: "Beta - Cameră", aspect: "landscape" },
  { id: "beta-camera-1", category: "Interior", src: "/p-beta/camera1-beta.jpeg", alt: "Beta - Cameră 2", aspect: "square" },

  // --- BETA (Exterior) ---
  { id: "beta-exterior-1", category: "Exterior", src: "/p-beta/exterior1-beta.jpeg", alt: "Beta - Exterior 1", aspect: "landscape" },
  { id: "beta-exterior-2", category: "Exterior", src: "/p-beta/exterior2-beta.jpeg", alt: "Beta - Exterior 2", aspect: "landscape" },

  // --- GAMMA (Interior) ---
  { id: "gamma-baie", category: "Interior", src: "/p-gamma/baie-gamma.jpeg", alt: "Gamma - Baie", aspect: "portrait" },
  { id: "gamma-bucatarie", category: "Interior", src: "/p-gamma/bucatarie-gamma.jpeg", alt: "Gamma - Bucătărie", aspect: "landscape" },
  { id: "gamma-camera", category: "Interior", src: "/p-gamma/camera-gamma.jpeg", alt: "Gamma - Cameră", aspect: "landscape" },
  { id: "gamma-living", category: "Interior", src: "/p-gamma/living-gamma.jpeg", alt: "Gamma - Living", aspect: "square" },

  // --- GAMMA (Exterior) ---
  { id: "gamma-exterior-1", category: "Exterior", src: "/p-gamma/exterior1-gamma.jpeg", alt: "Gamma - Exterior 1", aspect: "landscape" },
  { id: "gamma-exterior-2", category: "Exterior", src: "/p-gamma/exterior2-gamma.jpeg", alt: "Gamma - Exterior 2", aspect: "landscape" },
];

export default function GaleriePage() {
  useSmoothScroll();

  const [activeFilter, setActiveFilter] = useState<Category>("Toate");
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "Toate") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const selectedItem = useMemo(
    () => GALLERY_ITEMS.find((x) => x.id === selectedImageId) ?? null,
    [selectedImageId]
  );

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-secondary/50 to-background">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="section-title text-foreground mb-6"
              >
                Galerie
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="body-text text-muted-foreground"
              >
                Explorează capsulele PI CAPS în imagini. Design, calitate,
                lifestyle.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 z-30 bg-background/95 backdrop-blur-sm border-b border-border/50">
          <div className="section-container">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <AntigravityButton
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  variant="secondary"
                  magnetic={true}
                  size="sm"
                  className={`px-6 py-2 transition-all ${activeFilter === category
                    ? "bg-[#1D1D1F] text-white border-[#1D1D1F]"
                    : "text-white/70 hover:text-white bg-[#1D1D1F]/80 hover:bg-[#1D1D1F]" // Subtle distinction
                    }`}
                >
                  {category}
                </AntigravityButton>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid - Mobile optimized */}
        <section className="py-12 lg:py-24">
          <div className="section-container">
            <motion.div
              layout
              className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => {
                  // Pattern: 0=full, 1-2=half, 3=full, 4-5=half, 6=full...
                  // index % 3 === 0 means full width
                  const isFullWidth = index % 3 === 0;

                  // Dacă e ultima imagine și ar fi singură pe rând, fa-o full
                  const isLastAndAlone =
                    index === filteredItems.length - 1 &&
                    (filteredItems.length % 3 === 2);

                  const shouldBeFullWidth = isFullWidth || isLastAndAlone;

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: index * 0.03 }}
                      className={`group cursor-pointer ${shouldBeFullWidth ? "col-span-2" : ""
                        }`}
                      onClick={() => setSelectedImageId(item.id)}
                    >
                      <div
                        className={`relative overflow-hidden rounded-xl md:rounded-2xl bg-secondary ${shouldBeFullWidth
                          ? "aspect-[16/10]"
                          : "aspect-square"
                          }`}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes={shouldBeFullWidth
                            ? "(max-width: 768px) 100vw, 66vw"
                            : "(max-width: 768px) 50vw, 33vw"
                          }
                          priority={index < 3 && activeFilter === "Toate"}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <ZoomIn className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                          <span className="px-2.5 py-1 md:px-3 md:py-1.5 bg-foreground/80 backdrop-blur-sm text-background text-[10px] md:text-xs font-inter font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {filteredItems.length === 0 && (
              <div className="text-center text-muted-foreground mt-10">
                Nu există imagini în această categorie momentan.
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImageId(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImageId(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl w-full rounded-2xl overflow-hidden bg-secondary"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  className="object-contain bg-foreground/10"
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}