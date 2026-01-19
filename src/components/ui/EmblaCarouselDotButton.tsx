"use client";

import React, { ComponentPropsWithRef, useCallback, useSyncExternalStore } from "react";
import { EmblaCarouselType } from "embla-carousel";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

const EMPTY_SNAPS: number[] = [];

export const useDotButton = (emblaApi: EmblaCarouselType | undefined): UseDotButtonType => {
  const selectedIndex = useSyncExternalStore(
    useCallback(
      (callback) => {
        if (!emblaApi) return () => {};
        emblaApi.on("select", callback).on("reInit", callback);
        return () => {
          emblaApi.off("select", callback).off("reInit", callback);
        };
      },
      [emblaApi],
    ),
    () => (emblaApi ? emblaApi.selectedScrollSnap() : 0),
    () => 0,
  );

  const scrollSnaps = useSyncExternalStore(
    useCallback(
      (callback) => {
        if (!emblaApi) return () => {};
        emblaApi.on("reInit", callback);
        return () => {
          emblaApi.off("reInit", callback);
        };
      },
      [emblaApi],
    ),
    () => (emblaApi ? emblaApi.scrollSnapList() : EMPTY_SNAPS),
    () => EMPTY_SNAPS,
  );

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};
