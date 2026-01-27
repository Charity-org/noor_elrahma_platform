"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { AboutUsItem } from "@/types/hometypes";
import { useTranslations } from "next-intl";

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
      ease: [0.25, 0.46, 0.45, 0.94],
    } as const,
  },
};

export default function OurOrganization({ aboutusdata }: { aboutusdata: AboutUsItem[] }) {
  const t = useTranslations("about_us_page");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="container flex flex-col md:flex-row gap-10" variants={contentVariants}>
        <div className="relative w-full md:w-1/2 h-[clamp(35rem,40vw,30rem)]">
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${aboutusdata[0]?.image}`}
            alt={t("alt_humanitarian_work")}
            width={480}
            height={480}
            className="rounded-4xl object-cover h-full w-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="md:w-1/2 flex flex-col">
          <h3 className="text-5xl font-bold font-teachers mb-6 md:mb-10">
            {aboutusdata[0]?.title}
          </h3>
          <ul className="list-disc space-y-8 font-semibold font-inter">
            <li>{aboutusdata[0]?.description}</li>
            <li>{aboutusdata[0]?.content}</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
}
