"use client";

import React, { useEffect, useCallback } from "react";

import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/ui/EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "@/components/ui/EmblaCarouselDotButton";

import { cn } from "@/lib/utils";

import styles from "@/styles/CarouselVerticalView.module.css";
import SkeletonImage from "../global/SkeletonImage";

type PropType = {
  slides: { src: string }[];
  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
  onSelect?: (index: number) => void;
};

const VerticalOneViewCarousel: React.FC<PropType> = (props) => {
  const { slides, options, onSelect, plugins = [] } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: "y",
      ...options,
    },
    plugins,
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const onSelectInternal = useCallback(() => {
    if (!emblaApi) return;
    onSelect?.(emblaApi.selectedScrollSnap());
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelectInternal();
    emblaApi.on("select", onSelectInternal);
    emblaApi.on("reInit", onSelectInternal);
  }, [emblaApi, onSelectInternal]);

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className="relative w-full h-full">
                <SkeletonImage
                  src={slide.src}
                  alt={`Whoweare Slide ${index + 1}`}
                  fill
                  containerClassName="w-full h-full"
                  className="object-cover bg-primary-hover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <PrevButton
            isActive={!prevBtnDisabled}
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            className={cn(styles.embla__button, "rotate-90")}
            svgClassName={styles.embla__button__svg}
          />
          <NextButton
            isActive={!nextBtnDisabled}
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            className={cn(styles.embla__button, "rotate-90")}
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
    </section>
  );
};

export default VerticalOneViewCarousel;
