"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface AntigravityButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    magnetic?: boolean;
    withArrow?: boolean;
}

// Create a motion component from Next.js Link
const MotionLink = motion(Link);

export const AntigravityButton = ({
    children,
    className,
    href,
    variant = "primary",
    size = "md",
    magnetic = true,
    withArrow = false,
    onClick,
    ...props
}: AntigravityButtonProps) => {
    const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

    // Magnetic Physics
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for the magnetic effect
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (!magnetic || !ref.current) return;

        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        // Calculate center
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center (max 15px movement)
        const distanceX = (clientX - centerX) * 0.35;
        const distanceY = (clientY - centerY) * 0.35;

        x.set(distanceX);
        y.set(distanceY);
    };

    const handleMouseLeave = () => {
        if (!magnetic) return;
        x.set(0);
        y.set(0);
    };

    // Base Styles
    const baseStyles = "relative inline-flex items-center justify-center font-sans tracking-wide transition-all duration-500 group overflow-hidden select-none outline-none focus:outline-none";

    // Variants
    const variantStyles = {
        primary: "bg-[#1C4030] text-white hover:bg-[#153024]", // Deep Forest Green
        secondary: "bg-[#1D1D1F] text-white hover:bg-[#2C2C2E]", // Signature Black
        outline: "bg-transparent text-[#1D1D1F] border border-[#1D1D1F]/20 hover:border-[#1D1D1F]",
        ghost: "bg-transparent text-[#1D1D1F] hover:bg-black/5",
    };

    // Sizes
    const sizeStyles = {
        sm: "h-9 px-4 text-[12px] rounded-lg",
        md: "h-11 px-8 text-[13px] rounded-xl",
        lg: "h-14 px-10 text-[14px] rounded-2xl",
    };

    // Typography
    const typoStyles = "font-medium antialiased";

    const content = (
        <>
            <span className="relative z-10 flex items-center gap-2">
                {children}
                {withArrow && (
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
            </span>

            {/* Subtle Glow/Shine Effect on Hover */}
            {variant === 'primary' && (
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-white/10 to-transparent" />
            )}
        </>
    );

    const commonProps = {
        ref: ref as any,
        style: { x: springX, y: springY },
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        className: cn(baseStyles, variantStyles[variant], sizeStyles[size], typoStyles, className),
    };

    if (href) {
        return (
            <MotionLink href={href} onClick={onClick as any} {...commonProps}>
                {content}
            </MotionLink>
        );
    }

    return (
        <motion.button onClick={onClick} {...commonProps} {...(props as any)}>
            {content}
        </motion.button>
    );
};
