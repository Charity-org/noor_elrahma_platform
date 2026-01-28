"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";

import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "../ui/EmblaCarouselDotButton";

import styles from "@/styles/CarouselParallaxPerView.module.css";
import { NextButton, PrevButton, usePrevNextButtons } from "../ui/EmblaCarouselArrowButtons";

import { cn } from "@/lib/utils";

type PropType = {
  projects: {
    title: string;
    src: string;
  }[];
};

function ParallaxCarouselProject({ projects }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    dragFree: true,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, atEnd, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const tweenParallax = useCallback((emblaApi: EmblaCarouselType) => {
    const engine = emblaApi.internalEngine();
    if (!engine) return;

    const scrollProgress = emblaApi.scrollProgress();
    const slides = emblaApi.slideNodes();
    const scrollSnapList = emblaApi.scrollSnapList();

    scrollSnapList.forEach((scrollSnap, snapIndex) => {
      const diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        const translate = diffToTarget * (-1 * 11) + "%";
        const layer = slides[slideIndex].querySelector(`.${styles.embla__parallax__layer}`);

        if (layer) {
          (layer as HTMLElement).style.transform = `translateX(${translate})`;
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const timeoutId = setTimeout(() => {
      tweenParallax(emblaApi);
      emblaApi.reInit();
    }, 20);

    emblaApi.on("reInit", tweenParallax).on("scroll", tweenParallax);

    return () => {
      clearTimeout(timeoutId);
      emblaApi.off("reInit", tweenParallax).off("scroll", tweenParallax);
    };
  }, [emblaApi, tweenParallax]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {projects.map((project) => (
            <div key={project.title} className={styles.embla__slide}>
              <div className={styles.embla__parallax}>
                <div className={styles.embla__parallax__layer}>
                  <Image
                    src={
                      project.src && project.src.startsWith("http")
                        ? project.src
                        : project.src
                          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${project.src}`
                          : ""
                    }
                    alt={project.title}
                    width={310}
                    height={310}
                    className={`${styles.embla__parallax__img} ${styles.embla__slide__img}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        {/* Navigation Buttons */}
        <div className={styles.embla__buttons}>
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            isActive={atEnd}
            className={cn(
              styles.embla__button,
              styles.embla__button__prev,
              atEnd && styles.embla__button__active,
            )}
            svgClassName={styles.embla__button__svg}
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            isActive={!atEnd}
            className={cn(
              styles.embla__button,
              styles.embla__button__next,
              !atEnd && styles.embla__button__active,
            )}
            svgClassName={styles.embla__button__svg}
          />
        </div>

        {/* Dots */}
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                styles.embla__dot,
                index === selectedIndex && styles.embla__dot__selected,
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParallaxCarouselProject;
