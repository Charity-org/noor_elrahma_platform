"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import BurgerBtn from "@/components/layout/BurgerBtn";
import UserMenu from "@/components/layout/UserMenu";

import { fakeUser } from "@/constants/fakeUser";
import { navLinksData } from "@/constants/layoutData";

import {
  containerVariants,
  itemVariants,
  logoVariants,
  mobileMenuVariants,
  mobileItemVariants,
} from "@/lib/animations/NavBarAnimationOptions";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }} // Smooth easeOutCubic
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

        <ul className={"hidden md:flex md:gap-8 lg:gap-16"}>
          {navLinksData.map(({ link, name }) => (
            <motion.li key={name} variants={itemVariants}>
              <Link
                className={`navLink after:w-0 ${
                  pathName === link || pathName.startsWith(`${link}/`)
                    ? "text-third after:w-full"
                    : "text-white"
                }`}
                href={link}
              >
                {name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {fakeUser.isAuthenticated ? (
          <motion.div variants={itemVariants} className="hidden md:block">
            <UserMenu />
          </motion.div>
        ) : (
          <motion.div variants={itemVariants} className="hidden md:block">
            <Button className="bg-third hover:bg-third/90 cursor-pointer rounded-3xl! h-12 text-[20px] capitalize md:w-[13ch] font-teachers font-bold">
              donate now
            </Button>
          </motion.div>
        )}

        <motion.div variants={itemVariants} className="md:hidden">
          <BurgerBtn setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </motion.div>
      </motion.nav>

      {/* responsive navbar */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="responsive-nav"
          >
            <ul className={"flex flex-col gap-8 items-center self-start"}>
              {navLinksData.map(({ name, link }) => (
                <motion.li
                  key={name}
                  variants={mobileItemVariants}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    className={`navLink after:w-0 ${
                      pathName === link || pathName.startsWith(`${link}/`)
                        ? "text-third after:w-full"
                        : "text-white"
                    }`}
                    href={link}
                  >
                    {name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div variants={mobileItemVariants} className="w-full">
              <Button
                className="bg-third hover:bg-third/90 cursor-pointer capitalize w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                donate now
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;
