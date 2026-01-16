import Image from "next/image";

function About() {
  return (
    <section className="container flex flex-col md:flex-row gap-10">
      <div className="relative w-full md:w-1/2 h-[clamp(35rem,40vw,30rem)]">
        <Image
          src="/assets/about.jpg"
          alt="About-project"
          width={480}
          height={480}
          className="rounded-4xl object-cover h-full w-full"
        />
      </div>

      <div className="md:w-1/2 flex flex-col">
        <h3 className="text-5xl font-bold font-teachers mb-6 md:mb-10">About The Project:</h3>
        <ul className="list-disc space-y-8 font-semibold font-inter">
          <li>
            We are a newly established humanitarian charity organization, born from hands-on
            volunteer work and direct involvement in helping people in need. Our goal is to support
            the most vulnerable families and improve their lives through compassionate and
            sustainable solutions.
          </li>
          <li>
            Before officially founding the organization, our team actively participated in
            supporting various charitable initiatives and local charities. This practical experience
            on the ground helped us build real understanding and motivated us to establish an
            independent organization based on organization, transparency, and credibility in
            charitable work.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
