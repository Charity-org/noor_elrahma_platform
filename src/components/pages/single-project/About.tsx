import Image from "next/image";

import { ProjectCardData } from "@/types/hometypes";
import { useLocale, useTranslations } from "next-intl";

function About({ project }: { project: ProjectCardData }) {
  const t = useTranslations("ProjectDetails.About");
  const locale = useLocale();

  const contentAr = (project as { contentAr?: string }).contentAr;
  const contentPage = locale === "ar" && contentAr ? contentAr : project.content;

  return (
    <section className="container flex flex-col md:flex-row gap-10">
      <div className="relative w-full md:w-1/2 h-[clamp(35rem,40vw,30rem)]">
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${project.image}`}
          alt={project.name}
          width={480}
          height={480}
          className="rounded-4xl object-cover h-full w-full"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="md:w-1/2 flex flex-col">
        <h3 className="text-5xl font-bold font-teachers mb-6 md:mb-10">{t("title")}</h3>
        <p className="font-semibold font-inter text-lg leading-relaxed">{contentPage}</p>
      </div>
    </section>
  );
}

export default About;
