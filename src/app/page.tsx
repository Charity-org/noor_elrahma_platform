import CompletedProjects from "@/components/pages/home/CompletedProjects";
import Hero from "@/components/pages/home/Hero";
import HowItWorks from "@/components/pages/home/HowItWorks";
import RecentProjects from "@/components/pages/home/RecentProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <HowItWorks />
        <RecentProjects />
        <CompletedProjects />
      </main>
    </>
  );
}
