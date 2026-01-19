import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import UserAvatar from "@/components/layout/UserAvatar";
import { Button } from "@/components/ui/button";

import {
  mobileItemVariants,
  mobileMenuVariants,
} from "@/lib/animations/home/NavBarAnimationOptions";

import { fakeUser } from "@/constants/fakeUser";
import { navLinksData } from "@/constants/layoutData";

const ResponsiveNavbar = ({
  isMenuOpen,
  setIsMenuOpen,
  pathName,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  pathName: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      {isMenuOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="responsive-nav flex flex-col gap-10 overflow-y-auto scrollbar-hide"
        >
          {/* Top Section: Navigation & User Head */}
          <div className="flex flex-col gap-10 w-full">
            {/* User Header (Mobile Only) */}
            {fakeUser.isAuthenticated && (
              <motion.div
                variants={mobileItemVariants}
                className="flex items-center gap-4 w-full p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
              >
                <UserAvatar style="w-12 h-12" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-white font-teachers">
                    {fakeUser.name}
                  </span>
                  <span className="text-sm text-gray-300 font-inter">{fakeUser.email}</span>
                </div>
              </motion.div>
            )}

            {/* Main Links */}
            <ul className="flex flex-col gap-6 w-full">
              {navLinksData.map(({ name, link }) => (
                <motion.li
                  key={name}
                  variants={mobileItemVariants}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-white/5 pb-4 last:border-0"
                >
                  <Link
                    className={`text-2xl font-bold font-teachers capitalize transition-colors ${
                      pathName === link || pathName.startsWith(`${link}/`)
                        ? "text-third"
                        : "text-white hover:text-third/80"
                    }`}
                    href={link}
                  >
                    {name}
                  </Link>
                </motion.li>
              ))}
              {fakeUser.isAuthenticated && (
                <motion.li
                  variants={mobileItemVariants}
                  onClick={() => setIsMenuOpen(false)}
                  className="border-b border-white/5 pb-4 last:border-0"
                >
                  <Link
                    className={`text-2xl font-bold font-teachers capitalize transition-colors ${
                      pathName === "profile" ? "text-third" : "text-white hover:text-third/80"
                    }`}
                    href="/profile"
                  >
                    profile
                  </Link>
                </motion.li>
              )}
            </ul>
          </div>

          {/* Bottom Section: Settings & Actions */}
          <div className="flex flex-col gap-6 w-full">
            <motion.div variants={mobileItemVariants} className="w-full space-y-6">
              <Button
                className="bg-third hover:bg-third/90 cursor-pointer capitalize w-full py-6 text-xl font-bold rounded-2xl shadow-lg shadow-third/20"
                onClick={() => setIsMenuOpen(false)}
              >
                donate now
              </Button>

              {fakeUser.isAuthenticated && (
                <div className="flex items-center justify-center">
                  <button className="text-white text-sm border-b font-medium cursor-pointer transition-colors">
                    Log Out
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveNavbar;
