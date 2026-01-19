import { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 1.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
};

const mobileMenuVariants: Variants = {
  hidden: {
    y: "-100%",
    transition: {
      duration: 0.2,
      ease: [0.33, 1, 0.68, 1],
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export { containerVariants, itemVariants, logoVariants, mobileMenuVariants, mobileItemVariants };
