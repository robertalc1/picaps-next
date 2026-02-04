"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

// Noise Texture (Subtle Grain)
const NOISE_SVG = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`;

interface FluidSectionProps {
    children: React.ReactNode;
    className?: string; // Container class
    classNameContent?: string; // Content wrapper class
    topBlur?: boolean; // Enable top ethereal gradient
    bottomBlur?: boolean; // Enable bottom ethereal gradient
    meltTop?: boolean; // Enable scroll-linked mask for top edge
    meltBottom?: boolean; // Enable scroll-linked mask for bottom edge
    id?: string;
}

export const FluidSection = ({
    children,
    className,
    classNameContent,
    topBlur = false,
    bottomBlur = false,
    meltTop = false,
    meltBottom = false,
    id,
}: FluidSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Scroll-Linked Masking Logic
    // We always call useTransform to satisfy Rules of Hooks.

    // Top Stop: 20% -> 0% (reveals top)
    const topStopRaw = useTransform(scrollYProgress, [0, 0.15], ["20%", "0%"]);
    const topStop = meltTop ? topStopRaw : "0%";

    // Bottom Stop: 100% -> 80% (fades bottom)
    const bottomStopRaw = useTransform(scrollYProgress, [0.85, 1], ["100%", "80%"]);
    const bottomStop = meltBottom ? bottomStopRaw : "100%";

    const maskGradient = useMotionTemplate`linear-gradient(to bottom, 
    transparent 0%, 
    black ${topStop}, 
    black ${bottomStop}, 
    transparent 100%
  )`;

    const computedMask = (meltTop || meltBottom) ? maskGradient : undefined;

    return (
        <section
            ref={ref}
            id={id}
            className={cn("relative w-full", className)}
        >
            {/* Top Ethereal Gradient (Frosted Glass) */}
            {topBlur && (
                <div
                    className="absolute top-0 left-0 right-0 h-32 sm:h-48 z-20 pointer-events-none select-none"
                    style={{
                        background: "linear-gradient(to bottom, #FAFAFA, rgba(250,250,250,0))",
                        maskImage: "linear-gradient(to bottom, black, transparent)"
                    }}
                >
                    {/* Noise Overlay applied to the gradient area */}
                    <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: `url("${NOISE_SVG}")` }} />
                </div>
            )}

            {/* Main Content with Scroll Logic */}
            <motion.div
                className={cn("w-full h-full", classNameContent)}
                style={{ maskImage: computedMask, WebkitMaskImage: computedMask }}
            >
                {children}
            </motion.div>

            {/* Bottom Ethereal Gradient (Frosted Glass) */}
            {bottomBlur && (
                <div
                    className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 z-20 pointer-events-none select-none"
                    style={{
                        background: "linear-gradient(to top, #FAFAFA, rgba(250,250,250,0))",
                        maskImage: "linear-gradient(to top, black, transparent)"
                    }}
                >
                    <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: `url("${NOISE_SVG}")` }} />
                </div>
            )}
        </section>
    );
};
