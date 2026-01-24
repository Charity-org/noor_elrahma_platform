import { ToastMessage } from "@/components/global/ToastMessage";
import api from "@/lib/api";
import { ProjectData } from "@/types/projecttype";

export const getAllProjectsDynamicPage = async (
  id?: string,
): Promise<ProjectData | ProjectData[] | null> => {
  try {
    let res;
    if (id) {
      res = await api.get(`/api/projects/${id}`);
    } else {
      res = await api.get(`/api/projects`);
    }

    const data = res.data;

    return data;
  } catch (error) {
    console.log(error);
    ToastMessage("Failed to fetch data for projects", "error");
    return id ? null : [];
  }
};
