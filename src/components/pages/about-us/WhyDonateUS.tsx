"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const WhyDonateUS = () => {
  const t = useTranslations("why_donate");
  return (
    <section className="w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div className="w-full text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-teachers">{t("title")}</h2>

          {/* Description */}
          <p className="text-[clamp(1rem,2vw,1.5rem)] font-semibold lg:font-medium mb-4 lg:mb-0 font-inter max-w-4xl text-center mx-auto leading-tight">
            {t("reason1")}
          </p>
          <p className="text-[clamp(1rem,2vw,1.5rem)] font-semibold lg:font-medium mb-4 lg:mb-0 font-inter max-w-4xl text-center mx-auto leading-tight">
            {t("reason2")}
          </p>

          {/* Video Thumbnail */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg pt-8">
            <Image
              src="/assets/about-us-3.png"
              alt="Donation distribution"
              width={900}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyDonateUS;
