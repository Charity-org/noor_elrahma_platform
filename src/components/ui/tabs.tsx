"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import ProjectCard from "@/components/custom/ProjectCard";
import { Project } from "@/types/layoutTypes";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  disableReorder,
  activeTabContentClassName,
  variant = "default",
  onTabChange,
  projectData,
  filterField = "country",
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  disableReorder?: boolean;
  activeTabContentClassName?: string;
  variant?: "default" | "underline" | "toggle";
  onTabChange?: (tab: Tab) => void;
  projectData?: { recent: Project[]; completed: Project[]; activeStatus: string };
  filterField?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const [prevPropTabs, setPrevPropTabs] = useState(propTabs);
  if (propTabs !== prevPropTabs) {
    setTabs(propTabs);
    setPrevPropTabs(propTabs);

    const matchingTab = propTabs.find((t) => t.value === active.value) || propTabs[0];
    setActive(matchingTab);
  }

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const handleTabClick = (tab: Tab, idx: number) => {
    if (onTabChange) {
      onTabChange(tab);
    }
    if (disableReorder || variant === "underline" || variant === "toggle") {
      setActive(tab);
    } else {
      moveSelectedTabToTop(idx);
    }
  };

  const [hovering, setHovering] = useState(false);

  // Filter and render projects if projectData is provided
  const filteredProjects = useMemo(() => {
    if (!projectData) return null;

    const activeProjects =
      projectData.activeStatus === "recent" ? projectData.recent : projectData.completed;

    return activeProjects.filter(
      (project) =>
        project[filterField as keyof Project]?.toString().toLowerCase() ===
        active.value.toLowerCase(),
    );
  }, [projectData, active.value, filterField]);

  const renderProjectCards = () => {
    if (!filteredProjects || filteredProjects.length === 0) return null;

    return (
      <div>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  };

  const getTabStyles = (isActive: boolean) => {
    // Base styles
    const base = "relative cursor-pointer";

    if (variant === "underline") {
      const activeStyle = "!text-third underline underline-offset-8";
      const inactiveStyle =
        "text-black bg-transparent border-none shadow-none text-md md:text-xl font-bold hover:bg-transparent hover:text-third cursor-pointer";
      return cn(base, inactiveStyle, isActive ? activeStyle : "", tabClassName);
    }

    if (variant === "toggle") {
      const activeStyle = "bg-primary text-white hover:bg-primary/90 hover:text-white";
      const inactiveStyle = "bg-white text-primary border border-primary hover:text-primary";
      return cn(
        base,
        "px-10 py-6 rounded-[24px] flex-1",
        isActive ? activeStyle : inactiveStyle,
        tabClassName,
      );
    }
    return cn(base, tabClassName);
  };

  const getMotionSpanStyles = () => {
    if (variant === "underline") {
      return cn("!bg-third !rounded-none !inset-x-0 !w-full !ring-0", activeTabClassName);
    }

    return cn(
      "absolute inset-0 bg-white rounded-full ring-1 text-white hover:underline",
      activeTabClassName,
    );
  };

  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "flex items-center relative sm:overflow-visible no-visible-scrollbar",
          variant === "toggle" && "gap-3 w-full",
          containerClassName,
        )}
      >
        {propTabs.map((tab, idx) => (
          <Button
            key={tab.title}
            onClick={() => {
              handleTabClick(tab, idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            variant="ghost"
            className={getTabStyles(active.value === tab.value)}
          >
            {active.value === tab.value && variant !== "toggle" && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={getMotionSpanStyles()}
              />
            )}

            <span className={cn("relative block", activeTabContentClassName)}>{tab.title}</span>
          </Button>
        ))}
      </div>
      {projectData ? (
        <div className={cn("mt-32", contentClassName)}>{renderProjectCards()}</div>
      ) : (
        <FadeInDiv
          tabs={tabs}
          active={active}
          key={active.value}
          hovering={hovering}
          className={cn("mt-32", contentClassName)}
        />
      )}
    </div>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
