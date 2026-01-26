"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { motion, useInView } from "framer-motion";
import {
  contactItemVariants,
  contactsVariants,
  containerVariants,
  linkItemVariants,
  logoSectionVariants,
  quickLinksVariants,
  socialVariants,
} from "@/lib/animations/home/FooterAnimationOptions";

import SociealBoxIcons from "@/components/custom/SociealBoxIcons";

import { footerContactsData } from "@/constants/layoutData";
import { useTranslations } from "next-intl";

const Footer = () => {
  const pathName = usePathname();
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });
  const t = useTranslations("nav");
  const f = useTranslations("footer");

  const translatedNavLinks = [
    { name: t("home"), link: "/" },
    { name: t("projects"), link: "/projects" },
    { name: t("news"), link: "/news" },
    { name: t("about_us"), link: "/about-us" },
    { name: t("contact_us"), link: "/contact-us" },
  ];

  return (
    <motion.footer
      ref={footerRef}
      className="bg-primary py-16 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container space-y-16">
        <div className="flex justify-between flex-wrap gap-10">
          {/* Logo Section */}
          <motion.div className="flex gap-1 sm:gap-5" variants={logoSectionVariants}>
            <div className="flex flex-col gap-4">
              <Image
                src="/assets/footer-logo.png"
                alt="Noor Elrahma charity organization logo"
                width={100}
                height={100}
                className="w-19.5 h-26.25"
                sizes="100px"
                priority={false}
              />
            </div>
            <p className="font-semibold font-inter text-[16px] text-white leading-7 w-79.25">
              {f("description")}
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <div className="flex-1">
            <div className="flex flex-col items-center gap-4">
              <motion.div className="space-y-4" variants={quickLinksVariants}>
                <motion.h3
                  className="font-semibold font-teachers text-[20px] text-white"
                  variants={linkItemVariants}
                >
                  {f("quick_links")}
                </motion.h3>

                <ul className="flex flex-col gap-2">
                  {translatedNavLinks.map(({ name, link }, index) => (
                    <motion.li key={name} variants={linkItemVariants} custom={index}>
                      <Link
                        className={`font-inter font-semibold text-[16px] hover:text-third transition-colors ${pathName === link ? "text-third" : "text-white"}`}
                        href={link}
                      >
                        {name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Contacts Section */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col items-center gap-4">
              <motion.div className="space-y-4 text-white" variants={contactsVariants}>
                {footerContactsData.map(({ title, value }, index) => (
                  <motion.p
                    className="space-x-2"
                    key={title}
                    variants={contactItemVariants}
                    custom={index}
                  >
                    <span className="font-semibold font-teachers text-[16px]">
                      {f(`contacts.${title.toLowerCase()}`)}:
                    </span>
                    <span className="font-inter font-semibold text-[16px] text-white/50">
                      {value}
                    </span>
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Social Icons Section */}
        <motion.div variants={socialVariants}>
          <SociealBoxIcons />
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
