import api from "@/lib/api";
import { ProjectCardData } from "@/types/hometypes";

export const getAllProjects = async ({
  type = "",
  country = "",
  lang = "en",
}): Promise<{ data: ProjectCardData[] } | undefined> => {
  try {
    const res = await api.get(`/api/projects?type=${type}&country=${country}`, {
      headers: {
        lang,
      },
    });
    return res;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to load projects. Please try again later.");
  }
};
