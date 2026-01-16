import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "./ProgressBar";
import { Project } from "@/types/layoutTypes";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="w-full md:max-w-96 overflow-hidden pt-0 rounded-[24px] group border-4 border-primary flex flex-col">
      <CardHeader className="px-0 shrink-0">
        <Image
          src={project.imageSrc}
          alt="Project Image"
          width={1024}
          height={1024}
          className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </CardHeader>

      <CardContent className="grow space-y-6 px-6 py-4">
        <div className="font-inter space-y-3">
          <h2 className="font-bold font-teachers text-[28px]">{project.title.slice(0, 18)}...</h2>
          <p className="font-medium text-[12px] text-gray-600">Started: {project.startDate}</p>
          <p className="text-gray-600 font-medium text-[12px]">
            Country: <span className="font-inter font-bold text-third">{project.country}</span>
          </p>
          <p className="text-[16px] text-black/60">{project.description.slice(0, 60)}...</p>
        </div>

        <ProgressBar className="w-full h-3" value={project.progress} />

        <div className="font-inter flex flex-col gap-2">
          <h4 className="font-bold text-[16px] flex items-center gap-2 justify-between">
            <span>Goal: ${project.goal}</span>
            <span>{project.donations}</span>
          </h4>

          <h4 className="font-medium text-[12px] text-gray-600 flex items-center gap-2 justify-between">
            <span>Raised: ${project.raised}</span>
            <span>Donations</span>
          </h4>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-6 px-6 pb-6 shrink-0">
        <Button className="w-full h-15 text-[16px] font-bold font-teachers rounded-2xl! cursor-pointer">
          Donate Now
        </Button>
        <Button
          variant={"outline"}
          className="w-full h-15 text-[16px] border-primary text-primary font-bold font-teachers rounded-2xl! hover:bg-secondary-hover cursor-pointer"
        >
          View Project
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
