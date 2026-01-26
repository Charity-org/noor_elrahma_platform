"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

import { Button, buttonVariants } from "@/components/ui/button";
import SkeletonImage from "@/components/global/SkeletonImage";

import { containerVariants } from "@/lib/animations/home/HeroAnimationOptions";
import { itemVariants, titleVariants } from "@/lib/animations/home/HeroAnimationOptions";

import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

import { HeroDataType } from "@/types/hometypes";
import styles from "@/styles/CarouselSingleView.module.css";

const Hero = ({ heroData }: { heroData: HeroDataType[] }) => {
  const locale = useLocale();
  const direction = locale === "ar" ? "rtl" : "ltr";
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const t = useTranslations("hero");

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={`${styles.embla} h-[calc(100vh-98px)]`}>
      <div className={`${styles.embla__viewport} h-full`} ref={emblaRef}>
        <div className={`${styles.embla__container} select-none h-full`}>
          {heroData.map(
            ({ donation, donators, image, projectDescription, projectId, projectTitle }, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={`${projectId}`}
                  className={`${styles.embla__slide} h-full w-full relative overflow-hidden`}
                >
                  <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: isActive ? 1 : 1.1 }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute inset-0 z-0"
                  >
                    {image && (
                      <SkeletonImage
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image}`}
                        alt={projectTitle || "Project image"}
                        fill
                        containerClassName="absolute inset-0 -z-10 w-full h-full"
                        className="object-cover bg-primary-hover w-full h-full"
                        sizes="100vw"
                        loading="eager"
                      />
                    )}
                    <div className="overlay"></div>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    animate={isActive ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="relative z-10 h-full flex flex-col gap-10 md:gap-16 justify-center items-center text-center px-6"
                  >
                    <motion.h1
                      variants={titleVariants}
                      className="text-white font-bold w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,5vw,6rem)] leading-[1.1] drop-shadow-2xl max-w-[20ch] md:max-w-none"
                    >
                      {projectTitle}
                    </motion.h1>

                    <motion.p
                      variants={itemVariants}
                      className="font-inter text-white/80 text-[clamp(1rem,2vw,1.5rem)] max-w-[40ch] md:max-w-[60ch] drop-shadow-md"
                    >
                      {projectDescription}
                    </motion.p>

                    <motion.div
                      variants={itemVariants}
                      className="flex items-center md:gap-20 gap-10"
                    >
                      <h3 className="text-[clamp(1rem,2vw,1.5rem)] flex flex-col md:flex-row items-center md:gap-4 text-white">
                        <span className="text-third font-bold font-teachers">${donation}</span>
                        <span>{t("donation")}</span>
                      </h3>

                      <h3 className="text-[clamp(1rem,2vw,1.5rem)] flex flex-col md:flex-row items-center md:gap-4 text-white">
                        <span className="text-third font-bold font-teachers">{donators}</span>
                        <span>{t("donators")}</span>
                      </h3>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex items-center gap-10">
                      <Link
                        href={`/projects/${projectId}`}
                        className={cn(
                          buttonVariants({ variant: "outline" }),
                          "text-third px-4 md:px-6 md:py-10 py-6 md:w-[15ch] bg-transparent border-third cursor-pointer font-teachers text-lg md:text-2xl hover:bg-third/10 hover:text-third",
                        )}
                      >
                        {t("view_project")}
                      </Link>
                      <Button className="bg-third px-4 md:px-6 md:py-10 py-6 md:w-[15ch] cursor-pointer hover:bg-third/80 md:text-2xl text-lg font-teachers">
                        {t("donate_now")}
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
