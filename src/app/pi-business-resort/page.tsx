"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Building2,
  BarChart3,
  Users,
  Lock,
  Thermometer,
  Lightbulb,
  Smartphone,
  ChevronDown,
  X,
  Plus
} from "lucide-react";
import ProductContactForm from "@/components/ProductContactForm";
import { AntigravityButton } from "@/components/ui/antigravity-button";

// --- Constants & Data ---

const trustItems = [
  { number: "01", title: "Producție Proprie", description: "Control total al calității în fabrica noastră din România." },
  { number: "02", title: "Finisaje Premium", description: "Materiale durabile, estetică minimalistă, confort de 5 stele." },
  { number: "03", title: "Smart Ready", description: "Automatizare completă pentru operare de la distanță." },
  { number: "04", title: "Scalabilitate", description: "Extinde resortul oricând, fără șantier clasic." },
];

const steps = [
  { number: "01", title: "Consultare", description: "Analizăm terenul și definim obiectivele investiției." },
  { number: "02", title: "Configurare", description: "Selectăm modelele PiCaps și pachetul de dotări." },
  { number: "03", title: "Producție & Livrare", description: "Execuție rapidă în fabrică și montaj 'plug & play'." },
  { number: "04", title: "Lansare", description: "Resortul devine operațional imediat după conectare." },
];

const resortModels = [
  {
    name: "Alfa",
    sqm: "18",
    tag: "Entry Level",
    description: "Unitatea ideală pentru volume mari de cazare. Compactă, dar surprinzător de spațioasă.",
    image: "/p-alfa/exterior1-alfa.jpeg",
    specs: ["Dormitor matrimonial", "Baie complet echipată", "Smart lock integrat"],
  },
  {
    name: "Beta",
    sqm: "28",
    tag: "Best Seller",
    description: "Echilibrul perfect între spațiu și cost. Oferă o zonă de zi distinctă pentru un plus de confort.",
    image: "/p-beta/exterior1-beta.jpeg",
    specs: ["Zonă de zi + Dormitor", "Spații vitrate ample", "Terasă integrată"],
  },
  {
    name: "Gamma",
    sqm: "38",
    tag: "Premium",
    description: "Experiența premium supremă. Spațiu generos, finisaje de top, gândit pentru tarife high-end.",
    image: "/p-gamma/exterior2-gamma.jpeg",
    specs: ["Living spațios", "Bucătărie completă", "Baie premium walk-in"],
  },
];

const smartFeatures = [
  { icon: Lock, title: "Acces Digital", description: "Smart lock cu cod unic pentru fiecare oaspete." },
  { icon: Smartphone, title: "App Control", description: "Gestionezi tot resortul direct din telefon." },
  { icon: Thermometer, title: "Climatizare", description: "Pre-încălzire sau răcire înainte de sosire." },
  { icon: Lightbulb, title: "Iluminat", description: "Scenarii de lumini pentru atmosferă perfectă." },
];

const faqs = [
  { category: "GENERAL", question: "Care este investiția minimă?", answer: "Programul Pi Business Resort este optimizat pentru proiecte de minimum 4 unități. Costul per unitate scade semnificativ la volume mai mari. Contactează-ne pentru o ofertă personalizată." },
  { category: "FINANȚARE", question: "Cum funcționează finanțarea 50/50?", answer: "Achiti un avans de 50% pentru a demara producția. Diferența de 50% poate fi eșalonată pe o perioadă de 2-5 ani, fiind acoperită parțial sau total din veniturile generate de închiriere." },
  { category: "LIVRARE", question: "Asigurați transport și montaj?", answer: "Da, oferim soluție completă 'la cheie'. Ne ocupăm de transportul modulelor și de amplasarea lor pe fundațiile pregătite (piloni înșurubați sau beton)." },
  { category: "CALITATE", question: "Ce durată de viață au modulele?", answer: "Structura metalică este garantată pe viață. Finisajele și instalațiile sunt de calitate premium, proiectate să reziste la utilizare intensă (regim hotelier) timp de zeci de ani." },
];

