"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

// All FAQs organized by category
const faqCategories = [
  {
    id: "general",
    name: "General",
    faqs: [
      {
        question: "Ce sunt capsulele modulare PI CAPS?",
        answer:
          "Capsulele modulare PI CAPS sunt locuințe prefabricate premium, construite în fabrica noastră din România și livrate la cheie în locația ta. Spre deosebire de construcțiile tradiționale, capsulele modulare sunt gata în 100 de zile, au costuri transparente și pot fi relocate ulterior. Disponibile în 3 dimensiuni: Alpha 18m², Beta 28m² și Gamma 38m².",
      },
      {
        question: "Care este diferența dintre o capsulă modulară și o casă tradițională?",
        answer:
          "O capsulă modulară PI CAPS este construită în fabrică în condiții controlate, ceea ce garantează calitate uniformă și termen cert de livrare (100 zile). O casă tradițională durează 12-24 luni, are costuri imprevizibile și este dependentă de condițiile meteo. Capsulele modulare sunt și eco-friendly, cu izolație superioară pentru -25°C și consum energetic redus.",
      },
      {
        question: "Pot folosi o capsulă PI CAPS ca locuință permanentă?",
        answer:
          "Da! Modelul Gamma 38m² este proiectat special ca locuință permanentă completă, cu living spațios, dormitor, bucătărie și baie premium. Toate capsulele PI CAPS sunt construite cu materiale de calitate, izolație pentru -25°C și pot fi conectate la toate utilitățile exact ca o casă tradițională.",
      },
      {
        question: "Ai nevoie de autorizație de construcție?",
        answer: "În majoritatea situațiilor, capsulele PiCaps sunt încadrate ca structuri modulare/mobile, ceea ce poate permite amplasarea fără autorizație de construcție. Totuși, legislația poate varia în funcție de localitate, destinația utilizării și reglementările urbanistice locale. Echipa PiCaps oferă suport și consultanță pentru verificarea condițiilor legale aplicabile fiecărui proiect.",
      },
      {
        question: "Cât durează producția și livrarea?",
        answer: "Termenul standard este de aproximativ 100 de zile: 30 de zile pentru producție și 70 de zile pentru transport și livrare. Montajul se realizează la locație, în funcție de acces și configurație.",
      },
      {
        question: "Ce utilități sunt necesare pentru instalare?",
        answer: "Pentru funcționare, capsula necesită alimentare cu energie electrică, apă și canalizare sau fosă septică, în funcție de locație. PiCaps poate oferi recomandări tehnice adaptate fiecărui amplasament.",
      },
      {
        question: "Pot reloca capsula ulterior?",
        answer: "Da. Capsulele PiCaps sunt proiectate pentru a putea fi demontate și relocate, în funcție de condițiile terenului și accesul logistic.",
      },
      {
        question: "Pot personaliza capsula?",
        answer: "Da. Fiecare capsulă poate fi configurată personalizat, inclusiv compartimentarea și opțiunile interioare, cu ajutorul configuratorului 3D, înainte de începerea producției.",
      },
      {
        question: "Unde pot vedea capsulele PiCaps?",
        answer: "Capsulele PiCaps pot fi vizitate în showroom-ul nostru din București, situat în zona Aeroportului Otopeni. Vizitele se fac pe bază de programare, pentru a putea oferi consultanță dedicată fiecărui proiect. Programările se fac de luni până duminică, între orele 09:00 – 18:00.",
      },
    ],
  },
  {
    id: "montaj",
    name: "Producție & Montaj",
    faqs: [
      {
        question: "Cine se ocupă de montaj?",
        answer: "Montajul este realizat de echipa PiCaps. Capsula poate fi livrată complet dacă accesul permite, sau asamblată direct la locație, inclusiv în zone cu acces dificil.",
      },
      {
        question: "Este potrivită pentru utilizare pe timp de iarnă?",
        answer: "Da. Capsulele PiCaps sunt concepute pentru utilizare pe tot parcursul anului, cu izolație aplicată manual și performanță termică sigură până la –25°C.",
      },
      {
        question: "Din ce materiale sunt construite Capsulele PiCaps?",
        answer: "Capsulele sunt realizate din materiale conforme cu standardele europene: cadru structural din oțel galvanizat, carcasă exterioară din aluminiu, izolație poliuretanică aplicată manual, sticlă securizată LOW-E, pardoseală SPC ecologică și instalații electrice protejate.",
      },
    ],
  },
  {
    id: "tehnic",
    name: "Specificații tehnice",
    faqs: [
      {
        question: "Ce tip de alimentare electrică este necesară?",
        answer: "Capsulele PiCaps funcționează cu alimentare monofazică (230V). La cerere, se pot analiza soluții trifazice, în funcție de configurație și consum.",
      },
      {
        question: "Există apă caldă în capsulă?",
        answer: "Da. Fiecare capsulă este dotată cu instalație pentru apă caldă.",
      },
      {
        question: "Pot fi montate panouri solare dacă nu există curent electric?",
        answer: "Da. Sunt disponibile soluții cu panouri solare, dimensionate pentru consumul calculat al capsulei.",
      },
    ],
  },
  {
    id: "garantie",
    name: "Garanție & Plată",
    faqs: [
      {
        question: "Ce garanție oferă PiCaps?",
        answer: "Capsulele beneficiază de garanție pentru structură, cu posibilitate de extindere, precum și garanție separată pentru echipamentele incluse, conform specificațiilor contractuale.",
      },
      {
        question: "Cum funcționează sistemul de plată?",
        answer: "Procesul de plată este structurat în două etape: 50% avans la confirmarea comenzii, pentru demararea producției, și 50% diferență înainte de livrare, după finalizarea capsulei și pregătirea pentru transport.",
      },
      {
        question: "Oferta include TVA și transport?",
        answer: "Prețul comunicat în ofertă nu include TVA, acesta fiind aplicabil în funcție de legislația fiscală. Costul transportului este calculat separat, în funcție de locație și distanță, și este comunicat transparent înainte de confirmarea comenzii. Locația de referință pentru livrare este București.",
      },
    ],
  },
  {
    id: "business",
    name: "PiCaps Business Resort",
    faqs: [
      {
        question: "Ce înseamnă PiCaps Business Resort?",
        answer: "PiCaps Business Resort este un model de investiție destinat dezvoltării de mini-resorturi, unități de cazare modulare și proiecte turistice. Clientul achiziționează minimum 4 capsule, configurate unitar, pentru exploatare comercială.",
      },
      {
        question: "Cum funcționează finanțarea pentru Business Resort?",
        answer: "Pentru proiectele PiCaps Business Resort, oferim suport în structurarea unei soluții de finanțare adaptate proiectului, etapizarea achiziției și optimizarea investiției pentru exploatare B2B. Detaliile sunt stabilite individual.",
      },
    ],
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    let results: { question: string; answer: string; category: string; categoryName: string }[] = [];
    
    faqCategories.forEach(category => {
      category.faqs.forEach(faq => {
        if (activeCategory === "all" || activeCategory === category.id) {
          if (
            searchQuery === "" ||
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
          ) {
            results.push({
              ...faq,
              category: category.id,
              categoryName: category.name,
            });
          }
        }
      });
    });
    
    return results;
  }, [searchQuery, activeCategory]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      }))
    ),
  };

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="font-pirulen text-4xl lg:text-5xl xl:text-6xl text-[#1d1d1f] mb-6">
              Întrebări frecvente
            </h1>
            <p className="text-[#6e6e73] text-lg mb-10">
              Tot ce trebuie să știi despre capsulele PiCaps
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#86868b]" />
              <input
                type="text"
                placeholder="Caută o întrebare..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-5 py-4 bg-white rounded-2xl border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none focus:border-black/10 focus:shadow-[0_2px_20px_rgba(0,0,0,0.08)] transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters + FAQs */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Sidebar - Categories */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-64 flex-shrink-0"
            >
              <div className="lg:sticky lg:top-32">
                <h3 className="text-[#86868b] text-xs font-semibold uppercase tracking-wider mb-4">
                  Categorii
                </h3>
                <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-5 px-5 lg:mx-0 lg:px-0">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                      activeCategory === "all"
                        ? "bg-[#1d1d1f] text-white"
                        : "bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]"
                    }`}
                  >
                    Toate ({faqCategories.reduce((acc, cat) => acc + cat.faqs.length, 0)})
                  </button>
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                        activeCategory === category.id
                          ? "bg-[#1d1d1f] text-white"
                          : "bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed]"
                      }`}
                    >
                      {category.name} ({category.faqs.length})
                    </button>
                  ))}
                </nav>
              </div>
            </motion.aside>

            {/* FAQs List */}
            <div className="flex-1 min-w-0">
              {filteredFaqs.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <p className="text-[#86868b] text-lg mb-2">
                    Nu am găsit rezultate pentru "{searchQuery}"
                  </p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-primary font-medium"
                  >
                    Șterge căutarea
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-3">
                  {filteredFaqs.map((faq, index) => {
                    const faqKey = `${faq.category}-${index}`;
                    const isOpen = openIndex === faqKey;

                    return (
                      <motion.div
                        key={faqKey}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : faqKey)}
                          className={`
                            w-full text-left transition-all duration-300
                            ${isOpen 
                              ? 'bg-[#1d1d1f] rounded-2xl' 
                              : 'bg-[#fafafa] hover:bg-[#f0f0f0] rounded-2xl'
                            }
                          `}
                        >
                          <div className="p-5 lg:p-6">
                            {/* Category Tag */}
                            {activeCategory === "all" && (
                              <span className={`inline-block text-[10px] font-semibold uppercase tracking-wider mb-2 ${
                                isOpen ? 'text-white/50' : 'text-[#86868b]'
                              }`}>
                                {faq.categoryName}
                              </span>
                            )}
                            
                            <div className="flex items-start justify-between gap-4">
                              <span className={`font-medium leading-snug transition-colors ${
                                isOpen ? 'text-white' : 'text-[#1d1d1f]'
                              }`}>
                                {faq.question}
                              </span>
                              <div className={`
                                w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300
                                ${isOpen 
                                  ? 'bg-white/20 rotate-45' 
                                  : 'bg-white'
                                }
                              `}>
                                <span className={`text-lg leading-none ${
                                  isOpen ? 'text-white' : 'text-[#1d1d1f]'
                                }`}>
                                  +
                                </span>
                              </div>
                            </div>
                            
                            <AnimatePresence>
                              {isOpen && (
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
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto"
          >
            <h2 className="font-pirulen text-2xl lg:text-3xl text-[#1d1d1f] mb-4">
              Nu ai găsit răspunsul?
            </h2>
            <p className="text-[#6e6e73] mb-8">
              Echipa noastră îți răspunde în cel mai scurt timp
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1d1d1f] text-white rounded-full font-semibold hover:bg-black transition-colors"
            >
              Contactează-ne
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}