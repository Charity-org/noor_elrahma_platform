import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "@/components/layout/UserAvatar";
import { useAuth } from "@/providers/auth-provider";
import handleSignOut from "@/utils/handleSignOut";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { CircleUser, HandHeart, CalendarHeart, LogOut } from "lucide-react";

const UserMenu = () => {
  const router = useRouter();
  const { user } = useAuth();
  const t = useTranslations("user_menu");

  const translatedMenuOptions = [
    { name: t("profile"), link: "/profile", icon: CircleUser },
    { name: t("my_donations"), link: "/donations", icon: HandHeart },
    { name: t("favourites"), link: "/favourites", icon: CalendarHeart },
    { name: t("sign_out"), icon: LogOut },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <UserAvatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className="flex items-center gap-2">
            <UserAvatar style="w-8 h-8" />
            <div className="flex flex-col font-inter">
              <span className="font-bold text-primary">{user?.name}</span>
              <span className="text-[12px] text-third">{user?.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {translatedMenuOptions.map(({ name, link, icon: Icon }) =>
          link ? (
            <Link href={link} key={name}>
              <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
                <Icon className="w-4 h-4" />
                <span>{name}</span>
              </DropdownMenuItem>
            </Link>
          ) : (
            <DropdownMenuItem
              key={name}
              className="flex gap-2 items-center cursor-pointer"
              onClick={
                name === t("sign_out")
                  ? async () => {
                      await handleSignOut();
                      router.push("/");
                    }
                  : undefined
              }
            >
              <Icon className="w-4 h-4" />
              <span>{name}</span>
            </DropdownMenuItem>
          ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
