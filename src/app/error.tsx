"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-white px-6">
            <div className="text-center max-w-md">
                <h2 className="font-pirulen text-2xl text-[#1D1D1F] mb-4">
                    Ceva nu a mers bine
                </h2>
                <p className="text-neutral-500 mb-8">
                    Ne cerem scuze pentru inconveniență. Vă rugăm încercați din nou.
                </p>
                <button
                    onClick={reset}
                    className="px-6 py-3 bg-[#1C4030] text-white rounded-lg font-medium hover:bg-[#1C4030]/90 transition-colors"
                >
                    Încearcă din nou
                </button>
            </div>
        </div>
    );
}
