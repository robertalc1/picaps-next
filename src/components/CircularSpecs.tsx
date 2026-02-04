"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Home,
  Thermometer,
  PanelTop,
  Lightbulb,
  ChevronRight,
} from "lucide-react";

const specCategories = [
  {
    id: "interior",
    icon: Home,
    label: "Interior și finisaje",
    items: [
      "Pardoseală SPC ecologică, rezistentă la umiditate și uzură",
      "Pereți interiori finisați cu materiale moderne, ușor de întreținut",
      "Baie complet echipată cu finisaje rezistente",
    ],
  },
  {
    id: "structura",
    icon: Layers,
    label: "Structură și exterior",
    items: [
      "Cadru structural din oțel galvanizat, cu grosimi optimizate pentru rezistență și protecție anticorozivă",
      "Carcasă exterioară din aluminiu, ușoară și durabilă, rezistentă la intemperii",
      "Finisaj exterior tratat pentru protecție UV și stabilitate în timp",
    ],
  },
  {
    id: "izolatie",
    icon: Thermometer,
    label: "Izolație și eficiență termică",
    items: [
      "Izolație poliuretanică aplicată manual, strat cu strat, pentru etanșare corectă și performanță termică ridicată",
      "Proiectată pentru utilizare sigură inclusiv la temperaturi de până la –25°C",
    ],
  },
  {
    id: "tamplarie",
    icon: PanelTop,
    label: "Tâmplărie și vitraje",
    items: [
      "Sticlă securizată LOW-E, pentru izolație termică și control solar",
      "Vitraje laminate pentru siguranță și durabilitate la apă și umiditate",
    ],
  },
  {
    id: "instalatii",
    icon: Lightbulb,
    label: "Instalații și echipamente",
    items: [
      "Instalații electrice protejate, cu cabluri izolate și trasee sigure",
      "Uși și elemente interioare din aluminiu, pentru un aspect modern și durabilitate",
      "Iluminare ambientală integrată, pentru confort și estetică",
    ],
  },
];

export const CircularSpecs = () => {
  const [activeSpec, setActiveSpec] = useState<string | null>(null);

  return (
    <section className="py-12 lg:py-20 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-14"
        >
          <span className="text-primary text-xs lg:text-sm font-semibold uppercase tracking-wider">
            Materiale & Construcție
          </span>
          <h2 className="font-pirulen text-2xl lg:text-4xl text-foreground mt-3">
            Calitate Premium
          </h2>
        </motion.div>

        {/* Specs Grid - Clean Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {specCategories.map((spec, index) => {
            const isActive = activeSpec === spec.id;
            const Icon = spec.icon;

            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <motion.button
                  onClick={() => setActiveSpec(isActive ? null : spec.id)}
                  className={`
                    w-full text-left p-5 lg:p-6 rounded-2xl transition-all duration-300
                    border group
                    ${isActive
                      ? "bg-foreground text-background border-foreground shadow-xl"
                      : "bg-background text-foreground border-border/50 hover:border-primary/30 hover:shadow-lg"
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`
                      w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center flex-shrink-0
                      transition-colors duration-300
                      ${isActive
                        ? "bg-background/20"
                        : "bg-neutral-100"
                      }
                    `}>
                      <Icon className={`
                        w-5 h-5 lg:w-6 lg:h-6 transition-colors duration-300
                        ${isActive ? "text-background" : "text-foreground"}
                      `} />
                    </div>

                    {/* Label */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`
                        font-semibold text-sm lg:text-base leading-tight
                        transition-colors duration-300
                        ${isActive ? "text-background" : "text-foreground"}
                      `}>
                        {spec.label}
                      </h3>
                      <p className={`
                        text-xs mt-1 transition-colors duration-300
                        ${isActive ? "text-background/70" : "text-muted-foreground"}
                      `}>
                        {spec.items.length} caracteristici
                      </p>
                    </div>

                    {/* Arrow */}
                    <ChevronRight className={`
                      w-5 h-5 flex-shrink-0 transition-all duration-300
                      ${isActive
                        ? "text-background rotate-90"
                        : "text-muted-foreground group-hover:text-primary group-hover:translate-x-1"
                      }
                    `} />
                  </div>
                </motion.button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 px-2">
                        <ul className="space-y-3">
                          {spec.items.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground leading-relaxed">
                                {item}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Helper Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          Apasă pe o categorie pentru detalii
        </motion.p>
      </div>
    </section>
  );
};

export default CircularSpecs;