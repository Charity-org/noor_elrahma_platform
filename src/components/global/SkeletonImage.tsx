"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";

interface SkeletonImageProps extends ImageProps {
  containerClassName?: string;
}

const SkeletonImage = ({ className, containerClassName, alt, ...props }: SkeletonImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Skeleton - Shows only while loading */}
      {isLoading && <Skeleton className={cn("absolute inset-0 z-10 size-full", className)} />}

      {/* Image - Fade in when loaded */}
      <Image
        className={cn(
          "transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100",
          className,
        )}
        onLoad={() => setIsLoading(false)}
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default SkeletonImage;
