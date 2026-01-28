import CudlyCrabButton from "@/components/custom/CudlyCrabButton";
import { NewsType } from "@/types/hometypes";
import Image from "next/image";

const NewBox = ({ author, content, description, image, title, new_link }: NewsType) => {
  return (
    <>
      <Image
        src={
          image && image.startsWith("http")
            ? image
            : image
              ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${image}`
              : ""
        }
        alt={title}
        width={300}
        height={300}
        className="xl:w-75 w-full lg:h-140 rounded-lg! xl:basis-1/2 basis-full group-hover/newsbox:scale-105 transition-all duration-300"
        loading="eager"
      />
      <div className="flex flex-col gap-12 xl:basis-1/3 basis-full">
        <div className="space-y-4">
          <h2 className="main_title">{title}</h2>
          <p className="text-third font-inter text-[18px]">{author}</p>
        </div>

        <div className="space-y-2">
          <p className="text-black/60">{description}</p>
          <p className="text-gray-600">{content}</p>
        </div>

        {new_link && <CudlyCrabButton href={new_link} />}
      </div>
    </>
  );
};

export default NewBox;
