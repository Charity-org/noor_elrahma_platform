"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    } as const,
  },
};

export default function OurOrganization() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="container flex flex-col md:flex-row gap-10" variants={contentVariants}>
        <div className="relative w-full md:w-1/2 h-[clamp(35rem,40vw,30rem)]">
          <Image
            src="/assets/about-us-2.png"
            alt="Humanitarian work"
            width={480}
            height={480}
            className="rounded-4xl object-cover h-full w-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="md:w-1/2 flex flex-col">
          <h3 className="text-5xl font-bold font-teachers mb-6 md:mb-10">About The Project:</h3>
          <ul className="list-disc space-y-8 font-semibold font-inter">
            <li>
              We are a newly established humanitarian charity organization, born from hands-on
              volunteer work and direct involvement in helping people in need. Our goal is to
              support the most vulnerable families and improve their lives through compassionate and
              sustainable solutions.
            </li>
            <li>
              Before officially founding the organization, our team actively participated in
              supporting various charitable initiatives and local charities. This practical
              experience on the ground helped us build real understanding and motivated us to
              establish an independent organization based on organization, transparency, and
              credibility in charitable work.
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
}
