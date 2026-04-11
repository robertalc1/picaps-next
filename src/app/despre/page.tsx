"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Factory, Truck, Shield, Leaf } from "lucide-react";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { AntigravityButton } from "@/components/ui/antigravity-button";

// =============================================================================
// DESPRE PAGE - Editorial Magazine Aesthetic
// Premium architectural luxury with real imagery
// =============================================================================

// --- Data ---
const milestones = [
  { year: "2024", event: "Ideea PiCaps prinde contur" },
  { year: "2025", event: "Lansare oficială și primele capsule livrate" },
  { year: "2025", event: "Parteneriate strategice în turism" },
  { year: "2026", event: "Expansiune europeană (planificat)" },
];

const values = [
  {
    icon: Factory,
    title: "Producție Proprie",
    description: "Control total asupra calității, de la primele schițe până la finisaje.",
  },
  {
    icon: Truck,
    title: "Livrare în 30 Zile",
    description: "De la comandă la instalare, în mai puțin de o lună.",
  },
  {
    icon: Shield,
    title: "Garanție 10 Ani",
    description: "Siguranță și încredere pe termen lung.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Materiale sustenabile și eficiență energetică maximă.",
  },
];

// --- Components ---
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ParallaxImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="relative w-full h-[120%]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </motion.div>
    </div>
  );
};

export default function DesprePage() {
  useSmoothScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="bg-white min-h-screen selection:bg-[#1C4030] selection:text-white overflow-hidden">


      {/* =================================================================
          3. STORY SECTION - Povestea Noastră
          ================================================================= */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Story Header */}
          <FadeIn className="text-center mb-16 lg:mb-24">
            <span className="text-[#1C4030] font-medium text-sm uppercase tracking-widest mb-4 block">
              Cine Suntem
            </span>
            <h2 className="font-pirulen text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-[1.2]">
              Povestea Noastră
            </h2>
          </FadeIn>

          {/* Main Story Content */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
            {/* Text Column */}
            <FadeIn delay={0.1}>
              <div className="space-y-6 text-[#1a1a1a]/70 text-lg leading-[1.9] font-light">
                <p>
                  <strong className="text-[#1a1a1a] font-medium">PiCaps a apărut la începutul anului 2025</strong> dintr-o nevoie clară:
                  construcții mai rapide, mai simple și mai bine adaptate modului în care trăim și investim astăzi.
                  Vrem să oferim o alternativă reală la construcțiile clasice — fără costuri imprevizibile.
                </p>
                <p>
                  Lucrăm în hala noastră de producție, unde asamblăm fiecare capsulă cu atenție la detalii,
                  finisaje și funcționalitate. Ne place să avem control asupra procesului, pentru că acest lucru
                  ne permite să livrăm constant calitate și să adaptăm fiecare proiect în funcție de nevoile reale ale clientului.
                </p>
                <p className="text-[#1a1a1a] font-medium border-l-2 border-[#1C4030] pl-6">
                  Construim soluții modulare de locuire, gândite pentru viața de zi cu zi și pentru investiții.
                </p>
              </div>
            </FadeIn>

            {/* Image Column */}
            <FadeIn delay={0.2} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                <Image
                  src="/p-gamma/living-gamma.jpeg"
                  alt="Interior Premium PI CAPS"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>

          {/* Second Part of Story */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Column - Left on Desktop */}
            <FadeIn delay={0.1} className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/p-alpha/camera-alpha.jpeg"
                    alt="Camera Alpha"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative mt-8">
                  <Image
                    src="/p-beta/camera-beta.jpeg"
                    alt="Camera Beta"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Text Column - Right on Desktop */}
            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <div className="space-y-6 text-[#1a1a1a]/70 text-lg leading-[1.9] font-light">
                <p>
                  Capsulele PiCaps sunt practice, confortabile și ușor de folosit din prima zi. Folosim materiale
                  de calitate, soluții constructive moderne și oferim posibilitatea de personalizare, inclusiv
                  integrarea de sisteme smart care fac viața mai simplă și mai eficientă.
                </p>
                <p>
                  Fie că vorbim despre persoane care își doresc să locuiască într-o capsulă PiCaps sau despre
                  investitori care urmăresc proiecte de închiriere, abordarea noastră rămâne aceeași:
                  <strong className="text-[#1a1a1a]"> soluții clare, termene realiste și costuri corecte.</strong>
                </p>
                <div className="pt-4">
                  <p className="font-pirulen text-xl lg:text-2xl text-[#1C4030]">
                    Trăiește inteligent. Oriunde.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* =================================================================
          6. CTA - Final Call to Action
          ================================================================= */}
      <section className="py-32 lg:py-48 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute inset-0 bg-gradient-to-l from-[#1C4030] to-transparent" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-16 text-center relative z-10">
          <FadeIn>
            <h2 className="font-pirulen text-4xl md:text-5xl lg:text-7xl text-[#1a1a1a] mb-8 leading-[1.05]">
              Construiește Viitorul<br />
              <span className="text-[#1C4030]">Cu Noi</span>
            </h2>
            <p className="text-[#1a1a1a]/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Ești curios să afli mai multe? Contactează-ne pentru o discuție personalizată despre proiectul tău.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AntigravityButton href="/contact" variant="primary" magnetic={true} withArrow={true}>
                Contactează-ne
              </AntigravityButton>

              <AntigravityButton href="/modele" variant="secondary" magnetic={true}>
                Vezi Modelele
              </AntigravityButton>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
