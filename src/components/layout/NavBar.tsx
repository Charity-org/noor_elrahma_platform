"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ResponsiveNavbar from "@/components/layout/ResponsiveNavbar";
import { buttonVariants } from "@/components/ui/button";
import BurgerBtn from "@/components/layout/BurgerBtn";
import UserMenu from "@/components/layout/UserMenu";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

import { useTranslations } from "next-intl";

import {
  containerVariants,
  itemVariants,
  logoVariants,
} from "@/lib/animations/home/NavBarAnimationOptions";

import { useAuth } from "@/providers/auth-provider";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const t = useTranslations("nav");

  const { session } = useAuth();

  const translatedNavLinks = [
    { name: t("home"), link: "/" },
    { name: t("projects"), link: "/projects" },
    { name: t("news"), link: "/news" },
    { name: t("about_us"), link: "/about-us" },
    { name: t("contact_us"), link: "/contact-us" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className="bg-primary z-50 sticky top-0 left-0 w-full"
    >
      {/* main navbar */}
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container flex justify-between items-center py-5"
      >
        <motion.div variants={logoVariants}>
          <Image src="/assets/logo.png" alt="Noor Elrahmat Logo" width={44} height={58} />
        </motion.div>

        <motion.ul
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className={"hidden lg:flex md:gap-8 lg:gap-16"}
        >
          {translatedNavLinks.map(({ link, name }) => (
            <motion.li key={link} variants={itemVariants} initial="hidden" animate="visible">
              <Link
                className={`navLink after:w-0 ${
                  pathName === link || pathName.startsWith(`${link}/`)
                    ? "text-third after:w-full font-bold"
                    : "text-white"
                }`}
                href={link}
              >
                {name}
              </Link>
            </motion.li>
          ))}
          <AnimatePresence mode="wait">
            {session && (
              <motion.li
                key="profile-link"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Link
                  className={`navLink after:w-0 ${
                    pathName === "/profile" || pathName.startsWith("/profile")
                      ? "text-third after:w-full font-bold"
                      : "text-white"
                  }`}
                  href="/profile"
                >
                  {t("profile")}
                </Link>
              </motion.li>
            )}
          </AnimatePresence>
        </motion.ul>

        {/* donate now and user menu */}
        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="hidden lg:flex items-center justify-center gap-6"
        >
          <LanguageSwitcher />
          <Link
            href="/sign-in"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-third hover:bg-third/90 cursor-pointer rounded-[16px]! h-12 text-[20px] capitalize md:w-[13ch] font-teachers",
            )}
          >
            {t("donate_now")}
          </Link>

          {session?.user && <UserMenu />}
        </motion.div>

        <motion.div variants={itemVariants} className="lg:hidden">
          <BurgerBtn setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </motion.div>
      </motion.nav>

      {/* responsive navbar */}
      <ResponsiveNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} pathName={pathName} />
    </motion.header>
  );
};

export default NavBar;
