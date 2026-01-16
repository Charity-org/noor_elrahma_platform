import { cn } from "@/lib/utils";
const SubPagesHero = ({ children, bgImage }: { children: React.ReactNode; bgImage: string }) => {
  return (
    <section
      className={cn("relative w-full h-100 bg-cover bg-center")}
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="overlay"></div>
      <div className="container relative z-20 h-full flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </section>
  );
};

export default SubPagesHero;
