"use client";

import dynamic from "next/dynamic";
import { DesktopHero } from './DesktopHero';
import { MobilHero } from './MobilHero';

const ModelsShowcase = dynamic(
  () => import('./ModelsShowcase').then((mod) => ({ default: mod.ModelsShowcase })),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
      </div>
    ),
  }
);

// =============================================================================
// HERO SECTION - Responsive Video Hero + 3D Showcase Overlay
// Desktop video on md+ screens, Mobile video on smaller screens
// =============================================================================

export const HeroSection = () => {
  return (
    <>
      {/* Mobile Hero - visible only on small screens */}
      <div className="block md:hidden">
        <MobilHero />
      </div>

      {/* Desktop Hero - visible only on md+ screens */}
      <div className="hidden md:block">
        <DesktopHero />
      </div>

      {/* 3D Models Showcase - Dynamically loaded to reduce initial bundle */}
      <ModelsShowcase />
    </>
  );
};

export default HeroSection;