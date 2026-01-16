"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import BurgerBtn from "@/components/layout/BurgerBtn";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const navLinksData = [
    {
      name: "Home",
      link: "/",
      isActive: pathName === "/",
    },
    {
      name: "Projects",
      link: "/projects",
      isActive: pathName === "/projects",
    },
    {
      name: "News",
      link: "/news",
      isActive: pathName === "/news",
    },
    {
      name: "About Us",
      link: "/about-us",
      isActive: pathName === "/about-us",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
      isActive: pathName === "/contact-us",
    },
  ];
  return (
    <header className="bg-primary z-50 sticky top-0 left-0 w-full">
      {/* main navbar */}
      <nav className="container flex justify-between items-center py-5">
        <Image src="/assets/logo.png" alt="Noor Elrahmat Logo" width={44} height={58} />

        <ul className={"hidden md:flex md:gap-8 lg:gap-16"}>
          {navLinksData.map((link) => (
            <li key={link.name}>
              <Link
                className={`navLink after:w-0 ${link.isActive ? "text-third after:w-full" : "text-white"}`}
                href={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Button className="bg-third hover:bg-third/90 cursor-pointer rounded-[16px]! h-12 text-[20px] capitalize hidden md:block md:w-[13ch] font-teachers font-bold">
          donate now
        </Button>

        <BurgerBtn setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </nav>

      {/* responsive navbar */}
      <div className={`responsive-nav ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <ul className={"flex flex-col gap-8 items-center self-start"}>
          {navLinksData.map((link) => (
            <li key={link.name} onClick={() => setIsMenuOpen(false)}>
              <Link
                className={`navLink after:w-0 ${link.isActive ? "text-third after:w-full" : "text-white"}`}
                href={link.link}
              >
                {link.name}
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
