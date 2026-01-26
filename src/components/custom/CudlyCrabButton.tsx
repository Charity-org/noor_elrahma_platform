import Link from "next/link";

const CudlyCrabButton = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="group relative w-fit cursor-pointer overflow-hidden rounded-full border border-gray-200 bg-white px-5 py-2 text-center font-medium text-primary shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-third transition-all duration-300 group-hover:scale-[100.8]" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          Read More
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-3 bg-third text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <span className="leading-none font-medium">Read More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 leading-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h14" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default CudlyCrabButton;
