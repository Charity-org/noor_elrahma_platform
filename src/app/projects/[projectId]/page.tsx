import About from "@/components/pages/single-project/About";
import Hero from "@/components/pages/single-project/Hero";
import Overview from "@/components/pages/single-project/Overview";
import RealProject from "@/components/pages/single-project/RealProject";

function ProjectDetailsPage() {
  return (
    <div>
      <Hero />
      <About />
      <RealProject />
      <Overview />
    </div>
  );
}

export default ProjectDetailsPage;
