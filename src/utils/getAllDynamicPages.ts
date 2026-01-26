import { ToastMessage } from "@/components/global/ToastMessage";
import api from "@/lib/api";

export const getHomeDynamicData = async ({
  page,
  type = "",
  lang = "en",
}: {
  page?: string;
  type?: string;
  lang?: string;
}) => {
  try {
    const res = await api.get(`/api/pages?type=${type}&page=${page}`, {
      headers: {
        lang,
      },
    });
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
    ToastMessage("Failed to fetch data for home page", "error");
  }
};
