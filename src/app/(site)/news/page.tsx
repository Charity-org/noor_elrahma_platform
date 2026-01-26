import NewsMainBoxes from "@/components/pages/news/NewsMainBoxes";
import { NewsType } from "@/types/hometypes";
import { getHomeDynamicData } from "@/utils/getAllDynamicPages";
import { getLocale } from "next-intl/server";

const NewsPage = async () => {
  const locale = await getLocale();
  const resposne = await getHomeDynamicData({
    page: "NEWS",
    lang: locale,
  });

  const newsData = Object.values(resposne) as NewsType[];

  return <NewsMainBoxes newsData={newsData} />;
};

export default NewsPage;
