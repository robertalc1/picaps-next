"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Only 5 most important questions for homepage
const homepageFaqs = [
  {
    question: "Cât durează producția și livrarea?",
    answer: "Termenul standard este de aproximativ 100 de zile: 30 de zile pentru producție și 70 de zile pentru transport și livrare. Montajul se realizează la locație.",
  },
  {
    question: "Ai nevoie de autorizație de construcție?",
    answer: "În majoritatea situațiilor, capsulele PiCaps sunt încadrate ca structuri modulare/mobile. Legislația poate varia în funcție de localitate. Echipa PiCaps oferă consultanță pentru fiecare proiect.",
  },
  {
    question: "Ce utilități sunt necesare?",
    answer: "Pentru funcționare, capsula necesită alimentare cu energie electrică, apă și canalizare sau fosă septică. PiCaps oferă recomandări tehnice pentru fiecare amplasament.",
  },
  {
    question: "Pot reloca capsula ulterior?",
    answer: "Da. Capsulele PiCaps sunt proiectate pentru a putea fi demontate și relocate, în funcție de condițiile terenului și accesul logistic.",
  },
  {
    question: "Cum funcționează sistemul de plată?",
    answer: "50% avans la confirmarea comenzii pentru demararea producției și 50% diferență înainte de livrare, după finalizarea capsulei.",
  },
];

export const FAQPreview = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-10 lg:py-16 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header - Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 lg:mb-10"
          >
            <h2 className="font-pirulen text-3xl lg:text-4xl xl:text-5xl text-[#1d1d1f] mb-4">
              Întrebări frecvente
            </h2>
            <p className="text-[#6e6e73]">
              Răspunsuri rapide la cele mai comune întrebări
            </p>
          </motion.div>

          {/* FAQ Items - Clean Design */}
          <div className="space-y-3">
            {homepageFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`
                    w-full text-left transition-all duration-300
                    ${openIndex === index
                      ? 'bg-[#1d1d1f] rounded-2xl'
                      : 'bg-white hover:bg-white/80 rounded-2xl border border-black/[0.04] shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                    }
                  `}
                >
                  <div className="p-5 lg:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <span className={`font-medium transition-colors ${openIndex === index ? 'text-white' : 'text-[#1d1d1f]'
                        }`}>
                        {faq.question}
                      </span>
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                        ${openIndex === index
                          ? 'bg-white/20 rotate-45'
                          : 'bg-[#f5f5f7]'
                        }
                      `}>
                        <span className={`text-xl leading-none ${openIndex === index ? 'text-white' : 'text-[#1d1d1f]'
                          }`}>
                          +
                        </span>
                      </div>
                    </div>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/70 leading-relaxed pt-4 pr-12">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* CTA to full FAQ page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[#1d1d1f] font-medium hover:gap-3 transition-all"
            >
              Vezi toate întrebările
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;