import Image from "next/image";

import { howItWorksData } from "@/constants/layoutData";

const HowItWorks = () => {
  return (
    <section className="container flex flex-col gap-16 lg:flex-row">
      <div className="relative w-full lg:w-1/2 h-[clamp(20rem,80vw,32.4rem)] rounded-4xl overflow-hidden">
        <Image
          src="/assets/howitworks.png"
          alt="how-it-works"
          className="absolute top-0 object-cover w-full h-full"
          fill
        />
      </div>

      <div className="flex flex-col justify-between w-full gap-8 lg:w-1/2">
        <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold font-teachers text-primary leading-[1.1]">
          Transforming Good Intentions into Good Actions
        </h2>
        <p className="text-[clamp(1rem,1.8vw,1.5rem)] font-inter font-semibold">
          We make it simple to turn compassion into real impact. By connecting donors with
          transparent, verified projects, we ensure that every act of kindness becomes meaningful
          action, supported by clear reporting and real results on the ground.
        </p>

        <div className="flex flex-col gap-7 md:gap-10 md:items-center md:flex-row">
          <div className="flex flex-col gap-7">
            {howItWorksData.map(
              (item, index) =>
                index < 2 && (
                  <h4 key={`${item.title}-${index}`} className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 font-bold text-white rounded-full bg-primary font-teachers">
                      {index + 1}
                    </span>
                    <span className="font-semibold font-teachers">{item.title}</span>
                  </h4>
                ),
            )}
          </div>

          <div className="flex flex-col gap-7">
            {howItWorksData.map(
              (item, index) =>
                index >= 2 && (
                  <h4 key={`${item.title}-${index}`} className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-8 h-8 font-bold text-white rounded-full bg-primary font-teachers">
                      {index + 1}
                    </span>
                    <span className="font-semibold font-teachers">{item.title}</span>
                  </h4>
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
