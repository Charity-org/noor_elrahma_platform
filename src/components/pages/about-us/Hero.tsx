import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full">
      <Image
        src="/assets/about-us-1.png"
        alt="About Us"
        fill
        className="object-cover absolute"
        priority
      />
      <div className="overlay"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-white font-bold font-teachers text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] drop-shadow-2xl">
          Make a Difference, Support Those in Need.
        </h1>
        <p className="font-inter text-white/90 text-lg md:text-xl mt-4 max-w-[60ch] drop-shadow-md">
          We aspire to a society full of goodness
        </p>
      </div>
    </section>
  );
}
