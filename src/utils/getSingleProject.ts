import api from "@/lib/api";

export const getSingleProject = async (projectId: string, { lang = "en" }: { lang?: string }) => {
  try {
    const res = await api.get(`/api/projects/${projectId}`, {
      headers: {
        lang,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw new Error("Failed to load project.");
  }
};
