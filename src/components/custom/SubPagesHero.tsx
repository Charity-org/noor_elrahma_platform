"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import SkeletonImage from "../global/SkeletonImage";

const SubPagesHero = ({ children, bgImage }: { children: React.ReactNode; bgImage: string }) => {
  // const [randomIndex] = useState(() =>
  //   randomImages.length > 0 ? Math.floor(Math.random() * randomImages.length) : 0,
  // );

  // const imageSrc =
  //   randomImages.length > 0 && randomImages[randomIndex]
  //     ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${randomImages[randomIndex]}`
  //     : "/assets/real-pr-5.png";

  return (
    <div className={cn("relative w-full h-[50vh]")} role="hero">
      <SkeletonImage
        src={bgImage}
        alt="Hero background"
        fill
        className="object-cover object-center -z-10"
      />
      <div className="overlay"></div>
      <div className="container relative z-20 h-full flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
};

export default SubPagesHero;
