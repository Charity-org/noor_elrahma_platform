import api from "@/lib/api";
import { ProjectCardData } from "@/types/hometypes";

export const getAllProjects = async ({
  type = "",
  country = "",
  lang = "en",
}): Promise<
  | {
      data: ProjectCardData[];
      meta?: { total: number; page: number; limit: number; totalPages: number };
    }
  | undefined
> => {
  try {
    const res = await api.get(`/api/projects?type=${type}&country=${country}`, {
      headers: {
        lang,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to load projects. Please try again later.");
  }
};
