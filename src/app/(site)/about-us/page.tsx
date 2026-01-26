import SubPagesHero from "@/components/custom/SubPagesHero";
import AnalysisBar from "@/components/custom/AnalysisBar";
import OurOrganization from "@/components/pages/about-us/OurOrganization";
import AbouOrganization from "@/components/pages/about-us/AboutOrganization";
import WhyDonateUS from "@/components/pages/about-us/WhyDonateUS";
import ProjectsByRegion from "@/components/pages/about-us/ProjectsByRegion";
import WorldMapDoted from "@/components/custom/WorldMapDoted";
import { getHomeDynamicData } from "@/utils/getAllDynamicPages";
import { AboutPageType } from "@/types/hometypes";
import ParallaxCarouselProject from "@/components/custom/ParallaxCarouselProject";
import { getLocale, getTranslations } from "next-intl/server";

export default async function AboutUsPage() {
  const locale = await getLocale();
  const t = await getTranslations("about_us_page");
  const { about_us, some_real_projects }: AboutPageType = await getHomeDynamicData({
    page: "ABOUT_US",
    lang: locale,
  });

  return (
    <>
      <SubPagesHero bgImage="/assets/about-us-1.png">
        <div className="h-full flex flex-col gap-4 justify-center items-center text-center text-white">
          <h1 className="text-white font-bold w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,4vw,6rem)] leading-[1.1] drop-shadow-2xl max-w-[20ch] md:max-w-none">
            {t("hero_title")}
          </h1>
          <p className="font-inter text-white/80 text-[clamp(1rem,2vw,1.5rem)] max-w-[40ch] md:max-w-[60ch] drop-shadow-md">
            {t("hero_description")}
          </p>
        </div>
      </SubPagesHero>
      <main className="container mt-32 space-y-32">
        <AnalysisBar />

        <OurOrganization aboutusdata={about_us} />

        <AbouOrganization />

        <ParallaxCarouselProject projects={some_real_projects} />

        <WhyDonateUS />

        <ProjectsByRegion />

        <WorldMapDoted />
      </main>
    </>
  );
}
