import Link from "next/link";
import { Check } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "@/components/layout/UserAvatar";
import { fakeUser } from "@/constants/fakeUser";
import { userMenuOptions } from "@/constants/layoutData";

const UserMenu = () => {
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
              <span className="font-bold text-primary">{fakeUser.name}</span>
              <span className="text-[12px] text-third">{fakeUser.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {userMenuOptions.map(({ name, link, icon: Icon }) =>
          name === "Language" ? (
            <DropdownMenuSub key={name}>
              <DropdownMenuSubTrigger className="flex gap-2 items-center cursor-pointer">
                <Icon className="w-4 h-4" />
                <span>{name}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem className="cursor-pointer justify-between">
                    <span>English</span>
                    <Check className="w-4 h-4" />
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer font-cairo">
                    <span>Arabic</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          ) : link ? (
            <Link href={link} key={name}>
              <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
                <Icon className="w-4 h-4" />
                <span>{name}</span>
              </DropdownMenuItem>
            </Link>
          ) : (
            <DropdownMenuItem key={name} className="flex gap-2 items-center cursor-pointer">
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
