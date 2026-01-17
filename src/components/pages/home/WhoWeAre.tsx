"use client";

import { useState } from "react";
import VerticalOneViewCarousel from "@/components/custom/VerticalOneViewCarousel";
import { whoWeAreData } from "@/constants/layoutData";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { motion, AnimatePresence } from "motion/react";

const WhoWeAre = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentPerson = whoWeAreData.personData[activeIndex] || whoWeAreData.personData[0];

  return (
    <section className="bg-[oklch(96%_0.01_85)] py-20 md:py-32 overflow-hidden">
      <div className="container flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-24">
        {/* Text Area */}
        <div className="flex flex-col justify-center basis-full lg:basis-1/2 py-4 md:py-8 lg:pr-12">
          <div className="space-y-6">
            <Quote
              size={60}
              className="text-primary rotate-180 relative z-10 lg:size-24"
              fill="currentColor"
            />

            {/* Stable Height Quote Header */}
            <div className="min-h-20 md:min-h-35 lg:min-h-45 flex flex-col justify-end">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentPerson.quote}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-3xl md:text-5xl lg:text-5xl font-bold text-primary capitalize leading-[1.2] font-teachers"
                >
                  {currentPerson.quote}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Stable Height Wisdom Text */}
            <div className="min-h-16 md:min-h-25 lg:min-h-35">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentPerson.wisdome}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-teachers min-h-[25dvh] md:min-h-[23dvh] xl:min-h-[10dvh] font-medium text-lg md:text-xl text-black/60 max-w-2xl"
                >
                  {currentPerson.wisdome}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Role Header */}
            <div className="font-teachers pt-6 border-t border-primary/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPerson.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="font-bold text-2xl text-primary">{currentPerson.name}</h3>
                  <p className="text-lg text-black/50">{currentPerson.position}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Carousel Area */}
        <div className="basis-full lg:basis-1/2 w-full max-w-3xl flex flex-col justify-center">
          <VerticalOneViewCarousel
            slides={whoWeAreData.images}
            onSelect={setActiveIndex}
            options={{ loop: true }}
            plugins={[Autoplay({ delay: 10000, stopOnInteraction: false })]}
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
