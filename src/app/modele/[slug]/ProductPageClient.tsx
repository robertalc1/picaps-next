"use client";

import React, { Suspense, useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AntigravityButton } from "@/components/ui/antigravity-button";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView
} from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei";
import { KTX2Loader } from 'three-stdlib';
import { DRACOLoader } from 'three-stdlib';
import { CircularSpecs } from "@/components/CircularSpecs";
import {
  Maximize2,
  Shield,
  Zap,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Product, GalleryImage } from "@/data/products";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import ProductContactForm from "@/components/ProductContactForm";

// ... existing imports



// --- Components ---

function CapsuleModel({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath, true, true, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    loader.setDRACOLoader(dracoLoader);

    const ktx2Loader = new KTX2Loader();
    ktx2Loader.setTranscoderPath('https://unpkg.com/three@0.160.0/examples/jsm/libs/basis/');
    loader.setKTX2Loader(ktx2Loader);
  });
  return (
    <Center>
      <primitive object={scene} scale={0.03} />
    </Center>
  );
}

// Lightbox (Kept functional, style refined)
function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: {
  images: GalleryImage[],
  currentIndex: number,
  onClose: () => void,
  onPrev: () => void,
  onNext: () => void
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-6 right-6 z-20 text-white/70 hover:text-white transition-colors">
        <X size={32} />
      </button>

      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 lg:left-8 z-20 text-white/50 hover:text-white transition-colors">
        <ChevronLeft size={48} />
      </button>

      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 lg:right-8 z-20 text-white/50 hover:text-white transition-colors">
        <ChevronRight size={48} />
      </button>

      <div className="relative w-full h-full p-4 lg:p-20 pointer-events-none flex items-center justify-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-full h-full max-h-[85vh]"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-contain pointer-events-auto"
            quality={100}
            priority
          />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}

interface ProductPageClientProps {
  product: Product;
}

