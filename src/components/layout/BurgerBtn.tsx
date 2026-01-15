import { BurgerBtnProps } from "@/types/layoutTypes";

const BurgerBtn = ({ setIsMenuOpen, isMenuOpen }: BurgerBtnProps) => {
  return (
    <label className="flex flex-col gap-2 w-8 md:hidden">
      <input
        className="peer hidden"
        type="checkbox"
        onChange={(e) => setIsMenuOpen(e.target.checked)}
        checked={isMenuOpen}
      />
      <div className="rounded-2xl h-0.75 w-1/2 bg-third duration-500 peer-checked:rotate-225 origin-right peer-checked:-translate-x-3 peer-checked:-translate-y-px"></div>
      <div className="rounded-2xl h-0.75 w-full bg-third duration-500 peer-checked:-rotate-45"></div>
      <div className="rounded-2xl h-0.75 w-1/2 bg-third duration-500 place-self-end peer-checked:rotate-225 origin-left peer-checked:translate-x-3 peer-checked:translate-y-px"></div>
    </label>
  );
};

export default BurgerBtn;
