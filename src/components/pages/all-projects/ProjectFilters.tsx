"use client";

import { useState, useMemo, useCallback } from "react";
import { motion } from "motion/react";
import { Tabs } from "@/components/ui/tabs";

import ProjectCard from "@/components/custom/ProjectCard";
import SearchInput from "./SearchInput";

import { STATUS_TABS, COUNTRY_TABS } from "@/constants/projectFilters";
import { ProjectCardData } from "@/types/hometypes";

type filtersType = {
  status: string;
  country: string;
};

interface ProjectFiltersProps {
  recentProjects: ProjectCardData[];
  completedProjects: ProjectCardData[];
}

const ProjectFilters = ({ recentProjects, completedProjects }: ProjectFiltersProps) => {
  const [filters, setFilters] = useState<filtersType>({
    status: "recent",
    country: "gambia",
  });

  // Filter projects based on active status and country
  const filteredProjects = useMemo(() => {
    const activeProjects = filters.status === "recent" ? recentProjects : completedProjects;
    return activeProjects.filter(
      (project) => project.country.toLowerCase() === filters.country.toLowerCase(),
    );
  }, [filters.status, filters.country, recentProjects, completedProjects]);

  // Memoize handlers to prevent unnecessary re-renders
  const handleCountryChange = useCallback((tab: { value: string }) => {
    setFilters((prev) => ({ ...prev, country: tab.value as "gambia" | "senegal" }));
  }, []);

  const handleStatusChange = useCallback((tab: { value: string }) => {
    setFilters((prev) => ({ ...prev, status: tab.value as "recent" | "completed" }));
  }, []);

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center gap-2 md:gap-0">
        <SearchInput />

        <Tabs tabs={COUNTRY_TABS} variant="underline" onTabChange={handleCountryChange} />
      </div>

      {/* Status tabs below search */}
      <div className="flex justify-start">
        <Tabs tabs={STATUS_TABS} variant="toggle" onTabChange={handleStatusChange} />
      </div>

      {/* Project cards grid */}
      <motion.div
        key={`${filters.status}-${filters.country}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 pb-10"
      >
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-20">
            <p className="text-2xl text-gray-500 font-teachers">
              No {filters.status} projects found in{" "}
              {filters.country === "gambia" ? "any country" : filters.country}
            </p>
          </div>
        ) : (
          filteredProjects.map((project: ProjectCardData, index: number) => (
            <motion.div
              key={`${project}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default ProjectFilters;
