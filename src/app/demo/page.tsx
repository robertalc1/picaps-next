"use client";

import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";

export default function DemoPage() {
    return (
        <div className="min-h-[200vh] bg-neutral-50">
            <div className="bg-neutral-900 py-12 text-center text-white">
                <h1 className="text-4xl font-bold">Scroll Down</h1>
                <p className="mt-4">Experience the Smooth Scroll Hero Effect</p>
            </div>

            <SmoothScrollHero
                desktopImage="https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=2708&auto=format&fit=crop"
                mobileImage="https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=2708&auto=format&fit=crop"
                scrollHeight={2000}
            />

            <div className="max-w-4xl mx-auto py-24 px-6 space-y-12">
                <h2 className="text-3xl font-bold">Content Below Hero</h2>
                <p className="text-lg text-neutral-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-lg text-neutral-600">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    );
}
