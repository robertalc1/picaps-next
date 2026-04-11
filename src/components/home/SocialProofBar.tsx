"use client";

// =============================================================================
// SOCIAL PROOF BAR - Simple Full-Screen Video Section
// No scroll effects, just a clean fullscreen video
// =============================================================================

export const SocialProofBar = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        src="/Vid 1.mp4"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </section>
  );
};

export default SocialProofBar;