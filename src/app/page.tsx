"use client";

import HeroSection from "@/components/home/HeroSection";
import { FluidSection } from "@/components/ui/fluid-section";
import SocialProofBar from "@/components/home/SocialProofBar";
import ModelsOverview from "@/components/home/ModelsOverview";
import HowItWorks from "@/components/home/HowItWorks";
import FAQPreview from "@/components/home/FAQPreview";

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
