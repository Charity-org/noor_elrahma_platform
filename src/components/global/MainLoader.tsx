"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MainLoader = ({ mode = "loading" }: { mode?: "loading" | "transition" }) => {
  const isTransition = mode === "transition";

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center ${
        isTransition ? "pointer-events-none" : ""
      }`}
    >
      {/* Secondary Layer (Gold) - Slides up last */}
      <motion.div
        initial={isTransition ? { y: "0%" } : { y: "0%" }}
        animate={isTransition ? { y: "-100%" } : { y: "0%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        className="absolute inset-0 bg-third z-10"
      />

      {/* Primary Layer (Green) - Slides up first */}
      <motion.div
        initial={isTransition ? { y: "0%" } : { y: "0%" }}
        animate={isTransition ? { y: "-100%" } : { y: "0%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className="absolute inset-0 bg-primary z-20"
      />

      {/* Content Container */}
      <motion.div
        initial={isTransition ? { opacity: 1, y: 0 } : { opacity: 0, scale: 0.5 }}
        animate={isTransition ? { opacity: 0, y: -100 } : { opacity: 1, scale: 1 }}
        transition={
          isTransition
            ? { duration: 0.5, ease: "easeInOut" } // Exit
            : { duration: 0.5, ease: "easeOut" } // Entrance
        }
        className="relative flex flex-col items-center gap-6 z-30"
      >
        {/* Logo Container with Glow */}
        <div className="relative">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0px rgba(201, 162, 77, 0)",
                "0 0 0 20px rgba(201, 162, 77, 0.1)",
                "0 0 0 40px rgba(201, 162, 77, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-full"
          >
            <Image
              src="/assets/logo.png"
              alt="Noor Elrahmat Logo"
              width={80}
              height={105}
              className="drop-shadow-2xl"
              priority
            />
          </motion.div>
        </div>

        {/* Text */}
        <div className="text-center space-y-2">
          <motion.h1
            initial={isTransition ? { opacity: 1 } : { y: 20, opacity: 0 }}
            animate={isTransition ? { opacity: 1 } : { y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold text-white font-cairo"
          >
            نور الرحمة
          </motion.h1>
          <motion.p
            initial={isTransition ? { opacity: 1 } : { y: 20, opacity: 0 }}
            animate={isTransition ? { opacity: 1 } : { y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-third font-teachers text-lg tracking-[0.2em] uppercase"
          >
            Noor Elrahma
          </motion.p>
        </div>

        {/* Loading Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-third"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default MainLoader;
