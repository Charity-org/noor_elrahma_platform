import { someRealProjectsData } from "@/constants/layoutData";
import Image from "next/image";

const SomeRealProjects = () => {
  return (
    <section className="container">
      <h2 className="text-center main_title">Witness the Impact of Our Real Projects</h2>
      <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {someRealProjectsData.map((project, index) => (
          <div
            key={index}
            className="relative w-full overflow-hidden transition-all duration-500 shadow-lg group aspect-square rounded-4xl hover:shadow-2xl"
          >
            <Image
              src={project}
              alt="Impact Project"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 transition-colors duration-500 bg-black/20 group-hover:bg-black/0" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SomeRealProjects;
