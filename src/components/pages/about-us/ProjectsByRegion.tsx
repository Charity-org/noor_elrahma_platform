"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ProjectsByRegion() {
  const t = useTranslations("projects_by_region");

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
            {t("title")}
          </h2>

          {/* Description */}
          <p className="font-inter text-[clamp(0.9rem,1vw,1.1rem)]">
            {t("description")}
            <br />
            <span className="block mt-3">{t("thank_you")}</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
