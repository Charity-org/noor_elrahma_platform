import About from "@/components/pages/single-project/About";

import Overview from "@/components/pages/single-project/Overview";
import RealProject from "@/components/pages/single-project/RealProject";
import SubPagesHero from "@/components/custom/SubPagesHero";
import { Button } from "@/components/ui/button";

function ProjectDetailsPage() {
  return (
    <>
      <SubPagesHero bgImage="/assets/hero.jpg">
        <h1 className="font-bold text-[clamp(3rem,5vw,6rem)] text-white font-teachers">
          Water Well Project
        </h1>
        <p className="text-white text-[clamp(1.4rem,2vw,2.25rem)] pb-5 font-inter">
          we aspire to a society full of goodness
        </p>
        <Button className="py-6 px-12 uppercase font-bold text-white rounded-xl bg-third hover:bg-third/80">
          DONATE NOW
        </Button>
      </SubPagesHero>

      <main className="mt-32 space-y-32">
        <About />
        <RealProject />
        <Overview />
      </main>
    </>
  );
}

export default ProjectDetailsPage;
