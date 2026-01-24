import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";

type DeleteConfirmationDialogProps = {
  id: string;
  notificationTitle: string;
  deleteNotification: (id: string) => void;
};

function DeleteConfirmationDialog({
  id,
  notificationTitle,
  deleteNotification,
}: DeleteConfirmationDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-gray-400 hover:text-gray-600 transition-colors shrink-0 p-1 -mt-1">
          <Trash2 size={18} className="sm:w-5 sm:h-5" />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white border-2 border-gray-300 shadow-lg">
        <DialogHeader>
          <DialogTitle>Deleting a Notification</DialogTitle>
          <DialogDescription>
            Are you sure that you want to delete the{" "}
            <span className="font-semibold text-gray-900">{notificationTitle}</span>?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <button className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors">
              Cancel
            </button>
          </DialogClose>
          <DialogClose asChild>
            <button
              onClick={() => deleteNotification(id)}
              className="px-4 py-2 rounded-md bg-primary hover:bg-primary-hover text-white transition-colors"
            >
              Delete Notification
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteConfirmationDialog;
