"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import BurgerBtn from "@/components/layout/BurgerBtn";
import UserMenu from "@/components/layout/UserMenu";

import { fakeUser } from "@/constants/fakeUser";
import { navLinksData } from "@/constants/layoutData";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  return (
    <header className="bg-primary z-50 sticky top-0 left-0 w-full">
      {/* main navbar */}
      <nav className="container flex justify-between items-center py-5">
        <Image src="/assets/logo.png" alt="Noor Elrahmat Logo" width={44} height={58} />

        <ul className={"hidden md:flex md:gap-8 lg:gap-16"}>
          {navLinksData.map(({ link, name }) => (
            <li key={name}>
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
            </li>
          ))}
        </ul>

        {fakeUser.isAuthenticated ? (
          <div className="hidden md:block">
            <UserMenu />
          </div>
        ) : (
          <Button className="bg-third hover:bg-third/90 cursor-pointer rounded-3xl! h-12 text-[20px] capitalize hidden md:block md:w-[13ch] font-teachers font-bold">
            donate now
          </Button>
        )}

        <BurgerBtn setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </nav>

      {/* responsive navbar */}
      <div className={`responsive-nav ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <ul className={"flex flex-col gap-8 items-center self-start"}>
          {navLinksData.map(({ name, link }) => (
            <li key={name} onClick={() => setIsMenuOpen(false)}>
              <Link
                className={`navLink after:w-0 ${
                  (
                    link === "/"
                      ? pathName === link
                      : pathName === link || pathName.startsWith(`${link}/`)
                  )
                    ? "text-third after:w-full"
                    : "text-white"
                }`}
                href={link}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <Button
          className="bg-third hover:bg-third/90 cursor-pointer capitalize w-full"
          onClick={() => setIsMenuOpen(false)}
        >
          donate now
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
