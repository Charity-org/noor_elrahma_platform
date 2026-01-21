import { ToastMessage } from "@/components/global/ToastMessage";
import { ProfileFormData } from "@/lib/validations/profileSchema";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { updateProfileAction } from "@/app/actions";

import { authClient } from "@/lib/auth-client";

export const onProfileSubmit = (router: AppRouterInstance) => async (formData: ProfileFormData) => {
  const response = await updateProfileAction(formData);

  ToastMessage(response.message, response.success ? "success" : "error");

  if (response.success) {
    await authClient.getSession();
    router.refresh();
  }
};
