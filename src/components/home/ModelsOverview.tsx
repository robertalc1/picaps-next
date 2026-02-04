import React, { useRef } from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { AntigravityButton } from "@/components/ui/antigravity-button";
import { motion, useScroll, useTransform } from "framer-motion";

// Helper for Gamma Zoom Effect
const ZoomCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className="w-full">
      {children}
    </motion.div>
  );
};

export const ModelsOverview = () => {
  const data = [
    {
      title: (
        <div className="flex flex-col items-start gap-3">
          <span>Alfa</span>
          <span className="text-lg md:text-xl font-sans font-medium px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-900 shadow-sm tracking-wide">
            18m²
          </span>
        </div>
      ),
      action: (
        <AntigravityButton href="/modele/alfa" className="px-6 py-3" magnetic={true} withArrow={true}>
          Descoperă Alfa
        </AntigravityButton>
      ),
      content: (
        <ZoomCard>
          <div className="mb-8 group">
            <div className="relative h-64 md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-black/5">
              <Image
                src="/p-alfa/exterior1-alfa.jpeg"
                alt="Alfa Exterior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Compact și versatil, modelul Alfa este punctul de intrare perfect în lumea locuirii modulare.
              Ideal pentru un birou de grădină remote sau o cameră de oaspeți intimă.
            </p>
          </div>
        </ZoomCard>
      ),
    },
    {
      title: (
        <div className="flex flex-col items-start gap-3">
          <span>Beta</span>
          <span className="text-lg md:text-xl font-sans font-medium px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-900 shadow-sm tracking-wide">
            28m²
          </span>
        </div>
      ),
      action: (
        <AntigravityButton href="/modele/beta" className="px-6 py-3" magnetic={true} withArrow={true}>
          Descoperă Beta
        </AntigravityButton>
      ),
      content: (
        <ZoomCard>
          <div className="mb-8 group">
            <div className="relative h-64 md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-black/5">
              <Image
                src="/p-beta/exterior1-beta.jpeg"
                alt="Beta Exterior"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Echilibrul perfect între spațiu și eficiență. Modelul Beta oferă confort sporit pentru cupluri sau
              pentru cei care doresc un spațiu de creație extins, cu zone de living și dormit bine definite.
            </p>
          </div>
        </ZoomCard>
      ),
    },
    {
      title: (
        <div className="flex flex-col items-start gap-3">
          <span>Gamma</span>
          <span className="text-lg md:text-xl font-sans font-medium px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-900 shadow-sm tracking-wide">
            38m²
          </span>
        </div>
      ),
      action: (
        <AntigravityButton href="/modele/gamma" className="px-6 py-3" magnetic={true} withArrow={true}>
          Descoperă Gamma
        </AntigravityButton>
      ),
      content: (
        <ZoomCard>
          <div className="mb-8">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-black">
              <div className="relative h-80 md:h-[500px] w-full">
                <Image
                  src="/p-gamma/exterior2-gamma.jpeg"
                  alt="Gamma Exterior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Vârful de gamă, expresia supremă a designului Pi Caps. Modelul Gamma este o locuință completă,
              oferind spațiu generos, finisaje premium și posibilități nelimitate.
            </p>
          </div>
        </ZoomCard>
      ),
    },
  ];

  return (
    <section className="bg-white pt-12 md:pt-0">
      <Timeline data={data} />
    </section>
  );
};

export default ModelsOverview;