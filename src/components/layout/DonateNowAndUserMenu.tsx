import { Languages } from "lucide-react";
import UserMenu from "./UserMenu";
import { Button } from "../ui/button";
import { itemVariants } from "@/lib/animations/home/HeroAnimationOptions";
import { motion } from "framer-motion";
import { getUser } from "@/app/actions";

const DonateNowAndUserMenu = async () => {
  const session = await getUser();

  return (
    <motion.div
      variants={itemVariants}
      className="hidden lg:flex items-center justify-center gap-6"
    >
      {session?.user && <Languages className="text-white cursor-pointer" />}
      <Button className="bg-third hover:bg-third/90 cursor-pointer rounded-[16px]! h-12 text-[20px] capitalize md:w-[13ch] font-teachers">
        donate now
      </Button>

      {session?.user && <UserMenu />}
    </motion.div>
  );
};

export default DonateNowAndUserMenu;
