"use client";

import { Suspense, useState, useEffect, Component, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, useGLTF, Html, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { DRACOLoader } from 'three-stdlib';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// =============================================================================
// MODELS SHOWCASE - 3D Carousel with CTA Buttons
// Professional design with error handling
// =============================================================================

const models = [
    { id: 'alpha', path: '/models/optimized/alpha.glb', label: 'Alpha', slug: 'alpha' },
    { id: 'gamma', path: '/models/optimized/gamma.glb', label: 'Gamma', slug: 'gamma' },
    { id: 'beta', path: '/models/optimized/beta.glb', label: 'Beta', slug: 'beta' },
];

// -----------------------------------------------------------------------------
// Error Boundary for 3D Canvas
// -----------------------------------------------------------------------------

interface ErrorBoundaryState {
    hasError: boolean;
}

class CanvasErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, ErrorBoundaryState> {
    constructor(props: { children: ReactNode; fallback: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Canvas Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

// -----------------------------------------------------------------------------
// Capsule Model Component
// -----------------------------------------------------------------------------

function CapsuleModel({ path, isMobile }: { path: string; isMobile: boolean }) {
    const { scene } = useGLTF(path, true, true, (loader) => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        loader.setDRACOLoader(dracoLoader);
    });

    // Slightly larger scale for better visibility
    return (
        <primitive
            object={scene.clone()}
            position={[0, 0, 0]}
            scale={isMobile ? 0.018 : 0.025}
            rotation={[0, 0, 0]}
        />
    );
}

// -----------------------------------------------------------------------------
// 3D Scene
// -----------------------------------------------------------------------------

function Scene({ activeModel, isMobile }: { activeModel: typeof models[0]; isMobile: boolean }) {
    return (
        <>
            <PerspectiveCamera
                makeDefault
                position={isMobile ? [0, 1.5, 16] : [0, 2, 18]}
                fov={isMobile ? 50 : 45}
                near={0.1}
                far={500}
            />

            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} />
            <directionalLight position={[-10, 5, -5]} intensity={0.4} color="#e8e0d8" />
            <spotLight position={[0, 20, 10]} angle={0.3} penumbra={1} intensity={0.5} />

            <CapsuleModel path={activeModel.path} isMobile={isMobile} />

            <Environment preset="studio" />

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
                autoRotate
                autoRotateSpeed={0.3}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
            />
        </>
    );
}

// -----------------------------------------------------------------------------
// Fallback Component
// -----------------------------------------------------------------------------

function FallbackView() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="text-center text-neutral-500">
                <p className="text-lg">Vizualizare 3D indisponibilă</p>
                <p className="text-sm mt-2">Vizitați pagina produsului pentru mai multe imagini</p>
            </div>
        </div>
    );
}

// -----------------------------------------------------------------------------
// Main Export
// -----------------------------------------------------------------------------

