"use client";

import { motion } from "framer-motion";

export default function ProjectsByRegion() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className="mx-auto max-w-5xl text-center">
          {/* Title */}
          <h2 className="text-[clamp(1.5rem,3vw,3rem)] font-bold mb-4 font-teachers">
            Projects by Region
          </h2>

          {/* Description */}
          <p className="font-inter text-[clamp(0.9rem,1vw,1.1rem)]">
            These are the locations of the water wells that were built thanks to your generous
            donations, providing clean and safe water to those in need. Your kindness has brought
            life, hope, and relief to many families. We are deeply grateful for your support and for
            choosing to be a part of this lasting Project.
            <br />
            <span className="block mt-3">
              Thank you for your generosity and for making a real difference.
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
