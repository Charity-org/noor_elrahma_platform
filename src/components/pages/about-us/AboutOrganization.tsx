"use client";

import { useRef } from "react";
import { organizationData } from "@/constants/aboutusData";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const AboutOrganization = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div variants={contentVariants}>
        <h2 className="text-[40px] font-bold mb-12 font-teachers text-black">
          About our Organization
        </h2>

        <div className="columns-1 md:columns-2 gap-14 space-y-10">
          {organizationData.map(({ title, icon: Icon, description, list }) => (
            <div key={title} className="break-inside-avoid mb-10">
              <div className="flex flex-col gap-3">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1F3327] flex items-center justify-center shrink-0">
                    <Icon className="text-white w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-2xl font-teachers text-black">{title}</h3>
                </div>

                {/* Content */}
                <div className="pl-14">
                  {description && (
                    <p className="text-[#595959] leading-relaxed text-base font-inter">
                      {description}
                    </p>
                  )}

                  {list && (
                    <ul className="list-disc space-y-2 text-[#595959] leading-relaxed text-base font-inter pl-4 marker:text-[#595959]">
                      {list.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutOrganization;
