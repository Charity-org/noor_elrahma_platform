"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback } from "react";

import UserAvatar from "@/components/layout/UserAvatar";
import { buttonVariants } from "@/components/ui/button";

import {
  mobileItemVariants,
  mobileMenuVariants,
} from "@/lib/animations/home/NavBarAnimationOptions";

import { authClient } from "@/lib/auth-client";
import { navLinksData } from "@/constants/layoutData";
import handleSignOut from "@/utils/handleSignOut";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface ResponsiveNavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  pathName: string;
}

export default function ResponsiveNavbar({
  isMenuOpen,
  setIsMenuOpen,
  pathName,
}: ResponsiveNavbarProps) {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const isLoggedIn = !!session?.user;

  const handleClose = useCallback(() => {
    setIsMenuOpen(false);
  }, [setIsMenuOpen]);

  const handleLogout = useCallback(async () => {
    await handleSignOut();
    setIsMenuOpen(false);
    router.push("/");
  }, [setIsMenuOpen, router]);

  return (
    <AnimatePresence mode="wait">
      {isMenuOpen && (
        <motion.div
          key="mobile-menu"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="responsive-nav flex flex-col gap-10 overflow-y-auto scrollbar-hide"
        >
          {/* User Header */}
          {isLoggedIn && (
            <motion.div
              variants={mobileItemVariants}
              className="flex items-center gap-4 w-full p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
            >
              <UserAvatar style="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white font-teachers">
                  {session?.user?.name}
                </span>
                <span className="text-sm text-gray-300 font-inter">{session?.user?.email}</span>
              </div>
            </motion.div>
          )}

          {/* Navigation Links */}
          <ul className="flex flex-col gap-6 w-full">
            {navLinksData.map(({ name, link }) => {
              const isActive = pathName === link || pathName.startsWith(`${link}/`);

              return (
                <motion.li
                  key={name}
                  variants={mobileItemVariants}
                  className="border-b border-white/5 pb-4 last:border-0"
                >
                  <Link
                    onClick={handleClose}
                    className={cn(
                      "text-2xl font-bold font-teachers capitalize transition-colors",
                      isActive ? "text-third" : "text-white hover:text-third/80",
                    )}
                    href={link}
                    prefetch={true}
                  >
                    {name}
                  </Link>
                </motion.li>
              );
            })}

            {/* Profile Link - Only when logged in */}
            {isLoggedIn && (
              <motion.li
                variants={mobileItemVariants}
                className="border-b border-white/5 pb-4 last:border-0"
              >
                <Link
                  onClick={handleClose}
                  className={cn(
                    "text-2xl font-bold font-teachers capitalize transition-colors",
                    pathName === "/profile" || pathName.startsWith("/profile")
                      ? "text-third"
                      : "text-white hover:text-third/80",
                  )}
                  href="/profile"
                  prefetch={true}
                >
                  profile
                </Link>
              </motion.li>
            )}
          </ul>

          {/* Action Buttons */}
          <motion.div variants={mobileItemVariants} className="w-full space-y-6">
            {/* Main CTA Button */}
            <Link
              href={isLoggedIn ? "/donate" : "/sign-in"}
              onClick={handleClose}
              className={cn(
                buttonVariants(),
                "bg-third hover:bg-third/90 w-full py-6 text-xl font-bold rounded-2xl shadow-lg shadow-third/20",
              )}
              prefetch={true}
            >
              {isLoggedIn ? "donate now" : "sign in"}
            </Link>

            {/* Logout Button */}
            {isLoggedIn && (
              <div className="flex items-center justify-center">
                <button
                  onClick={handleLogout}
                  type="button"
                  className="text-white text-sm border-b font-medium hover:text-third hover:border-third transition-colors"
                >
                  Log Out
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
