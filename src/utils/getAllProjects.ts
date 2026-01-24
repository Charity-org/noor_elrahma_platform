import { ToastMessage } from "@/components/global/ToastMessage";
import api from "@/lib/api";

export const getAllProjects = async () => {
  try {
    const res = await api.get(`/api/projects`);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
    ToastMessage("Failed to fetch data for projects", "error");
  }
};
