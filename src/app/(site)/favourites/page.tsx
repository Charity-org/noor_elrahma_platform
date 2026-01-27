import ProjectCard from "@/components/custom/ProjectCard";
import SubPagesHero from "@/components/custom/SubPagesHero";
import { ProjectCardData } from "@/types/hometypes";
import { getUserFav } from "@/utils/getUserFav";
import { getTranslations } from "next-intl/server";

const FavouritesPage = async () => {
  const t = await getTranslations("favourites_page");
  const favData = await getUserFav();

  // Parse the index-based object response from backend
  const projects = Object.values(favData || {})
    .filter((item): item is { project: ProjectCardData } => {
      return item != null && typeof item === "object" && "project" in item;
    })
    .map((item) => ({
      ...item.project,
      isFavorite: true,
    }));

  return (
    <>
      <SubPagesHero bgImage="/assets/hero-1.jpg">
        <h1 className="text-white font-bold w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,4vw,6rem)] leading-[1.1] drop-shadow-2xl max-w-[20ch] md:max-w-none">
          {t("title")}
        </h1>
        <p className="font-inter text-white/80 text-[clamp(1rem,2vw,1.5rem)] max-w-[40ch] md:max-w-[60ch] drop-shadow-md mb-10">
          {t("description")}
        </p>
      </SubPagesHero>

      <div className="container my-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project: ProjectCardData) => (
          <ProjectCard
            key={`fav-project-${project.id}`}
            project={project}
            contaienrStyle="max-w-none!"
          />
        ))}
      </div>
    </>
  );
};

export default FavouritesPage;
