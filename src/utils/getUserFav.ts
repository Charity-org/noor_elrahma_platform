import api from "@/lib/api";
import { cookies } from "next/headers";
import { ProjectCardData } from "@/types/hometypes";

const getUserFav = async (): Promise<{ data: ProjectCardData[] }> => {
  try {
    return await api.get(`/api/favorites`, {
      headers: {
        cookie: (await cookies()).toString(),
      },
    });
  } catch (error) {
    console.error("Error fetching favorites:", error);
    throw new Error("Failed to load your favorite projects.");
  }
};

export { getUserFav };
