"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

// =============================================================================
// HERO - Tesla-Inspired Premium Video Background
// Simple, elegant, and scannable design
// Content appears after 5 seconds, hides when video loops, reappears after 5s
// =============================================================================

export const DesktopHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle video load and loop
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(() => {
        // Autoplay was prevented, still show the video
        setIsLoaded(true);
      });
    };

    // When video ends and loops, hide content and show again after 5s
    const handleVideoLoop = () => {
      // Hide content immediately when video restarts
      setShowContent(false);
      // Clear any existing timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      // Show content again after 5 seconds
      timerRef.current = setTimeout(() => {
        setShowContent(true);
      }, 5000);
    };

    // Use 'seeking' event to detect when video loops back to start
    const handleSeeking = () => {
      if (video.currentTime < 1) {
        handleVideoLoop();
      }
    };

    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('seeking', handleSeeking);

    // If video is already ready
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('seeking', handleSeeking);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Show content after 5 seconds on initial load
  useEffect(() => {
    if (!isLoaded) return;

    timerRef.current = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isLoaded]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Scroll-based logo animation
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Logo fades in as you scroll (0% scroll = 0 opacity, 50% scroll = 85% opacity)
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.85]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 h-screen w-full overflow-hidden bg-black"
      style={{ zIndex: 1 }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/intro-picaps.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/first.webp"
      />

      {/* Large Centered Logo - Appears on scroll at 85% opacity */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-[5]"
        style={{ opacity: logoOpacity, scale: logoScale }}
      >
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
          <Image
            src="/logo-picaps.png"
            alt="PI CAPS Logo"
            fill
            className="object-contain brightness-0 invert"
            priority
          />
        </div>
      </motion.div>

      {/* Subtle dark overlay for text contrast - fades in with content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        )}
      </AnimatePresence>

      {/* Hero Content - Tesla-style centered layout */}
      <div className="absolute inset-0 flex flex-col items-center justify-between z-10 py-[15vh]">
        {/* Top Spacer */}
        <div />

        {/* Center Content */}
        <div className="text-center px-6">
          <AnimatePresence>
            {showContent && (
              <>
                {/* Main Headline - "Trăiește Inteligent." */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="font-pirulen text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-2 tracking-tight"
                >
                  Trăiește Inteligent.
                </motion.h1>

                {/* Second line - "Oriunde." */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="font-pirulen text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/70 tracking-tight"
                >
                  Oriunde.
                </motion.h2>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Section - Tesla-style buttons */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center gap-6"
            >
              {/* CTA Buttons - Side by side on all screen sizes */}
              <div className="flex flex-row gap-2 sm:gap-4">
                <a
                  href="/modele"
                  className="group w-[150px] sm:w-[200px] py-3 bg-white text-black text-xs sm:text-sm font-medium rounded tracking-wide hover:bg-white/90 transition-all duration-300 text-center"
                >
                  Descoperă modelele
                </a>
                <a
                  href="/contact"
                  className="group w-[150px] sm:w-[200px] py-3 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-medium rounded tracking-wide hover:bg-white/20 transition-all duration-300 text-center border border-white/20"
                >
                  Solicită ofertă
                </a>
              </div>

              {/* Scroll Indicator */}
              <button
                onClick={scrollToContent}
                className="mt-4 text-white/50 hover:text-white/80 transition-colors duration-300"
                aria-label="Scroll down"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Loading State - Minimal */}
      {!isLoaded && (
        <motion.div
          className="absolute inset-0 z-50 bg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default DesktopHero;