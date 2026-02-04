"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { AntigravityButton } from "@/components/ui/antigravity-button";

const navLinks = [
  { href: "/modele", label: "Modele", hasDropdown: true },
  { href: "/pi-business-resort", label: "Pi Business Resort" },
  { href: "/galerie", label: "Galerie" },
  { href: "/despre", label: "Despre" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const capsuleModels = [
  {
    slug: "alfa",
    name: "Alfa",
    size: "18m²",
    image: "/p-alfa/alfa2-bg.jpeg",
  },
  {
    slug: "beta",
    name: "Beta",
    size: "28m²",
    image: "/p-beta/beta2-bg.jpeg",
  },
  {
    slug: "gamma",
    name: "Gamma",
    size: "38m²",
    image: "/p-gamma/gamma2-bg.jpeg",
  },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileModelsOpen, setMobileModelsOpen] = useState(false);
  const [modelsDropdownOpen, setModelsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isResortPage = pathname === "/pi-business-resort";

  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Detect when scrolled past the hero section (approximately viewport height)
      setPastHero(window.scrollY > window.innerHeight * 0.8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileModelsOpen(false);
    setModelsDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setModelsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setModelsDropdownOpen(false);
    }, 150);
  };

  const isLight = scrolled || (!isHomePage && !isResortPage);

  // Hide header when on homepage/resort page hero (not scrolled yet)
  const hideOnHero = (isHomePage || isResortPage) && !scrolled;

  return (
    <>
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4 sm:pt-6 pointer-events-none transition-all duration-500",
          hideOnHero ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
        )}
      >
        <div className="mx-auto max-w-7xl">
          <nav
            className={cn(
              "pointer-events-auto",
              "flex items-center justify-between",
              "px-6 sm:px-8 py-4", // Increased padding
              "rounded-2xl", // Architectural shape
              "border transition-all duration-500 ease-out",
              isLight
                ? pastHero
                  ? "bg-white border-gray-200 shadow-[0_4px_30px_rgba(0,0,0,0.08)]" // More prominent shadow when past hero
                  : "bg-white border-white/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
                : "bg-white/80 backdrop-blur-xl border-white/20 shadow-sm"
            )}
          >
            {/* Logo - Increased size & clarity */}
            <Link href="/" className="flex items-center flex-shrink-0 mr-8">
              <Image
                src="/logo-picaps.png"
                alt="PI CAPS"
                width={180}
                height={50}
                className="h-10 sm:h-12 w-auto"
                priority
                unoptimized
              />
            </Link>

            {/* Desktop Nav - Refined spacing */}
            <div className="hidden lg:flex items-center justify-center gap-1 flex-1 px-4">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
                  onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-2.5 rounded-xl text-[13px] font-sans font-medium tracking-wide transition-all duration-300 whitespace-nowrap inline-flex items-center gap-1",
                      "text-gray-500 hover:text-primary hover:bg-black/5",
                      pathname === link.href && "text-primary bg-black/5",
                      link.href === "/pi-business-resort" && !pathname.includes("pi-business-resort") && "text-primary font-semibold"
                    )}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Desktop CTAs - Single Premium Button */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0 ml-4">
              <AntigravityButton
                variant="primary"
                href="/pi-business-resort#aplica"
                className="text-[13px]"
                magnetic={true}
              >
                Devino investitor
              </AntigravityButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -mr-1 rounded-full transition-all duration-300 text-gray-600 hover:bg-gray-100/80"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>

          {/* ===== DESKTOP MEGA MENU ===== */}
          <AnimatePresence>
            {modelsDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="pointer-events-auto mt-3 hidden lg:block"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white rounded-3xl border border-gray-200 shadow-[0_8px_40px_rgba(0,0,0,0.08)] p-8">
                  <div className="grid grid-cols-3 gap-8">
                    {capsuleModels.map((model) => (
                      <div
                        key={model.slug}
                        className="group flex flex-col items-center text-center"
                      >
                        <Link
                          href={`/modele/${model.slug}`}
                          onClick={() => setModelsDropdownOpen(false)}
                          className="w-full flex flex-col items-center"
                        >
                          <div className="relative w-full aspect-[16/10] mb-4 overflow-hidden rounded-2xl">
                            <Image
                              src={model.image}
                              alt={model.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="250px"
                            />
                          </div>
                          <h4 className="font-inter font-semibold text-gray-900 text-base mb-1.5">
                            {model.name}
                          </h4>
                        </Link>
                        <div className="flex items-center gap-5 text-sm mt-1">
                          <Link
                            href={`/modele/${model.slug}`}
                            onClick={() => setModelsDropdownOpen(false)}
                            className="text-gray-500 hover:text-gray-900 hover:underline underline-offset-4 transition-colors"
                          >
                            Detalii
                          </Link>
                          <Link
                            href={`/contact?model=${model.slug}`}
                            className="text-gray-500 hover:text-gray-900 hover:underline underline-offset-4 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              setModelsDropdownOpen(false);
                            }}
                          >
                            Comandă
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden bg-white"
          >
            <AnimatePresence mode="wait">
              {!mobileModelsOpen ? (
                /* Main Menu */
                <motion.div
                  key="main-menu"
                  className="h-full flex flex-col"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Top Bar with Logo and Close */}
                  <div className="flex items-center justify-between px-6 py-5">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                      <Image
                        src="/logo-picaps.png"
                        alt="PI CAPS"
                        width={180}
                        height={50}
                        className="h-10 w-auto"
                        priority
                        unoptimized
                      />
                    </Link>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Nav Links - Centered in remaining space */}
                  <div className="flex-1 flex flex-col items-center justify-center px-8">
                    <nav className="flex flex-col items-center gap-6">
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.06, duration: 0.4 }}
                        >
                          {link.hasDropdown ? (
                            <button
                              onClick={() => setMobileModelsOpen(true)}
                              className="flex items-center gap-2 font-inter text-2xl font-semibold text-gray-900 hover:text-primary transition-colors"
                            >
                              {link.label}
                              <ChevronRight className="w-5 h-5 text-gray-400" />
                            </button>
                          ) : (
                            <Link
                              href={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={cn(
                                "font-inter text-2xl font-semibold transition-colors",
                                pathname === link.href
                                  ? "text-gray-900"
                                  : "text-gray-500 hover:text-gray-900",
                                link.href === "/pi-business-resort" && "text-primary"
                              )}
                            >
                              {link.label}
                            </Link>
                          )}
                        </motion.div>
                      ))}
                    </nav>
                  </div>

                  {/* Bottom CTAs */}
                  <motion.div
                    className="px-6 pb-8 space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <AntigravityButton
                      variant="primary"
                      href="/pi-business-resort#aplica"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full text-base"
                      magnetic={false} // Disable magnetic on mobile for better touch UX
                    >
                      Devino investitor
                    </AntigravityButton>
                  </motion.div>
                </motion.div>
              ) : (
                /* Models Submenu */
                <motion.div
                  key="models-menu"
                  className="h-full flex flex-col bg-white"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Premium Header */}
                  <div className="relative px-6 py-6 border-b border-gray-100">
                    {/* Back Button - Absolute Left */}
                    <button
                      onClick={() => setMobileModelsOpen(false)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-50 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Centered Title */}
                    <div className="text-center">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-primary block mb-1">
                        Colecția
                      </span>
                      <h2 className="font-pirulen text-xl text-gray-900">Modele</h2>
                    </div>

                    {/* Close Button - Absolute Right */}
                    <button
                      onClick={() => {
                        setMobileModelsOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-50 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Models List - Scrollable */}
                  <div className="flex-1 flex flex-col px-4 py-6 space-y-4 overflow-y-auto touch-pan-y overscroll-contain">
                    {capsuleModels.map((model, index) => (
                      <motion.div
                        key={model.slug}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={`/modele/${model.slug}`}
                          onClick={() => {
                            setMobileModelsOpen(false);
                            setMobileMenuOpen(false);
                          }}
                          className="block bg-gray-50 rounded-2xl overflow-hidden hover:bg-gray-100 transition-all active:scale-[0.98]"
                        >
                          {/* Large Image */}
                          <div className="relative w-full aspect-[16/9] overflow-hidden">
                            <Image
                              src={model.image}
                              alt={model.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 300px"
                            />
                            {/* Size Badge */}
                            <div className="absolute top-3 left-3">
                              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-900 rounded-full">
                                {model.size}
                              </span>
                            </div>
                          </div>
                          {/* Model Info */}
                          <div className="flex items-center justify-between p-4">
                            <h4 className="font-pirulen text-lg text-gray-900">
                              {model.name}
                            </h4>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <span className="font-medium text-primary">Vezi detalii</span>
                              <ChevronRight className="w-4 h-4 text-primary" />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;