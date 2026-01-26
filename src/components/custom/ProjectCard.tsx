import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import SkeletonImage from "@/components/global/SkeletonImage";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "./ProgressBar";
import { Project } from "@/types/layoutTypes";
import ProjectShareBtn from "./ProjectShareBtn";
import ProjectFavBtn from "./ProjectFavBtn";
import { useAuth } from "@/providers/auth-provider";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  contaienrStyle?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project: {
    id,
    title,
    description,
    imageSrc,
    country,
    startDate,
    progress,
    goal,
    donations,
    raised,
    actions,
  },
  contaienrStyle,
}) => {
  const { isAuthenticated } = useAuth();

  return (
    <Card
      className={cn(
        "w-full md:max-w-96 min-h-187.5 overflow-hidden pt-0 rounded-[24px] group border-4 border-primary flex flex-col",
        contaienrStyle,
      )}
    >
      <CardHeader className="px-0 shrink-0 relative">
        <SkeletonImage
          src={imageSrc}
          alt="Project Image"
          width={1024}
          height={1024}
          containerClassName="w-full h-64"
          className="object-cover bg-primary-hover w-full h-64 transition-all duration-300 ease-in-out group-hover:scale-105"
        />
        {isAuthenticated && <ProjectFavBtn projectId={id} />}

        <ProjectShareBtn projectId={id} />
      </CardHeader>

      <CardContent className="px-6 py-4 space-y-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3 font-inter">
          <h2 className="font-bold font-teachers text-[28px] line-clamp-1">{title}</h2>
          <div className="space-y-1.5">
            <p className="font-medium text-[12px] text-gray-600">Started: {startDate}</p>
            <p className="text-gray-600 font-medium text-[12px]">
              Country: <span className="font-bold font-inter text-third">{country}</span>
            </p>
          </div>
          <p className="text-[16px] text-black/60 line-clamp-2">{description}</p>
        </div>

        <ProgressBar className="w-full h-3" value={progress} />

        <div className="flex flex-col gap-2 font-inter">
          <h4 className="font-bold text-[16px] flex items-center gap-2 justify-between">
            <span>Goal: ${goal}</span>
            <span>{donations}</span>
          </h4>

          <h4 className="font-medium text-[12px] text-gray-600 flex items-center gap-2 justify-between">
            <span>Raised: ${raised}</span>
            <span>Donations</span>
          </h4>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-6 px-6 pb-6 shrink-0">
        {actions.donateNow && (
          <Button className="w-full h-15 text-[16px] font-bold font-teachers rounded-2xl! cursor-pointer">
            Donate Now
          </Button>
        )}
        <Button
          variant={"outline"}
          className="w-full h-15 text-[16px] border-primary text-primary bg-white font-bold font-teachers rounded-2xl! hover:bg-secondary-hover cursor-pointer"
        >
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
