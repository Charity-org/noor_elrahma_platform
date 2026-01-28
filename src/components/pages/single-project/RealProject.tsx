"use client";

import ParallaxCarouselProject from "@/components/custom/ParallaxCarouselProject";
import { ProjectCardData } from "@/types/hometypes";
import { useTranslations } from "next-intl";

function RealProject({ project }: { project: ProjectCardData }) {
  const t = useTranslations("ProjectDetails.RealProject");

  return (
    <section className="container">
      <h3 className="font-bold font-teachers text-5xl mt-15 text-center mb-10 text-primary">
        {t("title")}
      </h3>

      <ParallaxCarouselProject project={project} />
    </section>
  );
}

export default RealProject;