// Animated Section Component
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function PiBusinessResortPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const scrollRef = useRef(null);

  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 800], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div ref={scrollRef} className="bg-white text-[#1D1D1F] font-sans">

      {/* ============================================
          HERO SECTION - Video with Dark Overlay
          ============================================ */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#1D1D1F]">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1D1D1F] z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Pi Business Resort.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="relative z-20 container mx-auto px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 py-2 px-5 mb-8 rounded-full bg-[#1C4030] text-white text-xs font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                B2B Investment Program
              </span>

              <h1 className="font-pirulen text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
                Pi Business Resort
              </h1>

              <AntigravityButton
                variant="primary"
                href="/pi-business-resort#aplica"
                magnetic={true}
                withArrow={true}
              >
                Devino investitor
              </AntigravityButton>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ============================================
          PHILOSOPHY SECTION - White Background
          ============================================ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <AnimatedSection>
              <span className="text-[#1C4030] text-xs font-bold tracking-widest uppercase mb-4 block">
                Viziune
              </span>
              <h2 className="font-pirulen text-3xl md:text-4xl lg:text-5xl mb-6 text-[#1D1D1F] leading-tight">
                Viitorul Turismului
                <br />
                <span className="text-[#1C4030]">Este Modular.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Pi Business Resort nu este doar o colecție de căsuțe. Este un sistem integrat de business.
                Rezolvăm cele mai mari probleme ale dezvoltării hoteliere tradiționale.
              </p>

              <div className="space-y-4">
                {trustItems.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="text-[#1C4030] font-pirulen text-sm bg-[#1C4030]/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                      {item.number}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#1D1D1F] mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right - Image */}
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/p-gamma/bucatarie-gamma.jpeg"
                  alt="Pi Resort Concept"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1F]/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <blockquote className="font-pirulen text-xl text-white leading-snug">
                    "Construim viteză și calitate. Tu construiești experiențe."
                  </blockquote>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================
          INVESTMENT 50/50 - Clean Design
          ============================================ */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="text-[#1C4030] text-xs font-bold tracking-widest uppercase mb-4 block">
                Parteneriat Strategic
              </span>
              <h2 className="font-pirulen text-3xl md:text-4xl lg:text-5xl mb-6 text-[#1D1D1F]">
                Modelul 50 / 50
              </h2>
              <p className="text-gray-500 text-lg">
                Accelerăm ROI-ul tău. Plătești doar 50% avans, iar restul îl finanțăm noi.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#1C4030] rounded-3xl p-10 text-white h-full">
                <span className="text-white/60 text-xs font-bold tracking-widest uppercase mb-4 block">Tu Investești</span>
                <div className="font-pirulen text-7xl mb-4">50%</div>
                <p className="text-white/70">Avans pentru a demara producția. Controlezi investiția inițială.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-3xl p-10 border border-gray-200 h-full shadow-sm">
                <span className="text-[#1C4030] text-xs font-bold tracking-widest uppercase mb-4 block">Noi Finanțăm</span>
                <div className="font-pirulen text-7xl text-[#1D1D1F] mb-4">50%</div>
                <p className="text-gray-500">Plata eșalonată din veniturile generate. Zero dobândă ascunsă.</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              {[
                { icon: BarChart3, text: "Cashflow Pozitiv" },
                { icon: Building2, text: "Scalare Rapidă" },
                { icon: Users, text: "Suport Dedicat" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-[#1C4030]/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#1C4030]" />
                  </div>
                  <span className="font-medium text-[#1D1D1F]">{item.text}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================
          MODELS - Clean Cards
          ============================================ */}
      <section id="modele" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-[#1C4030] text-xs font-bold tracking-widest uppercase mb-4 block">
                Colecția Pi Caps
              </span>
              <h2 className="font-pirulen text-3xl md:text-4xl lg:text-5xl mb-4 text-[#1D1D1F]">
                Alege Capsula Perfectă
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Trei dimensiuni, un standard de calitate. Explorează fiecare model și descoperă care se potrivește cel mai bine vâziunii tale.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-20">
            {resortModels.map((model, idx) => (
              <AnimatedSection key={model.name} delay={0.1}>
                <div className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg group">
                      <Image
                        src={model.image}
                        alt={model.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1C4030] text-white rounded-full text-xs sm:text-sm font-bold">
                          {model.sqm} m²
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2">
                    <span className="text-gray-400 text-xs tracking-widest uppercase mb-2 block">{model.tag}</span>
                    <h3 className="font-pirulen text-4xl lg:text-5xl text-[#1D1D1F] mb-4">{model.name}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed mb-6">{model.description}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {model.specs.map((spec, sIdx) => (
                        <span key={sIdx} className="flex items-center gap-2 text-sm text-[#1D1D1F]">
                          <Check className="w-4 h-4 text-[#1C4030]" />
                          {spec}
                        </span>
                      ))}
                    </div>

                    <AntigravityButton
                      variant="primary"
                      href={`/modele/${model.name.toLowerCase()}`}
                      className="whitespace-nowrap"
                      withArrow={false} // Custom arrow logic used below, so disable internal arrow
                      magnetic={true}
                    >
                      {model.name}
                      <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 flex items-center justify-end">
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </AntigravityButton>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SMART FEATURES
          ============================================ */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <AnimatedSection>
              <span className="text-[#1C4030] text-xs font-bold tracking-widest uppercase mb-4 block">
                Tehnologie
              </span>
              <h2 className="font-pirulen text-3xl lg:text-4xl mb-6 text-[#1D1D1F]">
                Smart by Design
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Tehnologia nu este un afterthought, este integrată în pereții fiecărui PiCap.
              </p>
            </AnimatedSection>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {smartFeatures.map((feature, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-[#1C4030]/10 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-[#1C4030]" />
                    </div>
                    <h4 className="font-bold text-[#1D1D1F] text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PROCESS STEPS
          ============================================ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-[#1C4030] text-xs font-bold tracking-widest uppercase mb-4 block">
                Proces
              </span>
              <h2 className="font-pirulen text-3xl md:text-4xl text-[#1D1D1F]">
                Simplitate în Execuție
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-[#1C4030]/10 rounded-2xl flex items-center justify-center mb-6">
                    <span className="font-pirulen text-xl text-[#1C4030]">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-lg text-[#1D1D1F] mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ - Reference Style (Dark Expanded)
          ============================================ */}
      <section className="py-24 lg:py-32 bg-[#fafafa]">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="text-[#1C4030] text-xs font-bold tracking-widest uppercase mb-4 block">
                FAQ
              </span>
              <h2 className="font-pirulen text-3xl md:text-4xl text-[#1D1D1F]">
                Întrebări Frecvente
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${activeFaq === i
                    ? 'bg-[#1D1D1F] text-white shadow-xl'
                    : 'bg-white border border-gray-100 hover:shadow-md'
                    }`}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div>
                      <span className={`text-xs font-bold tracking-widest uppercase mb-2 block ${activeFaq === i ? 'text-white/60' : 'text-[#1C4030]'
                        }`}>
                        {faq.category}
                      </span>
                      <span className={`font-medium text-lg ${activeFaq === i ? 'text-white' : 'text-[#1D1D1F]'}`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeFaq === i
                      ? 'bg-white/10'
                      : 'bg-gray-100'
                      }`}>
                      {activeFaq === i ? (
                        <X className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#1D1D1F]" />
                      )}
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: activeFaq === i ? 'auto' : 0, opacity: activeFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-white/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CONTACT FORM - Using ProductContactForm
          ============================================ */}
      <section id="contact">
        <ProductContactForm />
      </section>
    </div>
  );
}