"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import ProjectCard from "@/components/custom/ProjectCard";
import SearchInput from "./SearchInput";

import { ProjectCardData } from "@/types/hometypes";

interface ProjectFiltersProps {
  projects: ProjectCardData[];
}

const ProjectFilters = ({ projects }: ProjectFiltersProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCountry = searchParams.get("country") || "all";
  const currentType = searchParams.get("type") || "all";

  const handleCountryChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set("country", value);
    } else {
      params.delete("country");
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleTypeChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set("type", value);
    } else {
      params.delete("type");
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <SearchInput />

        <div className="flex gap-4 w-full md:w-auto">
          <Select value={currentCountry} onValueChange={handleCountryChange}>
            <SelectTrigger className="w-45">
              <SelectValue placeholder="Select Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              <SelectItem value="Gambia">Gambia</SelectItem>
              <SelectItem value="Senegal">Senegal</SelectItem>
            </SelectContent>
          </Select>

          <Select value={currentType} onValueChange={handleTypeChange}>
            <SelectTrigger className="w-45">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="recent">Recent</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <motion.div
        key={`${currentType}-${currentCountry}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 pb-10"
      >
        {projects?.length > 0 ? (
          projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">
            No projects found matching your criteria.
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectFilters;
