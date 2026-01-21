"use client";

import ProjectCard from "@/components/custom/ProjectCard";
import SubPagesHero from "@/components/custom/SubPagesHero";
import { recentProjects } from "@/constants/layoutData";

const FavouritesPage = () => {
  return (
    <>
      <SubPagesHero bgImage="/assets/hero-1.jpg">
        <h1 className="text-white font-bold w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,4vw,6rem)] leading-[1.1] drop-shadow-2xl max-w-[20ch] md:max-w-none">
          My Favourites
        </h1>
        <p className="font-inter text-white/80 text-[clamp(1rem,2vw,1.5rem)] max-w-[40ch] md:max-w-[60ch] drop-shadow-md mb-10">
          Here are the projects you&apos;ve marked as favorites. You can view their details and
          support them whenever you&apos;re ready.
        </p>
      </SubPagesHero>

      <div className="container my-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {recentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} contaienrStyle="max-w-none!" />
        ))}
      </div>
    </>
  );
};

export default FavouritesPage;
