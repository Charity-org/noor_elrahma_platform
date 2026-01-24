"use client";

import { motion } from "framer-motion";
import { FocusCards } from "@/components/ui/focus-cards";
import { OneViewCarousel } from "@/components/custom/OneViewCarousel";
import { cards, container, title } from "@/lib/animations/home/RealProjectsAnimationOptions";
import { SomeRealProjectsData } from "@/types/hometypes";

const SomeRealProjects = ({
  someRealProjectsData,
}: {
  someRealProjectsData: SomeRealProjectsData[];
}) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="container"
    >
      <motion.h2 variants={title} className="text-center main_title">
        Witness the Impact of Our Real Projects
      </motion.h2>

      <motion.div variants={cards} className="mt-16 md:block hidden">
        <FocusCards cards={someRealProjectsData} />
      </motion.div>

      <motion.div variants={cards} className="block md:hidden mt-16">
        <OneViewCarousel cards={someRealProjectsData} />
      </motion.div>
    </motion.section>
  );
};

export default SomeRealProjects;
