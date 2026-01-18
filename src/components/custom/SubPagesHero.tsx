import { cn } from "@/lib/utils";
import Image from "next/image";

const SubPagesHero = ({ children, bgImage }: { children: React.ReactNode; bgImage: string }) => {
  return (
    <div className={cn("relative w-full h-[50vh]")} role="hero">
      <Image
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
