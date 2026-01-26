import { cn } from "@/lib/utils";
import handelToggleFavAction from "@/utils/handelToggleFavAction";
import { HeartPlus } from "lucide-react";

const ProjectFavBtn = ({ projectId, isFavorite }: { projectId: number; isFavorite: boolean }) => {
  return (
    <div
      className={cn("tooltip group/fav left-3", isFavorite && "bg-primary!")}
      onClick={() => handelToggleFavAction(projectId)}
    >
      <HeartPlus
        className={cn(
          "group-hover/fav:text-white transition-colors duration-300",
          isFavorite && "text-white!",
        )}
        size={20}
      />
    </div>
  );
};

export default ProjectFavBtn;
