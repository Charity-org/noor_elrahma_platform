import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fakeUser } from "@/constants/fakeUser";
import { cn } from "@/lib/utils";

const UserAvatar = ({ style }: { style?: string }) => {
  return (
    <Avatar className={cn("w-10 h-10 cursor-pointer", style)}>
      <AvatarImage src={fakeUser.image} />
      <AvatarFallback>{fakeUser.name.slice(0, 2)}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
