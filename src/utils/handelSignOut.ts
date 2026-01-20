import { authClient } from "@/lib/auth-client";
import { ToastMessage } from "@/components/global/ToastMessage";

const handelSignOut = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        ToastMessage("Signed out successfully!", "success");
      },
      onError: (ctx) => {
        ToastMessage(ctx.error.message || "Failed to sign out", "error");
      },
    },
  });
};

export default handelSignOut;
