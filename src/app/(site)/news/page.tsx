import NewsMainBoxes from "@/components/pages/news/NewsMainBoxes";
import { NewsType } from "@/types/hometypes";
import { getHomeDynamicData } from "@/utils/getAllDynamicPages";

const NewsPage = async () => {
  const resposne = await getHomeDynamicData({
    page: "NEWS",
  });

  const newsData = Object.values(resposne) as NewsType[];

  return <NewsMainBoxes newsData={newsData} />;
};

export default NewsPage;
