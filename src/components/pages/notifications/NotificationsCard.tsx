import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

import { NotificationsData } from "@/types/layoutTypes";

function NotificationsCard({
  id,
  image,
  notificationTitle,
  notificationMessage,
}: NotificationsData) {
  const deleteNotification = (id: string) => {
    console.log(id);
  };

  return (
    <div className="mt-6 space-y-3">
      <Card key={id} className="bg-white shadow-sm border border-gray-200 py-4 px-4">
        <div className="flex items-start gap-4 p-2">
          {image && (
            <div className="shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={image}
                  alt={notificationTitle}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          <div className="flex-1 min-w-0 flex items-start justify-between gap-3">
            <CardHeader className="p-0 space-y-1 flex-1 min-w-0">
              <CardTitle className="text-sm sm:text-base font-semibold text-gray-600 leading-tight">
                Donation Received - <span className="text-primary">{notificationTitle}</span>
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-gray-600">
                {notificationMessage}
              </CardDescription>
            </CardHeader>

            <DeleteConfirmationDialog
              notificationTitle={notificationTitle}
              id={id}
              deleteNotification={deleteNotification}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default NotificationsCard;
