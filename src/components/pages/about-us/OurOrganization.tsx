import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative w-full h-[320px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/assets/about-us-2.png"
            alt="Humanitarian work"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Us:</h2>

          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-black shrink-0" />
              <p>
                We are a newly established humanitarian charity organization, born from hands-on
                volunteer work and direct involvement in helping people in need. Our goal is to
                support the most vulnerable families and improve their lives through compassionate
                and sustainable solutions.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-black shrink-0" />
              <p>
                Before officially founding the organization, our team actively participated in
                supporting various charitable initiatives and local charities. This practical
                experience on the ground helped us build real understanding and motivated us to
                establish an independent organization based on organization, transparency, and
                credibility in charitable work.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
