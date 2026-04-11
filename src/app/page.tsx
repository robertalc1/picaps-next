import dynamic from "next/dynamic";
import { FluidSection } from "@/components/ui/fluid-section";

const HeroSection = dynamic(() => import("@/components/home/HeroSection"), {
    loading: () => (
        <div className="h-screen w-full bg-black flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
        </div>
    ),
});

const ModelsOverview = dynamic(
    () => import("@/components/home/ModelsOverview"),
    {
        loading: () => (
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="h-8 w-48 bg-neutral-100 rounded-lg mx-auto mb-12 animate-pulse" />
                    <div className="space-y-16">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-64 bg-neutral-100 rounded-3xl animate-pulse" />
                        ))}
                    </div>
                </div>
            </div>
        ),
    }
);

const SocialProofBar = dynamic(
    () => import("@/components/home/SocialProofBar"),
    {
        loading: () => <div className="h-screen bg-black" />,
    }
);

const HowItWorks = dynamic(() => import("@/components/home/HowItWorks"), {
    loading: () => (
        <div className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <div className="h-8 w-56 bg-neutral-100 rounded-lg mx-auto mb-12 animate-pulse" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-neutral-100 animate-pulse" />
                            <div className="h-5 w-20 bg-neutral-100 rounded animate-pulse" />
                            <div className="h-4 w-32 bg-neutral-100 rounded animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ),
});

const FAQPreview = dynamic(() => import("@/components/home/FAQPreview"), {
    loading: () => (
        <div className="py-16 bg-[#fafafa]">
            <div className="max-w-3xl mx-auto px-6">
                <div className="h-8 w-64 bg-neutral-200 rounded-lg mx-auto mb-8 animate-pulse" />
                <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-16 bg-white rounded-2xl animate-pulse" />
                    ))}
                </div>
            </div>
        </div>
    ),
});



export default function HomePage() {
    return (
        <main className="bg-[#FAFAFA]">
            <div className="relative z-10">
                <HeroSection />
            </div>

            <FluidSection
                topBlur={true}
                bottomBlur={true}
                meltTop={true}
                className="z-20 -mt-20 pt-20"
                classNameContent="bg-white rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.02)]"
            >
                <ModelsOverview />
            </FluidSection>

            <FluidSection
                meltTop={true}
                className="z-10"
            >
                <SocialProofBar />
            </FluidSection>

            <FluidSection meltBottom={true} className="z-20 bg-white">
                <HowItWorks />
            </FluidSection>

            <FluidSection topBlur={true} className="z-20 bg-[#FAFAFA]">
                <FAQPreview />
            </FluidSection>
        </main>
    );
}
