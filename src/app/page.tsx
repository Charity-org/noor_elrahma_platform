import CompletedProjects from "@/components/pages/home/CompletedProjects";
import Hero from "@/components/pages/home/Hero";
import HowItWorks from "@/components/pages/home/HowItWorks";
import RecentProjects from "@/components/pages/home/RecentProjects";
import SomeRealProjects from "@/components/pages/home/SomeRealProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="mt-32 space-y-32">
        <HowItWorks />
        <RecentProjects />
        <CompletedProjects />
        <SomeRealProjects />
      </main>
    </>
  );
}