export const ModelsShowcase = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [webGLSupported, setWebGLSupported] = useState(true);
    const [isClient, setIsClient] = useState(false);

    // Ensure we're on client
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Detect mobile
    useEffect(() => {
        if (!isClient) return;
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [isClient]);

    // WebGL support check
    useEffect(() => {
        if (!isClient) return;
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            setWebGLSupported(!!gl);
        } catch {
            setWebGLSupported(false);
        }
    }, [isClient]);

    const goToPrev = () => setActiveIndex(prev => (prev - 1 + 3) % 3);
    const goToNext = () => setActiveIndex(prev => (prev + 1) % 3);

    // Touch handlers for swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart === null) return;
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;

        if (Math.abs(diff) > 50) {
            if (diff > 0) goToNext();
            else goToPrev();
        }
        setTouchStart(null);
    };

    const activeModel = models[activeIndex];

    // Don't render until client-side
    if (!isClient) {
        return (
            <section className="relative w-full flex flex-col items-center justify-center min-h-[80vh] bg-[#fafaf9]">
                <div className="text-center">
                    <div className="w-8 h-8 border-2 border-neutral-200 border-t-neutral-600 rounded-full animate-spin mx-auto" />
                </div>
            </section>
        );
    }

    return (
        <section
            className="relative w-full flex flex-col items-center justify-center"
            style={{
                minHeight: isMobile ? '85vh' : '100vh',
                paddingTop: isMobile ? '3rem' : '5rem',
                paddingBottom: isMobile ? '3rem' : '4rem',
                background: '#fafaf9',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 10
            }}
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-4 md:mb-8 z-10 px-4"
            >
                <span className="inline-block text-[#1C4030]/60 text-xs tracking-[0.3em] uppercase mb-2 md:mb-4">
                    Colecția Noastră
                </span>
                <h2 className="font-pirulen text-3xl md:text-5xl lg:text-6xl text-[#1a1a1a] tracking-tight">
                    Trei Viziuni
                </h2>
                <p className="mt-2 md:mt-4 text-neutral-500 text-sm md:text-lg max-w-md mx-auto">
                    Fiecare capsulă, o experiență unică de living modern
                </p>
            </motion.div>

            {/* 3D Canvas Container */}
            <div
                className="relative w-full"
                style={{
                    height: isMobile ? '40vh' : '55vh',
                    minHeight: isMobile ? '280px' : '400px',
                    maxWidth: '1400px',
                    touchAction: 'pan-y',
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none'
                } as React.CSSProperties}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {webGLSupported ? (
                    <CanvasErrorBoundary fallback={<FallbackView />}>
                        <Canvas
                            style={{ background: 'transparent' }}
                            dpr={[1, 2]}
                            gl={{
                                antialias: true,
                                alpha: true,
                                powerPreference: 'high-performance',
                                preserveDrawingBuffer: false
                            }}
                            resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
                            frameloop="demand"
                        >
                            <Suspense fallback={
                                <Html center>
                                    <div className="text-[#1C4030]/60 text-sm tracking-widest uppercase animate-pulse">
                                        Loading...
                                    </div>
                                </Html>
                            }>
                                <Scene activeModel={activeModel} isMobile={isMobile} />
                            </Suspense>
                        </Canvas>
                    </CanvasErrorBoundary>
                ) : (
                    <FallbackView />
                )}

                {/* Arrow Navigation - Desktop only */}
                {!isMobile && (
                    <>
                        <button
                            onClick={goToPrev}
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
                            aria-label="Previous model"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        <button
                            onClick={goToNext}
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
                            aria-label="Next model"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Mobile swipe hint */}
                {isMobile && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-neutral-400 text-xs">
                        ← Swipe pentru a schimba →
                    </div>
                )}
            </div>

            {/* Model Info & CTA Section */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeModel.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-center mt-4 md:mt-6 px-4"
                >
                    {/* Price on request */}
                    <div className="mb-4">
                        <p className="text-2xl md:text-3xl font-bold text-[#1C4030]">
                            Preț la cerere
                        </p>
                    </div>

                    {/* CTA Button - Just model name */}
                    <Link
                        href={`/modele/${activeModel.slug}`}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#1C4030] text-white font-medium rounded-lg hover:bg-[#153326] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        {activeModel.label}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>
            </AnimatePresence>

            {/* Model Tabs */}
            <div className="flex justify-center gap-6 md:gap-16 mt-6 md:mt-8">
                {models.map((model, index) => (
                    <button
                        key={model.id}
                        onClick={() => setActiveIndex(index)}
                        className="relative px-2 py-2 text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] uppercase transition-all duration-300 bg-transparent border-none outline-none cursor-pointer"
                        style={{
                            color: index === activeIndex ? '#1a1a1a' : '#999',
                            fontWeight: index === activeIndex ? 600 : 400
                        }}
                    >
                        {model.label}
                        {index === activeIndex && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1C4030]"
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Dot indicators */}
            <div className="flex gap-3 mt-4 md:mt-6">
                {models.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Go to model ${index + 1}`}
                        className="w-2 h-2 rounded-full transition-all duration-300 border-none outline-none cursor-pointer"
                        style={{
                            background: index === activeIndex ? '#1C4030' : '#d4d4d4',
                            transform: index === activeIndex ? 'scale(1.25)' : 'scale(1)'
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

// Preload models
if (typeof window !== 'undefined') {
    useGLTF.preload('/models/optimized/alpha.glb');
    useGLTF.preload('/models/optimized/gamma.glb');
    useGLTF.preload('/models/optimized/beta.glb');
}

export default ModelsShowcase;