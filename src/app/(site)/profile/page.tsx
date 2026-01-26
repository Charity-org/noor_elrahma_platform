"use client";

import Image from "next/image";

import { ProfileForm } from "@/components/auth/ProfileForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useAuth } from "@/providers/auth-provider";
import UserAvatar from "@/components/layout/UserAvatar";

const Profile = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div className="min-h-[calc(100vh-33.4rem)] container py-6 sm:py-10 md:py-14 px-4 sm:px-6">
      <Card className="pt-0 rounded-2xl sm:rounded-3xl overflow-hidden w-full sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[60%] mx-auto shadow-lg">
        <CardHeader className="bg-primary h-20 sm:h-24 md:h-28 flex items-center justify-center px-4">
          <h1 className="text-white font-bold font-teachers text-[clamp(1.2rem,4vw,1.8rem)]">
            Profile
          </h1>
        </CardHeader>

        <CardContent className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-30 py-6 sm:py-8 md:py-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            {/* User profile image */}
            {user?.image ? (
              <Image
                src={user.image}
                alt="user-profile"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-25 md:h-25 rounded-full object-cover shrink-0 ring-4 ring-gray-100"
                width={100}
                height={100}
              />
            ) : (
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-25 md:h-25 rounded-full object-cover shrink-0 ring-4 ring-gray-100">
                <UserAvatar style="w-full h-full" />
              </div>
            )}

            <div className="space-y-1 sm:space-y-1.5 text-center sm:text-left">
              <p className="font-bold font-teachers text-[clamp(1.2rem,4vw,1.8rem)]">
                {user?.name}
              </p>
              <p className="text-[clamp(0.8rem,2vw,1rem)] text-muted-foreground break-all sm:break-normal">
                {user?.email}
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10">
            {user ? (
              <ProfileForm initialData={user} />
            ) : (
              <div className="flex justify-center py-10">
                <p className="text-muted-foreground animate-pulse">Loading profile data...</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
