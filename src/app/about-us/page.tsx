import Hero from "../../components/pages/about-us/Hero";
import SubPagesHero from "../../components/custom/SubPagesHero";
import AnalysisBar from "../../components/custom/AnalysisBar";
import OurOrganization from "../../components/pages/about-us/OurOrganization";
import AbouOrganization from "../../components/pages/about-us/AboutOrganization";
import WhyDonateUS from "../../components/pages/about-us/WhyDonateUS";
import DonateCTA from "../../components/pages/about-us/DonateCTA";
import ProjectsByRegion from "../../components/pages/about-us/ProjectsByRegion";
import Map from "../../components/custom/WorldMapDoted";
export default function AboutUsPage() {
  return (
    <>
      <SubPagesHero bgImage="/assets/about-us-1.png">
        <div className="h-full flex flex-col gap-4 justify-center items-center text-center text-white">
          <h1 className="text-white font-bold w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,4vw,6rem)] leading-[1.1] drop-shadow-2xl max-w-[20ch] md:max-w-none">
            Stories and progress from our charitable work
          </h1>
          <p className="font-inter text-white/80 text-[clamp(1rem,2vw,1.5rem)] max-w-[40ch] md:max-w-[60ch] drop-shadow-md">
            Real updates and stories showing the impact of your donations..
          </p>
        </div>
      </SubPagesHero>
      <main>
        <AnalysisBar />
        <OurOrganization />

        <AbouOrganization />

        <WhyDonateUS />
        <DonateCTA />
        <ProjectsByRegion />
        <Map />
      </main>
    </>
  );
}
