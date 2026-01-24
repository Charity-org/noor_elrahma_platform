"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";

interface SkeletonImageProps extends ImageProps {
  containerClassName?: string;
}

const SkeletonImage = ({
  className,
  containerClassName,
  alt,
  src,
  ...props
}: SkeletonImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Check if src is valid
  const isValidSrc = src && typeof src === "string" && src.trim().length > 0;

  // If no valid src, show skeleton permanently
  if (!isValidSrc || hasError) {
    return (
      <div className={cn("relative overflow-hidden", containerClassName)}>
        <Skeleton className={cn("absolute inset-0 z-10 size-full", className)} />
      </div>
    );
  }

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
        src={src}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        alt={alt || "Image"}
        {...props}
      />
    </div>
  );
};

export default SkeletonImage;
