"use client";

import Link from "next/link";
import { Check } from "lucide-react";

export const SEOTextSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <h2 className="font-pirulen text-3xl lg:text-4xl text-[#1D1D1F] mb-6">
            Capsule Modulare Premium în România
          </h2>

          <p className="text-[#1D1D1F]/70 text-lg leading-relaxed mb-6">
            Capsulele modulare PI CAPS reprezintă o nouă generație de locuințe prefabricate —
            construite integral în fabrica noastră din România, din materiale certificate european,
            și livrate complet echipate în locația ta în doar 100 de zile. Spre deosebire de
            construcțiile clasice, o capsulă modulară PI CAPS îți oferă certitudine: preț fix,
            termen garantat și calitate uniformă, indiferent de condițiile meteo sau de
            disponibilitatea meșterilor. De la studio compact la locuință permanentă, fiecare
            capsulă este gândită pentru viața modernă — eficientă energetic, estetică și
            relocabilă oriunde ai nevoie.
          </p>

          <h3 className="font-pirulen text-2xl text-[#1D1D1F] mb-4 mt-10">
            De ce să alegi PI CAPS pentru casa ta modulară?
          </h3>

          <ul className="space-y-3 mb-8">
            {[
              "Livrare garantată în 100 de zile (30 producție + 70 transport și montaj)",
              "Prețuri transparente, fără costuri ascunse — știi exact ce plătești",
              "Fără autorizație de construcție în majoritatea cazurilor",
              "Garanție 2 ani structură + 1 an echipamente incluse",
              "Producție proprie în România — control total al calității, de la structură la finisaje",
              "Posibilitate relocare capsulă în orice moment, oriunde în țară",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1C4030]/10 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#1C4030]" />
                </span>
                <span className="text-[#1D1D1F]/80 text-base">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-pirulen text-2xl text-[#1D1D1F] mb-6 mt-10">
            Modele de Capsule Modulare Disponibile
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Alpha",
                size: "18m²",
                desc: "Compact și versatil — ideal pentru studio, birou sau cameră de oaspeți.",
                href: "/modele/alpha",
              },
              {
                name: "Beta",
                size: "28m²",
                desc: "Echilibru perfect — dormitor separat, baie completă, zonă de living.",
                href: "/modele/beta",
              },
              {
                name: "Gamma",
                size: "38m²",
                desc: "Locuință completă — living spațios, dormitor master, bucătărie și baie premium.",
                href: "/modele/gamma",
              },
            ].map((model) => (
              <Link
                key={model.name}
                href={model.href}
                className="group block p-6 rounded-2xl border border-[#1D1D1F]/10 hover:border-[#1C4030]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-pirulen text-xl text-[#1D1D1F]">
                    {model.name}
                  </span>
                  <span className="text-sm font-semibold px-3 py-1 bg-[#1C4030]/10 text-[#1C4030] rounded-full">
                    {model.size}
                  </span>
                </div>
                <p className="text-[#1D1D1F]/60 text-sm mb-4 leading-relaxed">
                  {model.desc}
                </p>
                <p className="font-semibold text-[#1C4030] text-base group-hover:underline transition-colors">
                  Preț la cerere
                </p>
              </Link>
            ))}
          </div>

          <p className="text-[#1D1D1F]/70 text-lg leading-relaxed">
            Nu ești sigur care model ți se potrivește? Echipa PI CAPS îți oferă consultanță
            gratuită pentru a alege capsula ideală în funcție de suprafața disponibilă,
            buget și destinația utilizării.{" "}
            <Link
              href="/contact"
              className="text-[#1C4030] font-semibold hover:underline underline-offset-2"
            >
              Contactează-ne astăzi
            </Link>{" "}
            și primești un răspuns în maximum 24 de ore.
          </p>

        </div>
      </div>
    </section>
  );
};

export default SEOTextSection;
