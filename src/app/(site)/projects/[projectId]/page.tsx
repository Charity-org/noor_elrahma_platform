import About from "@/components/pages/single-project/About";

import Overview from "@/components/pages/single-project/Overview";
import RealProject from "@/components/pages/single-project/RealProject";
import SubPagesHero from "@/components/custom/SubPagesHero";
import { Button } from "@/components/ui/button";
import { getAllProjectsDynamicPage } from "@/utils/getAllProjectsDynamicPage";

import { notFound } from "next/navigation";
import { ProjectData } from "@/types/projecttype";

async function ProjectDetailsPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  const project = (await getAllProjectsDynamicPage(projectId)) as ProjectData | null;

  console.log(project);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SubPagesHero bgImage="/assets/hero.jpg">
        <h1 className="text-white font-bold w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,4vw,6rem)] leading-[1.1] drop-shadow-2xl max-w-[20ch] md:max-w-none">
          {project.projectName}
        </h1>
        <p className="font-inter text-white/80 text-[clamp(1rem,2vw,1.5rem)] max-w-[40ch] md:max-w-[60ch] drop-shadow-md mb-10">
          {project.projectDescription}
        </p>

        <Button className="bg-third px-4 md:px-6 md:py-10 py-6 md:w-[15ch] cursor-pointer hover:bg-third/80 md:text-2xl text-lg font-teachers">
          Donate Now
        </Button>
      </SubPagesHero>

      <main className="mt-32 space-y-32">
        <About />
        <RealProject project={project} />
        <Overview />
      </main>
    </>
  );
}

export default ProjectDetailsPage;
