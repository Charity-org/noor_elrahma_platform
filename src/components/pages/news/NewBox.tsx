import CudlyCrabButton from "@/components/custom/CudlyCrabButton";
import { NewsType } from "@/types/layoutTypes";
import Image from "next/image";

const NewBox = ({ author, date, description, image, title }: NewsType) => {
  return (
    <>
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="xl:w-75 w-full lg:h-140 object-contain rounded-lg xl:basis-1/2 basis-full group-hover/newsbox:scale-105 transition-all duration-300"
      />
      <div className="flex flex-col gap-12 xl:basis-1/3 basis-full">
        <div className="space-y-4">
          <h2 className="main_title">{title}</h2>
          <p className="text-third font-inter text-[18px]">{author}</p>
        </div>

        <div className="space-y-2">
          <p className="text-black/60">{description}</p>
          <p className="text-gray-600">{date}</p>
        </div>

        <CudlyCrabButton />
      </div>
    </>
  );
};

export default NewBox;
