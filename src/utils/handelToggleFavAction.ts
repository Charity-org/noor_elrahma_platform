import { toggleFavAction } from "@/app/actions";
import { ToastMessage } from "@/components/global/ToastMessage";

const handelToggleFavAction = async (projectId: number) => {
  const { message, success } = await toggleFavAction(projectId);
  ToastMessage(message, success ? "success" : "error");
};

export default handelToggleFavAction;
