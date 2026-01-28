import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import SkeletonImage from "@/components/global/SkeletonImage";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "./ProgressBar";
import ProjectShareBtn from "./ProjectShareBtn";
import ProjectFavBtn from "./ProjectFavBtn";
import { useAuth } from "@/providers/auth-provider";
import { cn } from "@/lib/utils";
import { ProjectCardData, recent_completed_projects } from "@/types/hometypes";
import { useTranslations } from "next-intl";
import { formatDate } from "@/utils/formateDate";
import Link from "next/link";
interface ProjectCardProps {
  project: ProjectCardData | recent_completed_projects;
  contaienrStyle?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, contaienrStyle }) => {
  const t = useTranslations("projects");
  const { isAuthenticated } = useAuth();

  // Normalize data between the two project types
  const id = "id" in project ? project.id : project.projectId;
  const projectName = "projectName" in project ? project.projectName : project.name;
  const description = "description" in project ? project.description : project.projectDescription;
  const image = project.image;
  const startDate = "startDate" in project ? project.startDate : project.created_At;
  const country = project.country;
  const goal = project.goal;
  const donations = project.donations;
  const raised = project.raised;
  const isFavorite = "isFavorite" in project ? project.isFavorite : false;

  // Calculate progress percentage, ensuring it doesn't exceed 100 or result in NaN
  const progress = goal > 0 ? Math.min(Math.round((raised / goal) * 100), 100) : 0;

  return (
    <Card
      className={cn(
        "w-full md:max-w-96 min-h-187.5 overflow-hidden pt-0 rounded-[24px] group border-4 border-primary flex flex-col",
        contaienrStyle,
      )}
    >
      <CardHeader className="px-0 shrink-0 relative">
        <SkeletonImage
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image}`}
          alt="Project Image"
          width={1024}
          height={1024}
          containerClassName="w-full h-64"
          className="object-cover bg-primary-hover w-full h-64 transition-all duration-300 ease-in-out group-hover:scale-105"
          loading="eager"
        />
        {isAuthenticated && !isFavorite && <ProjectFavBtn projectId={id} isFavorite={isFavorite} />}

        <ProjectShareBtn projectId={id} />
      </CardHeader>

      <CardContent className="px-6 py-4 space-y-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3 font-inter">
          <h2 className="font-bold font-teachers text-[28px] line-clamp-1">{projectName}</h2>
          <div className="space-y-1.5">
            <p className="font-medium text-[12px] text-gray-600">
              {t("started")}:{" "}
              {formatDate(startDate, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <p className="text-gray-600 font-medium text-[12px]">
              {t("country")}: <span className="font-bold font-inter text-third">{country}</span>
            </p>
          </div>
          <p className="text-[16px] text-black/60 line-clamp-2">{description}</p>
        </div>

        <ProgressBar className="w-full h-3" value={progress} />

        <div className="flex flex-col gap-2 font-inter">
          <h4 className="font-bold text-[16px] flex items-center gap-2 justify-between">
            <span>
              {t("goal")}: ${goal}
            </span>
            <span>{donations}</span>
          </h4>

          <h4 className="font-medium text-[12px] text-gray-600 flex items-center gap-2 justify-between">
            <span>
              {t("raised")}: ${raised}
            </span>
            <span>{t("donations")}</span>
          </h4>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-6 px-6 pb-6 shrink-0">
        <Button className="w-full h-15 text-[16px] font-bold font-teachers rounded-2xl! cursor-pointer">
          {t("donate_now")}
        </Button>
        <Link href={`/projects/${id}`} className="w-full">
          <Button
            variant={"outline"}
            className="w-full h-15 text-[16px] border-primary text-primary bg-white font-bold font-teachers rounded-2xl! hover:bg-secondary-hover cursor-pointer"
          >
            {t("view_project")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
