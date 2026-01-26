"use client";

import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { DotButton, useDotButton } from "@/components/ui/EmblaCarouselDotButton";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/ui/EmblaCarouselArrowButtons";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";

import { ProjectCardData, recent_completed_projects } from "@/types/hometypes";
import { useLocale } from "next-intl";

import styles from "../../styles/CarouselSlidesPerView.module.css";

type PropType = {
  projects: (ProjectCardData | recent_completed_projects)[];
  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
};
const CarouselProjects: React.FC<PropType> = (props) => {
  const locale = useLocale();
  const direction = locale === "ar" ? "rtl" : "ltr";
  const { projects, options, plugins = [] } = props;
  const defaultOptions: EmblaOptionsType = { loop: true, direction, ...options };
  const [emblaRef, emblaApi] = useEmblaCarousel(defaultOptions, plugins);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, atEnd, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {projects.map((project, index) => {
            const id = "id" in project ? project.id : project.projectId;
            return (
              <div className={styles.embla__slide} key={`${id}-${index}`}>
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.embla__controls}>
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
};

export default CarouselProjects;
