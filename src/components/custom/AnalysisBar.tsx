"use client";

import AnimatedNumber from "@/components/custom/AnimatedNumber";
import { Earth, HandHeart, HouseHeart, Rocket } from "lucide-react";

const AnalysisBar = () => {
  const analysisData = [
    {
      title: "Projects completed",
      value: "11+",
      icon: <Rocket size={60} className="text-primary" />,
    },
    {
      title: "Monthly Donate",
      value: "100K",
      icon: <HandHeart size={60} className="text-primary" />,
    },
    {
      title: "Partners Worldwide",
      value: "2",
      icon: <Earth size={60} className="text-primary" />,
    },
    {
      title: "donations received",
      value: "1.45M",
      icon: <HouseHeart size={60} className="text-primary" />,
    },
  ];

  return (
    <section className="container py-16 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 text-center">
        {analysisData.map((item) => (
          <div key={item.title} className="space-y-4 text-primary group">
            <p className="flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              {item.icon}
            </p>
            <p className="font-teachers font-bold text-[clamp(2.5rem,5vw,4.5rem)] leading-none transition-transform duration-300 group-hover:scale-105">
              <AnimatedNumber value={item.value} />
            </p>
            <h3 className="font-teachers font-semibold text-[clamp(1.1rem,1.5vw,1.5rem)] capitalize opacity-70 group-hover:opacity-100 transition-opacity">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AnalysisBar;
