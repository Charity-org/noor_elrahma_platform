import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

const UserAvatar = ({ style }: { style?: string }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <Avatar className={cn("w-10 h-10 cursor-pointer", style)}>
      <AvatarImage src={user?.image || ""} />
      <AvatarFallback>{user?.name?.slice(0, 2) || "U"}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
