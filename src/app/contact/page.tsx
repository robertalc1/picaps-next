"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { ContactForm } from "@/components/ProductContactForm";
import useSmoothScroll from "@/hooks/useSmoothScroll";


export default function ContactPage() {
  useSmoothScroll();


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
                Contactează-ne
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="body-text text-muted-foreground"
              >
                Suntem aici să răspundem la toate întrebările tale. Completează
                formularul sau contactează-ne direct.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-pirulen text-3xl text-foreground mb-8">
                  Informații Contact
                </h2>

                <div className="space-y-6 mb-12">
                  <a
                    href="tel:+40727511563"
                    className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-inter font-semibold text-foreground">
                        Telefon
                      </p>
                      <p className="text-muted-foreground">+40 727 511 563</p>
                      <p className="text-sm text-primary mt-1">Apelează acum</p>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@picaps.ro"
                    className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-inter font-semibold text-foreground">
                        Email
                      </p>
                      <p className="text-muted-foreground">contact@picaps.ro</p>
                      <p className="text-sm text-primary mt-1">Trimite email</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-inter font-semibold text-foreground">
                        Showroom
                      </p>
                      <p className="text-muted-foreground">București, România</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Vizite doar cu programare
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-inter font-semibold text-foreground">
                        Program
                      </p>
                      <p className="text-muted-foreground">
                        Luni - Vineri: 09:00 - 18:00
                      </p>
                      <p className="text-muted-foreground">
                        Sâmbătă: 10:00 - 14:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="aspect-video rounded-2xl bg-secondary overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <span className="text-muted-foreground">
                      Hartă interactivă
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="bg-secondary/50 rounded-3xl p-8 lg:p-10 border border-border/50">
                  <h2 className="font-pirulen text-2xl text-foreground mb-2">
                    Trimite un Mesaj
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Completează formularul și te contactăm în 24 de ore.
                  </p>

                  <ContactForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}