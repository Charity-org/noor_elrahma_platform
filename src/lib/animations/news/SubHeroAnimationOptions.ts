import { Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delay: 1,
      duration: 0.8,
      ease: "easeOut",
      delayChildren: 1.3,
    },
  },
};

const subTextBox: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export { container, subTextBox };
