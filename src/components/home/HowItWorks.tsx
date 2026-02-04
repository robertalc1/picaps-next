"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Compass, Settings, Factory, CheckCircle2 } from 'lucide-react';

// =============================================================================
// HOW IT WORKS - Clean Professional Horizontal Steps
// Apple-inspired design with numbered steps
// =============================================================================

const steps = [
  {
    number: "1",
    title: "Alegi",
    description: "Explorează modelele și selectează capsula potrivită pentru tine.",
    icon: Compass,
  },
  {
    number: "2",
    title: "Configurăm",
    description: "Personalizăm împreună finisajele, materialele și dotările.",
    icon: Settings,
  },
  {
    number: "3",
    title: "Producem",
    description: "Fabricăm capsula în 30 de zile cu standarde premium.",
    icon: Factory,
  },
  {
    number: "4",
    title: "Instalăm",
    description: "Montaj profesionist în locația aleasă de tine.",
    icon: CheckCircle2,
  },
];

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative py-12 lg:py-20 bg-white overflow-hidden">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 mb-10 lg:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-pirulen text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-4"
          >
            Cum Funcționează
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-500 text-lg max-w-xl mx-auto"
          >
            De la idee la realitate, în patru pași simpli
          </motion.p>
        </motion.div>
      </div>

      {/* Steps Grid - Desktop: Horizontal, Mobile: Vertical */}
      <div className="max-w-6xl mx-auto px-6">
        {/* Desktop Layout - 4 columns */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-neutral-200">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="h-full bg-[#1C4030] origin-left"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="relative text-center"
            >
              {/* Step Number Circle */}
              <div className="relative z-10 mx-auto mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.15, type: "spring" }}
                  className="w-16 h-16 rounded-full bg-[#1C4030] text-white flex items-center justify-center mx-auto shadow-lg"
                >
                  <span className="font-pirulen text-xl">{step.number}</span>
                </motion.div>
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#1C4030]/5 flex items-center justify-center mx-auto mb-4">
                <step.icon size={22} strokeWidth={1.5} className="text-[#1C4030]" />
              </div>

              {/* Title */}
              <h3 className="font-pirulen text-xl text-[#1a1a1a] mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout - Vertical List */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex gap-5"
            >
              {/* Number Circle */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#1C4030] text-white flex items-center justify-center shadow-md">
                  <span className="font-pirulen text-lg">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="font-pirulen text-lg text-[#1a1a1a] mb-1">
                  {step.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1C4030]/5 rounded-full">
            <div className="w-2 h-2 bg-[#1C4030] rounded-full animate-pulse" />
            <span className="text-[#1C4030] font-medium text-sm">
              Gata în 30 de zile
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;