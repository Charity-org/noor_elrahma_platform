import { someRealProjectsData } from "@/constants/layoutData";
import { FocusCards } from "@/components/ui/focus-cards";
import { OneViewCarousel } from "@/components/custom/OneViewCarousel";

const SomeRealProjects = () => {
  return (
    <section className="container">
      <h2 className="text-center main_title">Witness the Impact of Our Real Projects</h2>

      <div className="mt-16 md:block hidden">
        <FocusCards cards={someRealProjectsData} />
      </div>

      <div className="block md:hidden mt-16">
        <OneViewCarousel cards={someRealProjectsData} />
      </div>
    </section>
  );
};

export default SomeRealProjects;
