"use client";

import { motion } from "framer-motion";
import SkeletonImage from "@/components/global/SkeletonImage";

import {
  content,
  imagevar,
  item,
  sectionContainerVariants,
  sectionItemVariants,
} from "@/lib/animations/home/HowItWorksAnimationOptions";

import { HowItWorksDatayType } from "@/types/hometypes";
import { useTranslations } from "next-intl";

const HowItWorks = ({
  howItWorksData: { title, image, discription },
}: {
  howItWorksData: HowItWorksDatayType;
}) => {
  const t = useTranslations("how_it_works");

  const steps = [
    { title: t("step1") },
    { title: t("step2") },
    { title: t("step3") },
    { title: t("step4") },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionContainerVariants}
      className="container flex flex-col gap-16 lg:flex-row group overflow-hidden"
    >
      <motion.div
        variants={imagevar}
        className="relative w-full lg:w-1/2 h-[clamp(20rem,80vw,32.4rem)] rounded-4xl overflow-hidden"
      >
        <SkeletonImage
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image}`}
          alt="how-it-works image"
          containerClassName="w-full h-full"
          className="object-cover absolute top-0 bg-primary-hover w-full h-full transition-all duration-300 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          fill
        />
      </motion.div>

      <motion.div
        className="flex flex-col justify-between w-full gap-8 lg:w-1/2"
        variants={content}
      >
        <motion.div variants={item}>
          <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold font-teachers text-primary leading-[1.1]">
            {title}
          </h2>
          <p className="mt-4 text-[clamp(1rem,1.8vw,1.5rem)] font-inter font-semibold">
            {discription}
          </p>
        </motion.div>

        <div className="flex flex-col gap-7 md:gap-10 md:items-center md:flex-row">
          <div className="flex flex-col gap-7">
            {steps.map(
              (item, index) =>
                index < 2 && (
                  <motion.h4
                    key={`${item.title}-${index}`}
                    variants={sectionItemVariants}
                    className="flex items-center gap-4"
                  >
                    <span className="flex items-center justify-center w-8 h-8 font-bold text-white rounded-full bg-primary font-teachers">
                      {index + 1}
                    </span>
                    <span className="font-semibold font-teachers">{item.title}</span>
                  </motion.h4>
                ),
            )}
          </div>

          <div className="flex flex-col gap-7">
            {steps.map(
              (item, index) =>
                index >= 2 && (
                  <motion.h4
                    key={`${item.title}-${index}`}
                    variants={sectionItemVariants}
                    className="flex items-center gap-4"
                  >
                    <span className="flex items-center justify-center w-8 h-8 font-bold text-white rounded-full bg-primary font-teachers">
                      {index + 1}
                    </span>
                    <span className="font-semibold font-teachers">{item.title}</span>
                  </motion.h4>
                ),
            )}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HowItWorks;
