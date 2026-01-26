import SubPagesHero from "@/components/custom/SubPagesHero";
import ProjectFilters from "@/components/pages/all-projects/ProjectFilters";

import { Button } from "@/components/ui/button";
import { ProjectCardData } from "@/types/hometypes";
import { getAllProjects } from "@/utils/getAllProjects";
import { getLocale, getTranslations } from "next-intl/server";

interface SearchParamsProps {
  searchParams: Promise<{ type?: string; country?: string }>;
}

async function AllProjects({ searchParams }: SearchParamsProps) {
  const { type = "", country = "" } = await searchParams;
  const locale = await getLocale();
  const t = await getTranslations("projects_page");
  const tProjects = await getTranslations("projects");

  const projects = await getAllProjects({ type, country, lang: locale });
  const projectsData = Object.values(projects?.data as ProjectCardData[]) || [];

  return (
    <>
      <SubPagesHero bgImage="/assets/real-pr-5.png">
        <h1 className="text-white font-bold w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,4vw,6rem)] leading-[1.1] drop-shadow-2xl max-w-[20ch] md:max-w-none">
          {t("hero_title")}
        </h1>
        <p className="font-inter text-white/80 text-[clamp(1rem,2vw,1.5rem)] max-w-[40ch] md:max-w-[60ch] drop-shadow-md mb-10">
          {t("hero_description")}
        </p>
        <Button className="bg-third px-4 md:px-6 md:py-10 py-6 md:w-[15ch] cursor-pointer hover:bg-third/80 md:text-2xl text-lg font-teachers">
          {tProjects("donate_now")}
        </Button>
      </SubPagesHero>

      <main className="container mt-32 space-y-32">
        <ProjectFilters projects={projectsData} />
      </main>
    </>
  );
}

export default AllProjects;
