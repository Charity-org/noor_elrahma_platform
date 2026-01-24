import AnalysisBar from "@/components/custom/AnalysisBar";
import CompletedProjects from "@/components/pages/home/CompletedProjects";
import Hero from "@/components/pages/home/Hero";
import HowItWorks from "@/components/pages/home/HowItWorks";
import WhoWeAre from "@/components/pages/home/WhoWeAre";
import RecentProjects from "@/components/pages/home/RecentProjects";
import SomeRealProjects from "@/components/pages/home/SomeRealProjects";

import { getHomeDynamicData } from "@/utils/getAllDynamicPages";

import { HomePageType } from "@/types/hometypes";

export default async function Home() {
  const {
    hero,
    how_it_works,
    recent_projects,
    completed_projects,
    some_real_projects,
    who_we_are,
  }: HomePageType = await getHomeDynamicData({
    page: "HOME",
  });

  return (
    <>
      <Hero heroData={hero} />
      <main className="mt-32 space-y-32">
        <HowItWorks howItWorksData={how_it_works} />
        <RecentProjects recentProjectsData={recent_projects} />
        <CompletedProjects completedProjectsData={completed_projects} />
        <SomeRealProjects someRealProjectsData={some_real_projects} />
        <AnalysisBar />
        <WhoWeAre whoWeAreData={who_we_are} />
      </main>
    </>
  );
}
