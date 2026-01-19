"use client";

const AboutOrganization = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 font-teachers">About our Organization</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* LEFT COLUMN */}
        <div className="space-y-10">
          <Block
            title="Our Mission"
            icon={
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M12 21s-7-4.5-7-10a4 4 0 018-1 4 4 0 018 1c0 5.5-7 10-7 10z" />
              </svg>
            }
          >
            To provide humanitarian assistance to poor and vulnerable families, and to implement
            sustainable charitable projects based on proper planning, full documentation, and
            ensuring that aid reaches those who truly need it.
          </Block>

          <Block
            title="Our Vision"
            icon={
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            }
          >
            To become a trusted humanitarian organization that creates real impact in the lives of
            those in need, and serves as a clear and reliable bridge between donors and the impact
            of their donations.
          </Block>

          <Block
            title="Our Goals"
            icon={
              <svg viewBox="0 0 24 24" className="icon">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            }
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>Support the most vulnerable families</li>
              <li>Provide food and essential humanitarian aid</li>
              <li>Support charitable initiatives with sustainable impact</li>
              <li>Operate with full transparency toward donors</li>
              <li>Document all activities and projects with photos and reports</li>
            </ul>
          </Block>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-10">
          <Block
            title="Our Principles"
            icon={
              <svg viewBox="0 0 24 24" className="icon">
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
              </svg>
            }
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>Transparency: Every project and donation is documented</li>
              <li>Credibility: We do not exaggerate numbers or achievements</li>
              <li>Humanity: People always come first</li>
              <li>Integrity: Donations are delivered to those who deserve them</li>
            </ul>
          </Block>

          <Block
            title="Our Achievements"
            icon={
              <svg viewBox="0 0 24 24" className="icon">
                <circle cx="12" cy="8" r="5" />
                <path d="M8 14v8l4-2 4 2v-8" />
              </svg>
            }
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>
                We are currently in the establishment phase as an independent organization, relying
                on our previous experience in humanitarian work and direct involvement in supporting
                families and initiatives.
              </li>
              <li>
                We are actively working on launching well-documented projects supported by clear
                numbers and visual reports, allowing donors to become true partners in creating
                impact.
              </li>
            </ul>
          </Block>
        </div>
      </div>

      {/* Inline SVG styling */}
      <style jsx>{`
        .icon {
          width: 16px;
          height: 16px;
          stroke: currentColor;
          stroke-width: 1.8;
          fill: none;
        }
      `}</style>
    </section>
  );
};

export default AboutOrganization;

/* 🔹 Block component (same file) */
type BlockProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

const Block = ({ title, icon, children }: BlockProps) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
          {icon}
        </span>
        <h3 className="font-bold text-lg font-teachers">{title}</h3>
      </div>

      <div className="text-muted-foreground leading-relaxed text-sm font-inter">{children}</div>
    </div>
  );
};
