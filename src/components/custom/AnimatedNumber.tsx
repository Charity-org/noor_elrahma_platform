"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";

const AnimatedNumber = ({ value }: { value: string }) => {
  const count = useMotionValue(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const rounded = useTransform(count, (latest) => {
    const num = Math.floor(latest);
    if (value.includes("K")) return `${num}K`;
    if (value.includes("M")) {
      const fixed = latest.toFixed(2);
      return `${fixed}M`;
    }
    if (value.includes("+")) return `${num}+`;
    return num.toString();
  });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[KM+]/g, ""));
      const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [value, count, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default AnimatedNumber;
