"use client";

import SubPagesHero from "@/components/custom/SubPagesHero";
import { container, subTextBox } from "@/lib/animations/news/SubHeroAnimationOptions";
import { motion } from "framer-motion";
import NewBox from "./NewBox";
import { newsBoxVariant } from "@/lib/animations/news/NewsBoxAnimationOptions";

import { NewsType } from "@/types/hometypes";
import { useTranslations } from "next-intl";

const NewsMainBoxes = ({ newsData }: { newsData: NewsType[] }) => {
  const t = useTranslations("contact_us_page");
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="overflow-hidden"
      >
        <SubPagesHero bgImage="/assets/hero-4.jpg">
          <motion.div
            variants={subTextBox}
            className="h-full flex flex-col gap-4 justify-center items-center text-center text-white"
          >
            <h1 className="text-white font-bold w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,4vw,6rem)] leading-[1.1] drop-shadow-2xl max-w-[20ch] md:max-w-none">
              {t("hero_title")}
            </h1>
            <p className="font-inter text-white/80 text-[clamp(1rem,2vw,1.5rem)] max-w-[40ch] md:max-w-[60ch] drop-shadow-md">
              {t("hero_description")}
            </p>
          </motion.div>
        </SubPagesHero>
      </motion.div>

      <main className="container my-32 space-y-32">
        {newsData.map((_, index) => (
          <motion.div
            key={`news-${index}`}
            variants={newsBoxVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`flex items-center flex-wrap gap-6 lg:gap-14 group/newsbox ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            <NewBox {...newsData[index]} />
          </motion.div>
        ))}
      </main>
    </>
  );
};

export default NewsMainBoxes;
