"use client";

import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

import { heroData } from "@/constants/layoutData";
import { Button } from "@/components/ui/button";
import SkeletonImage from "@/components/global/SkeletonImage";

import { containerVariants } from "@/lib/animations/HeroAnimationOptions";
import { itemVariants, titleVariants } from "@/lib/animations/HeroAnimationOptions";

import styles from "@/styles/CarouselSingleView.module.css";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

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
          {heroData.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={`${slide.title}-${index}`}
                className={`${styles.embla__slide} h-full w-full relative overflow-hidden`}
              >
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: isActive ? 1 : 1.1 }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute inset-0 z-0"
                >
                  <SkeletonImage
                    src={slide.image}
                    alt={slide.title}
                    fill
                    containerClassName="absolute inset-0 -z-10 w-full h-full"
                    className="object-cover bg-primary-hover w-full h-full"
                    sizes="100vw"
                  />
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
                    className="text-white font-bold w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,8vw,9rem)] leading-[1.1] drop-shadow-2xl max-w-[20ch] md:max-w-none"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="font-inter text-white/80 text-[clamp(1rem,2vw,1.5rem)] max-w-[40ch] md:max-w-[60ch] drop-shadow-md"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    className="flex items-center md:gap-20 gap-10"
                  >
                    <h3 className="text-[clamp(1rem,2vw,1.5rem)] flex flex-col md:flex-row items-center md:gap-4 text-white">
                      <span className="text-third font-bold font-teachers">${slide.donations}</span>
                      <span>Donation</span>
                    </h3>

                    <h3 className="text-[clamp(1rem,2vw,1.5rem)] flex flex-col md:flex-row items-center md:gap-4 text-white">
                      <span className="text-third font-bold font-teachers">
                        {slide.helpedPeople}
                      </span>
                      <span>People Helped</span>
                    </h3>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-center gap-10">
                    <Button
                      variant={"outline"}
                      className="text-third px-4 md:px-6 md:py-10 py-6 md:w-[15ch] bg-transparent border-third cursor-pointer font-teachers text-lg md:text-2xl font-bold hover:bg-third/10 hover:text-third"
                    >
                      View Project
                    </Button>
                    <Button className="bg-third px-4 md:px-6 md:py-10 py-6 md:w-[15ch] cursor-pointer hover:bg-third/80 md:text-2xl text-lg font-teachers">
                      Donate Now
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
