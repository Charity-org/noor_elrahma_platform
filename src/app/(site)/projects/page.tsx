import SubPagesHero from "@/components/custom/SubPagesHero";
import ProjectFilters from "@/components/pages/all-projects/ProjectFilters";
import { Button } from "@/components/ui/button";
import { ProjectData } from "@/types/projecttype";
import { getAllProjectsDynamicPage } from "@/utils/getAllProjectsDynamicPage";

async function AllProjects() {
  const projectsData = await getAllProjectsDynamicPage();
  const projects: ProjectData[] = !projectsData
    ? []
    : Array.isArray(projectsData)
      ? projectsData
      : (Object.values(projectsData) as ProjectData[]);

  // Separate projects based on completion (progress >= 100%)
  const recentProjects = projects.filter((project) => {
    const progress = Math.round((project.raised / project.goal) * 100);
    return progress < 100;
  });

  const completedProjects = projects.filter((project) => {
    const progress = Math.round((project.raised / project.goal) * 100);
    return progress >= 100;
  });

  // Get random images from all projects
  // const randomProjectImages = projects.map((project) => project.image);

  return (
    <>
      <SubPagesHero bgImage="/assets/hero.jpg">
        <h1 className="text-white font-bold w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,4vw,6rem)] leading-[1.1] drop-shadow-2xl max-w-[20ch] md:max-w-none">
          Donate Today Save a Life
        </h1>
        <p className="font-inter text-white/80 text-[clamp(1rem,2vw,1.5rem)] max-w-[40ch] md:max-w-[60ch] drop-shadow-md mb-10">
          Thank you for being part of this mission. Together, through care and generosity, we can
          truly make a difference.
        </p>
        <Button className="bg-third px-4 md:px-6 md:py-10 py-6 md:w-[15ch] cursor-pointer hover:bg-third/80 md:text-2xl text-lg font-teachers">
          Donate Now
        </Button>
      </SubPagesHero>

      <main className="container mt-32 space-y-32">
        <ProjectFilters recentProjects={recentProjects} completedProjects={completedProjects} />
      </main>
    </>
  );
}

export default AllProjects;
