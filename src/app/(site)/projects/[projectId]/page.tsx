import About from "@/components/pages/single-project/About";

import Overview from "@/components/pages/single-project/Overview";
import RealProject from "@/components/pages/single-project/RealProject";
import SubPagesHero from "@/components/custom/SubPagesHero";
import { Button } from "@/components/ui/button";
import { getSingleProject } from "@/utils/getSingleProject";
import { ProjectCardData } from "@/types/hometypes";
import { getLocale, getTranslations } from "next-intl/server";

async function ProjectDetailsPage({ params }: { params: Promise<{ projectId: string }> }) {
  const projectId = (await params).projectId;

  const locale = await getLocale();
  const tProjects = await getTranslations("projects");

  const project: ProjectCardData = await getSingleProject(projectId, {
    lang: locale,
  });

  return (
    <>
      <SubPagesHero bgImage={`${process.env.NEXT_PUBLIC_BACKEND_URL}${project.image}`}>
        <h1 className="text-white font-bold w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,4vw,6rem)] leading-[1.1] drop-shadow-2xl max-w-[20ch] md:max-w-none">
          {project.name}
        </h1>
        <p className="font-inter text-white/80 text-[clamp(1rem,2vw,1.5rem)] max-w-[40ch] md:max-w-[60ch] drop-shadow-md mb-10">
          {project.description}
        </p>

        <Button className="bg-third px-4 md:px-6 md:py-10 py-6 md:w-[15ch] cursor-pointer hover:bg-third/80 md:text-2xl text-lg font-teachers">
          {tProjects("donate_now")}
        </Button>
      </SubPagesHero>

      <main className="mt-32 space-y-32">
        <About project={project} />
        <RealProject project={project} />
        <Overview project={project} />
      </main>
    </>
  );
}

export default ProjectDetailsPage;
