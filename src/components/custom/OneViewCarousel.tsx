"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "@/components/ui/EmblaCarouselDotButton";

import { cn } from "@/lib/utils";

import styles from "@/styles/CarouselSingleView.module.css";
import SkeletonImage from "../global/SkeletonImage";

type Card = {
  title: string;
  src: string;
};

export function OneViewCarousel({ cards }: { cards: Card[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {cards.map((card, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className="relative h-[50dvh] w-full mb-4">
                <SkeletonImage
                  src={card.src}
                  alt={card.title}
                  fill
                  containerClassName="w-full h-full"
                  className="object-cover bg-primary-hover rounded-4xl w-full h-full"
                  sizes="100vw"
                />
                <h3 className="text-white font-medium text-lg text-center absolute bottom-4 left-5 bg-black/50 px-4 py-2 rounded-full">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={cn(styles.embla__controls)}>
        <div className={cn(styles.embla__dots)}>
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
