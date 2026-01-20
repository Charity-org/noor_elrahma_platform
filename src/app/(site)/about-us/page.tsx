"use client";

import SubPagesHero from "@/components/custom/SubPagesHero";
import AnalysisBar from "@/components/custom/AnalysisBar";
import OurOrganization from "@/components/pages/about-us/OurOrganization";
import AbouOrganization from "@/components/pages/about-us/AboutOrganization";
import WhyDonateUS from "@/components/pages/about-us/WhyDonateUS";
import ProjectsByRegion from "@/components/pages/about-us/ProjectsByRegion";
import WorldMapDoted from "@/components/custom/WorldMapDoted";

export default function AboutUsPage() {
  return (
    <>
      <SubPagesHero bgImage="/assets/about-us-1.png">
        <div className="h-full flex flex-col gap-4 justify-center items-center text-center text-white">
          <h1 className="text-white font-bold w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,4vw,6rem)] leading-[1.1] drop-shadow-2xl max-w-[20ch] md:max-w-none">
            Make a Difference, Support Those in Need.
          </h1>
          <p className="font-inter text-white/80 text-[clamp(1rem,2vw,1.5rem)] max-w-[40ch] md:max-w-[60ch] drop-shadow-md">
            we aspire to a society full of goodness
          </p>
        </div>
      </SubPagesHero>
      <main className="container mt-32 space-y-32">
        <AnalysisBar />

        <OurOrganization />

        <AbouOrganization />

        <WhyDonateUS />

        <ProjectsByRegion />

        <WorldMapDoted />
      </main>
    </>
  );
}
