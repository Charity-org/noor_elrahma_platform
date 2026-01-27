import api from "@/lib/api";
import { cookies } from "next/headers";
import { getLocale } from "next-intl/server";

const getUserFav = async () => {
  const lang = await getLocale();
  try {
    const res = await api.get(`/api/favorites`, {
      headers: {
        cookie: (await cookies()).toString(),
        lang,
      },
    });
    console.log("getUserFav response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching favorites:", error);
    throw new Error("Failed to load your favorite projects.");
  }
};

export { getUserFav };
