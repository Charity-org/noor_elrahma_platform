import { HeartPlus } from "lucide-react";

const ProjectFavBtn = () => {
  return (
    <div className="tooltip group/fav left-3">
      <HeartPlus
        className="text-primary group-hover/fav:text-white transition-colors duration-300"
        size={20}
      />
    </div>
  );
};

export default ProjectFavBtn;
