import Image from "next/image";

const DonateSection = () => {
  return (
    <section className="w-full py-16 px-4 flex justify-center">
      <div className="max-w-4xl w-full text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-teachers">Why Donate With Us?</h2>

        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-10 font-inter">
          Because We Believe That Every Donation Is A Trust, And That Trust Is Built Through
          Actions, Not Words.
          <br />
          We Promise That Every Contribution Will Have A Clear, Documented, And Transparently Shared
          Impact.
        </p>

        {/* Video Thumbnail */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/assets/about-us-3.png"
            alt="Donation distribution"
            width={900}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />

          {/* Play Button */}
          <button
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition"
          >
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
