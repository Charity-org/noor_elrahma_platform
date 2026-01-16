import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import "../../styles/emblaParallaxCarouselSlidesPerView.css";

type PropType = {
  projects: string[];
};

function ParallaxCarouselProject({ projects }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

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
        const translate = diffToTarget * (-1 * 18) + "%";
        const layer = slides[slideIndex].querySelector(".real__project__embla__parallax__layer");

        if (layer) {
          (layer as HTMLElement).style.transform = `translateX(${translate})`;
        }
      });
    });
  }, []);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const timeoutId = setTimeout(() => {
      onInit(emblaApi);
      onSelect(emblaApi);
      tweenParallax(emblaApi);
      emblaApi.reInit();
    }, 20);

    emblaApi
      .on("reInit", onInit)
      .on("reInit", onSelect)
      .on("reInit", tweenParallax)
      .on("scroll", tweenParallax)
      .on("select", onSelect);

    return () => {
      clearTimeout(timeoutId);
      emblaApi
        .off("reInit", onInit)
        .off("reInit", onSelect)
        .off("reInit", tweenParallax)
        .off("scroll", tweenParallax)
        .off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect, tweenParallax]);
  return (
    <div className="real_project_embla" ref={emblaRef}>
      <div className="real__project__embla__container">
        {projects.map((image, index) => (
          <div key={`${image} - ${index}`} className="real__project__embla__slide">
            <div className="real__project__embla__parallax">
              <div className="real__project__embla__parallax__layer">
                <Image
                  src={image}
                  alt={`Project moment ${index}`}
                  width={310}
                  height={310}
                  className="real__project__embla__parallax__img"
                />
                {/* <div className="overlay"></div> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center max-w-6xl mx-auto mt-8 px-4">
        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/40 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-primary w-4 ring-2 ring-primary/20"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParallaxCarouselProject;
