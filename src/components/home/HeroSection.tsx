"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { DesktopHero } from './DesktopHero';
import { MobilHero } from './MobilHero';

const ModelsShowcase = dynamic(
  () => import('./ModelsShowcase').then((mod) => ({ default: mod.ModelsShowcase })),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen bg-[#fafaf9] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-neutral-200 border-t-neutral-600 rounded-full animate-spin" />
      </div>
    ),
  }
);

// =============================================================================
// HERO SECTION - Responsive Video Hero + 3D Showcase Overlay
// Only ONE hero video is mounted (per viewport) and the heavy 3D showcase is
// lazy-mounted on scroll, to keep the initial load fast.
// =============================================================================

export const HeroSection = () => {
  // Decide which hero to load on the client so only ONE video downloads
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Mount the heavy 3D showcase only once the user scrolls toward it
  const showcaseRef = useRef<HTMLDivElement>(null);
  const [showShowcase, setShowShowcase] = useState(false);
  useEffect(() => {
    const el = showcaseRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowShowcase(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Responsive hero — render only the matching video to avoid a double download */}
      {isMobile === undefined ? (
        <div className="h-screen w-full bg-black" />
      ) : isMobile ? (
        <MobilHero />
      ) : (
        <DesktopHero />
      )}

      {/* 3D Models Showcase - lazy-mounted on scroll to keep it off the initial load */}
      <div ref={showcaseRef} className="relative z-10 min-h-screen bg-[#fafaf9]">
        {showShowcase && <ModelsShowcase />}
      </div>
    </>
  );
};

export default HeroSection;
