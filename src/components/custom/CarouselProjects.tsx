"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { DotButton, useDotButton } from "@/components/ui/EmblaCarouselDotButton";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/ui/EmblaCarouselArrowButtons";
import ProjectCard from "./ProjectCard";

import { Project } from "@/types/layoutTypes";

import "../../styles/emblaCarouselSlidesPerView.css";

type PropType = {
  projects: Project[];
  options?: EmblaOptionsType;
};

const CarouselProjects: React.FC<PropType> = (props) => {
  const { projects, options } = props;
  const defaultOptions: EmblaOptionsType = { loop: true, ...options };
  const [emblaRef, emblaApi] = useEmblaCarousel(defaultOptions);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, atEnd, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project) => (
            <div className="embla__slide" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} isActive={atEnd} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} isActive={!atEnd} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselProjects;
