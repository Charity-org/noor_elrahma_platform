"use client";

import { ReactLenis } from "lenis/react";
import { LenisOptions } from "lenis";
import "lenis/dist/lenis.css";

interface SmoothScrollProps {
  children?: React.ReactNode;
  options?: LenisOptions;
  className?: string;
  root?: boolean;
}

const SmoothScroll = ({
  children,
  options = {},
  className = "",
  root = false,
}: SmoothScrollProps) => {
  const defaultOptions: LenisOptions = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    touchMultiplier: 2,
    ...options,
  };

  return (
    <ReactLenis root={root} options={defaultOptions} className={className}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
