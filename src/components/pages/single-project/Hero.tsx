import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="relative bg-[url('/assets/hero.jpg')] w-full h-100 bg-cover bg-center">
      <div className="overlay"></div>
      <div className="container relative z-20 h-full flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-[clamp(3rem,5vw,6rem)] text-white font-teachers">
          Water Well Project
        </h1>
        <p className="text-white text-[clamp(1.4rem,2vw,2.25rem)] pb-5 font-inter">
          we aspire to a society full of goodness
        </p>
        <Button className="py-6 px-12 uppercase font-bold text-white rounded-xl bg-third hover:bg-third/80">
          DONATE NOW
        </Button>
      </div>
    </section>
  );
}

export default Hero;
