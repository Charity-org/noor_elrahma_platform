import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { fakeUser } from "@/constants/fakeUser";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="min-h-[calc(100vh-33.4rem)] container py-14">
      <Card className="pt-0 rounded-3xl overflow-hidden">
        <CardHeader className="bg-primary h-25"></CardHeader>

        <CardContent className="lg:px-30">
          <div className="flex items-center gap-6">
            <Image
              src="/assets/who-2.jpg"
              alt="user-profile"
              className="w-25 h-25 rounded-full"
              width={100}
              height={100}
            />
            <div className="space-y-1.5">
              <p className="font-bold font-teachers text-[clamp(1.2rem,4vw,1.8rem)]">
                {fakeUser.name}
              </p>
              <p className="text-[clamp(0.8rem,2vw,1rem)]">{fakeUser.email}</p>
            </div>
          </div>

          <div className="mt-6"></div>
        </CardContent>
        <CardFooter>
          <Button className="mx-auto rounded-[24px]">Edit Profile</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Profile;