export default function ProductPageClient({ product }: ProductPageClientProps) {
  useSmoothScroll();
  const contactRef = useRef<HTMLDivElement>(null);
  const isInContactSection = useInView(contactRef, { margin: "0px 0px -200px 0px" }); // Triggers slightly before full view
  const [hasReachedBottom, setHasReachedBottom] = useState(false);

  useEffect(() => {
    if (isInContactSection) {
      setHasReachedBottom(true);
    } else {
      // Optional: Reset if scrolling back up significantly, but user requested "stay hidden from that point"
      // We can allow it to reappear if they scroll way up, but for now let's stick to the "don't overlap footer" rule.
      // The simplier logic is: if (isInContactSection) hide.
      // But if we scroll past it to footer? isInContactSection stays true as long as it's in viewport.
      // If footer is tall, contact section might leave viewport top.
      // Let's rely on a simpler 'hide' boolean derived from isInContact.
      setHasReachedBottom(isInContactSection);
    }
  }, [isInContactSection]);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]); // Parallax for hero text
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  // Gallery Logic
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // 3D/Viewer Logic
  const [viewerMode, setViewerMode] = useState<"tour" | "3d">("tour");

  return (
    <div className="bg-white min-h-screen text-[#111] font-sans selection:bg-black selection:text-white">

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={product.galleryImages}
            currentIndex={currentImageIndex}
            onClose={() => setLightboxOpen(false)}
            onPrev={() => setCurrentImageIndex(i => i === 0 ? product.galleryImages.length - 1 : i - 1)}
            onNext={() => setCurrentImageIndex(i => i === product.galleryImages.length - 1 ? 0 : i + 1)}
          />
        )}
      </AnimatePresence>

      {/* --- 1. HERO SECTION (Premium Minimal - Transparent Capsule) --- */}
      <section className="relative w-full bg-[#FAFAFA] pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          {/* Capsule Image - Centered, No Background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full flex justify-center mb-12 lg:mb-16"
          >
            <div className="relative w-full max-w-4xl aspect-[16/9]">
              <Image
                src={`/p-${product.slug}/${product.slug}2-bg.jpeg`}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Content - Below Image, Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            {/* Product Badge */}
            <span className="inline-block px-4 py-1.5 bg-[#1C4030]/5 rounded-full text-xs font-medium uppercase tracking-widest text-[#1C4030] mb-4">
              Capsulă Premium • {product.slug === 'alpha' ? '18m²' : product.slug === 'beta' ? '28m²' : '38m²'}
            </span>

            {/* Product Name */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#1D1D1F] leading-[0.95] mb-6">
              {product.name}
            </h1>

            {/* Tagline */}
            <p className="max-w-2xl mx-auto text-lg lg:text-xl text-neutral-600 font-light leading-relaxed mb-10">
              {product.tagline}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              {/* Primary CTA - Request Offer */}
              <AntigravityButton
                variant="primary"
                href="#contact"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                magnetic={true}
              >
                Cere Ofertă
              </AntigravityButton>

              {/* Secondary CTA - Specs */}
              <AntigravityButton
                variant="secondary"
                href="#tech-specs"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  document.getElementById('tech-specs')?.scrollIntoView({ behavior: 'smooth' });
                }}
                magnetic={true}
              >
                Vezi Specificații
              </AntigravityButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. SPECS STRIP (Clean White) --- */}
      <div id="specs" className="w-full bg-white border-b border-neutral-100 py-6 lg:py-12 scroll-mt-24">
        <div className="flex justify-center px-4 gap-4 sm:gap-8 lg:gap-16 items-center text-center">
          {/* Dimension */}
          <div className="flex flex-col gap-1 px-3 sm:px-6 lg:px-8">
            <span className="text-[9px] sm:text-[10px] lg:text-xs font-medium uppercase tracking-widest text-neutral-400">Dimensiune</span>
            <span className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1D1D1F]">
              {product.slug === 'alpha' ? '18m²' : product.slug === 'beta' ? '28m²' : '38m²'}
            </span>
          </div>

          {/* Delivery */}
          <div className="flex flex-col gap-1 px-3 sm:px-6 lg:px-8 border-l border-neutral-200">
            <span className="text-[9px] sm:text-[10px] lg:text-xs font-medium uppercase tracking-widest text-neutral-400">Livrare</span>
            <span className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1D1D1F]">70 de Zile</span>
          </div>

          {/* Warranty */}
          <div className="flex flex-col gap-1 px-3 sm:px-6 lg:px-8 border-l border-neutral-200">
            <span className="text-[9px] sm:text-[10px] lg:text-xs font-medium uppercase tracking-widest text-neutral-400">Garanție</span>
            <span className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1D1D1F]">2 Ani</span>
          </div>
        </div>
      </div>

      <main className="flex flex-col w-full overflow-hidden bg-white">

        {/* --- 3D & VR SECTION (Clean Integration) --- */}
        <section className="w-full bg-white py-12 lg:py-20 border-t border-neutral-100">
          <div className="px-6 lg:px-16 max-w-[1800px] mx-auto">
            {/* Centered Header with Toggle */}
            <div className="flex flex-col items-center text-center mb-8 gap-4">
              <h2 className="font-heading text-3xl lg:text-5xl">Explorează Modelul</h2>

              {/* Toggle Buttons - Centered & Prominent */}
              <div className="flex gap-2 bg-neutral-100 p-1.5 rounded-full">
                <button
                  onClick={() => setViewerMode("tour")}
                  className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${viewerMode === 'tour'
                    ? 'bg-[#1C4030] text-white shadow-md'
                    : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                >
                  Tur Virtual
                </button>
                <button
                  onClick={() => setViewerMode("3d")}
                  className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${viewerMode === '3d'
                    ? 'bg-[#1C4030] text-white shadow-md'
                    : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                >
                  Model 3D
                </button>
              </div>
            </div>

            <div className="w-full aspect-square lg:aspect-[16/9] bg-neutral-50 rounded-2xl overflow-hidden relative shadow-2xl shadow-black/5">
              <AnimatePresence mode="wait">
                {viewerMode === 'tour' ? (
                  <motion.iframe
                    key="tour"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    src={product.virtualTour}
                    className="w-full h-full"
                    allowFullScreen
                  />
                ) : (
                  <motion.div key="3d" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full">
                    <Canvas camera={{ position: [6, 3, 6], fov: 40 }}>
                      <ambientLight intensity={0.8} />
                      <directionalLight position={[10, 10, 5]} intensity={1.5} />
                      <Suspense fallback={null}>
                        <CapsuleModel modelPath={product.model3D} />
                        <Environment preset="park" />
                      </Suspense>
                      <OrbitControls enablePan={false} autoRotate autoRotateSpeed={0.5} />
                    </Canvas>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* --- 4.5 CIRCULAR SPECS (Materials & Construction) --- */}
        <CircularSpecs />

        {/* --- 5. TECH SPECS (Apple-Style Simple Grid) --- */}
        <section id="tech-specs" className="py-10 lg:py-16 px-6 lg:px-16 max-w-5xl mx-auto w-full bg-white scroll-mt-20">
          {/* Section Header */}
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="font-pirulen text-2xl lg:text-4xl text-[#1D1D1F]">Specificații {product.name}</h2>
          </div>

          {/* Specs Grid - All Categories Visible */}
          <div className="space-y-12">
            {/* Delivery Term */}
            <div className="flex flex-col items-center">
              <h3 className="font-inter text-sm font-semibold text-[#1C4030] uppercase tracking-wider mb-6 pb-2 border-b border-neutral-200 text-center w-full">
                Termen de livrare
              </h3>
              <div className="flex flex-col items-center justify-center text-center py-8 px-8 bg-gradient-to-br from-neutral-50 to-neutral-100/50 rounded-2xl border border-neutral-100 w-full">
                <span className="font-inter font-bold text-xl lg:text-2xl text-[#1D1D1F] mb-3 tracking-tight">
                  30 zile producție · 70 zile livrare
                </span>
                <span className="font-inter text-sm lg:text-base text-neutral-500 leading-relaxed max-w-md">
                  Procesul de producție și livrare este clar și transparent, cu termene bine definite
                </span>
              </div>
            </div>

            {/* Dimensions */}
            <div>
              <h3 className="font-inter text-sm font-semibold text-[#1C4030] uppercase tracking-wider mb-6 pb-2 border-b border-neutral-200">
                Dimensiuni
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {product.specs.dimensions.map((spec, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <span className="block font-inter text-2xl lg:text-3xl font-semibold text-[#1D1D1F] mb-1">{spec.value}</span>
                    <span className="font-inter text-sm text-neutral-500">{spec.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Structure */}
            <div>
              <h3 className="font-inter text-sm font-semibold text-[#1C4030] uppercase tracking-wider mb-6 pb-2 border-b border-neutral-200">
                Structură
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.specs.structure.map((spec, i) => (
                  <div key={i} className="flex flex-col py-4 px-5 bg-neutral-50 rounded-xl">
                    <span className="font-inter text-xs uppercase tracking-wide text-neutral-400 mb-1">{spec.label}</span>
                    <span className="font-inter font-medium text-base text-[#1D1D1F]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Installations */}
            <div>
              <h3 className="font-inter text-sm font-semibold text-[#1C4030] uppercase tracking-wider mb-6 pb-2 border-b border-neutral-200">
                Instalații
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.specs.installations.map((spec, i) => (
                  <div key={i} className="flex flex-col py-4 px-5 bg-neutral-50 rounded-xl">
                    <span className="font-inter text-xs uppercase tracking-wide text-neutral-400 mb-1">{spec.label}</span>
                    <span className="font-inter font-medium text-base text-[#1D1D1F]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Finishes */}
            <div>
              <h3 className="font-inter text-sm font-semibold text-[#1C4030] uppercase tracking-wider mb-6 pb-2 border-b border-neutral-200">
                Finisaje
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.specs.finishes.map((spec, i) => (
                  <div key={i} className="flex flex-col py-4 px-5 bg-neutral-50 rounded-xl">
                    <span className="font-inter text-xs uppercase tracking-wide text-neutral-400 mb-1">{spec.label}</span>
                    <span className="font-inter font-medium text-base text-[#1D1D1F]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

        {/* --- 6. GALLERY (Full Bleed Mobile, Smaller on Desktop) --- */}
        <section className="py-10 lg:py-16">
          <div className="px-6 lg:px-16 max-w-6xl mx-auto mb-4 lg:mb-6">
            <h2 className="font-heading text-3xl lg:text-4xl">Galerie</h2>
          </div>

          <div className="flex overflow-x-auto gap-4 px-6 lg:px-16 pb-6 lg:pb-8 snap-x snap-mandatory max-w-6xl mx-auto">
            {product.galleryImages.map((img, i) => (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                className="relative shrink-0 w-[85vw] lg:w-[28vw] lg:max-w-[380px] aspect-[4/3] snap-center cursor-pointer group overflow-hidden rounded-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 7. CONTACT SECTION --- */}
        <div ref={contactRef} id="contact" className="scroll-mt-32">
          <ProductContactForm productSlug={product.slug} productName={product.name} />
        </div>

      </main>

      {/* --- STICKY CTA BAR (Mobile - Enhanced Price Visibility) --- */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: hasReachedBottom ? 100 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 shadow-[0_-8px_30px_rgba(0,0,0,0.1)] px-4 py-3 lg:hidden"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">{product.name}</span>
            <span className="text-sm font-semibold text-[#1C4030]">{product.size}</span>
          </div>
          <AntigravityButton
            variant="primary"
            href="#contact"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              contactRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 text-sm whitespace-nowrap"
            magnetic={false}
          >
            Cere Ofertă
          </AntigravityButton>
        </div>
      </motion.div>

      {/* Desktop Sticky Bar - Enhanced */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: hasReachedBottom ? 100 : 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 inset-x-0 z-50 hidden lg:flex justify-center pointer-events-none"
      >
        <div className="bg-white/95 backdrop-blur-xl border border-neutral-200 shadow-2xl shadow-black/10 rounded-2xl px-6 py-4 flex items-center gap-6 pointer-events-auto">
          <span className="font-bold text-lg text-[#1D1D1F]">{product.name}</span>
          <div className="w-px h-6 bg-neutral-200" />
          <span className="text-sm font-medium text-neutral-500">{product.size}</span>
          <AntigravityButton
            variant="primary"
            href="#contact"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              contactRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 text-sm"
            magnetic={true}
          >
            Cere Ofertă
          </AntigravityButton>
        </div>
      </motion.div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}