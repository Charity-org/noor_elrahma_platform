"use client";

import ParallaxCarouselProject from "@/components/custom/ParallaxCarouselProject";
// import { someRealProjectsData } from "@/constants/layoutData";
import { ProjectData } from "@/types/projecttype";

function RealProject({ project }: { project: ProjectData }) {
  return (
    <section className="container">
      <h3 className="font-bold font-teachers text-5xl mt-15 text-center mb-10 text-primary">
        Real Moments from Projects on the Ground
      </h3>

      <ParallaxCarouselProject project={project} />
    </section>
  );
}

export default RealProject;
