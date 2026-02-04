import { DesktopHero } from './DesktopHero';
import { ModelsShowcase } from './ModelsShowcase';

// =============================================================================
// HERO SECTION - Auto-Playing Frame Sequence + 3D Showcase Overlay
// =============================================================================

export const HeroSection = () => {
  return (
    <>
      {/* Hero with auto-playing frames - Works on both desktop & mobile */}
      <DesktopHero />

      {/* 3D Models Showcase - Slides over hero with overlay effect */}
      <ModelsShowcase />
    </>
  );
};

export default HeroSection;