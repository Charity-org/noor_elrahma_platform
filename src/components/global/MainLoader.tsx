"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MainLoader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-primary">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex flex-col items-center gap-6"
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
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold text-white font-cairo"
          >
            نور الرحمة
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
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
