"use client";

import NotificationsCard from "@/components/pages/notifications/NotificationsCard";
import { notificationsData } from "@/constants/layoutData";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function NotificationsPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto py-10 min-h-[calc(100vh-33.4rem)]">
      {/* Header Section */}
      <div className="flex items-start gap-4">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mt-1 p-2 rounded-full transition-colors bg-primary text-white hover:bg-primary-hover"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Title and Subtitle */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            Your Notifications
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            All important updates about your donations and projects.
          </p>
        </div>
      </div>

      {notificationsData.map((notification) => (
        <NotificationsCard key={notification.id} {...notification} />
      ))}
    </div>
  );
}

export default NotificationsPage;
