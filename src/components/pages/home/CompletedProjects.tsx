"use client";

import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import CarouselProjects from "@/components/custom/CarouselProjects";
import { Button } from "@/components/ui/button";

import {
  carousel,
  container,
  title,
} from "@/lib/animations/home/CompletedProjectsAnimationOptions";

import { ProjectCardData } from "@/types/hometypes";

const CompletedProjects = ({
  completedProjectsData,
}: {
  completedProjectsData: ProjectCardData[];
}) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="container"
    >
      <motion.div variants={title} className="flex items-center justify-between gap-5 mb-16">
        <h2 className="font-bold font-teachers text-[clamp(1.8rem,4vw,3.15rem)]">
          Completed Projects
        </h2>
        <Button
          variant={"outline"}
          className="text-third bg-transparent border-third cursor-pointer md:w-44 md:h-16 font-teachers md:text-lg md:rounded-2xl! hover:bg-third/10 hover:text-third"
        >
          See all Projects
        </Button>
      </motion.div>

      <motion.div variants={carousel}>
        <CarouselProjects
          projects={completedProjectsData}
          plugins={[Autoplay({ delay: 7000, stopOnInteraction: false })]}
        />
      </motion.div>
    </motion.section>
  );
};

export default CompletedProjects;
