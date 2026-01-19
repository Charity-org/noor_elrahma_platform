import Image from "next/image";

function Overview() {
  return (
    <section className="container mb-10">
      <h3 className="font-bold font-teachers text-5xl mb-15 max-w-3xl">
        About the happiness of children with the clean water
      </h3>

      <div className="relative w-full h-[clamp(35rem,40vw,30rem)]">
        <Image
          src="/assets/overview.jpg"
          alt="project-video"
          fill
          className="rounded-4xl object-cover h-full w-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
        />
      </div>
    </section>
  );
}

export default Overview;
