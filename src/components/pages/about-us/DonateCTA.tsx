import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function DonateCTA() {
  return (
    <section className="w-full px-4 py-10 flex justify-center bg-[#FFFFFF]">
      <div className="max-w-5xl w-full bg-white border rounded-xl px-6 md:px-10 py-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 shadow-sm">
        {/* Icon */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/about-us-4.png"
            alt="Donate icon"
            width={70}
            height={70}
            className="opacity-60"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold mb-2 font-teachers">
            Help Us to create make the world more better.
          </h3>
          <p className="text-muted-foreground text-sm md:text-base font-inter">
            Join us in making a real difference — every contribution creates meaningful impact.
          </p>
        </div>

        {/* Button */}
        <div>
          <Button className="bg-primary hover:bg-primary/90 transition text-white px-6 py-3 rounded-full font-bold text-sm md:text-base cursor-pointer font-teachers">
            DONATE NOW
          </Button>
        </div>
      </div>
    </section>
  );
}
