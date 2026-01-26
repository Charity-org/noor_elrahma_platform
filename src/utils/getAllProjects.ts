import api from "@/lib/api";
import { ProjectCardData } from "@/types/hometypes";

export const getAllProjects = async ({
  type = "",
  country = "",
}): Promise<{ data: ProjectCardData[] } | undefined> => {
  try {
    if (type && country) {
      const res = await api.get(`/api/projects?type=${type}&country=${country}`);
      return res;
    }
    if (country) {
      const res = await api.get(`/api/projects?country=${country}`);
      return res;
    }
    if (type) {
      const res = await api.get(`/api/projects?type=${type}`);
      return res;
    }

    const res = await api.get(`/api/projects`);
    return res;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to load projects. Please try again later.");
  }
};
