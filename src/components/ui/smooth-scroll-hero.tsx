"use client";

import * as React from "react";
import Image from "next/image"; // Optimized for Next.js
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";

interface SmoothScrollHeroProps {
    scrollHeight?: number;
    desktopImage: string;
    mobileImage: string;
    initialClipPercentage?: number;
    finalClipPercentage?: number;
}

const SmoothScrollHeroBackground: React.FC<SmoothScrollHeroProps> = ({
    scrollHeight = 1500,
    desktopImage,
    mobileImage,
    initialClipPercentage = 25,
    finalClipPercentage = 75,
}) => {
    const { scrollY } = useScroll();

    const clipStart = useTransform(scrollY, [0, scrollHeight], [initialClipPercentage, 0]);
    const clipEnd = useTransform(scrollY, [0, scrollHeight], [finalClipPercentage, 100]);
    const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;
    const backgroundSize = useTransform(scrollY, [0, scrollHeight + 500], ["170%", "100%"]);

    return (
        <motion.div
            className="sticky top-0 h-screen w-full bg-black overflow-hidden"
            style={{
                clipPath,
                willChange: "transform",
            }}
        >
            {/* Mobile Optimized Background */}
            <motion.div className="absolute inset-0 md:hidden" style={{ scale: backgroundSize }}>
                <Image
                    src={mobileImage}
                    alt="Hero Background Mobile"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            {/* Desktop Optimized Background */}
            <motion.div className="absolute inset-0 hidden md:block" style={{ scale: backgroundSize }}>
                <Image
                    src={desktopImage}
                    alt="Hero Background Desktop"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>
        </motion.div>
    );
};

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = (props) => {
    const scrollHeight = props.scrollHeight || 1500;
    return (
        <div
            style={{ height: `calc(${scrollHeight}px + 100vh)` }}
            className="relative w-full"
        >
            <SmoothScrollHeroBackground {...props} scrollHeight={scrollHeight} />
        </div>
    );
};

export default SmoothScrollHero;
