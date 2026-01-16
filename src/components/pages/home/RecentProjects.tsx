import CarouselProjects from "@/components/custom/CarouselProjects";
import { Button } from "@/components/ui/button";
import { recentProjects } from "@/constants/layoutData";

const RecentProjects = () => {
  return (
    <section className="container mt-32">
      <div className="flex items-center justify-between gap-5 mb-16">
        <h2 className="font-bold font-teachers text-[clamp(1.8rem,4vw,3.15rem)]">
          Recent Projects
        </h2>
        <Button
          variant={"outline"}
          className="text-third bg-transparent border-third cursor-pointer md:w-44 md:h-16 font-teachers md:text-lg md:rounded-2xl! font-bold hover:bg-third/10 hover:text-third"
        >
          See all Projects
        </Button>
      </div>

      <CarouselProjects projects={recentProjects} />
    </section>
  );
};

export default RecentProjects;
