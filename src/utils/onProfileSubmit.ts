import { authClient } from "@/lib/auth-client";
import { ToastMessage } from "@/components/global/ToastMessage";
import { ProfileFormData } from "@/lib/validations/profileSchema";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const onProfileSubmit = (router: AppRouterInstance) => async (formData: ProfileFormData) => {
  const { fullName, country } = formData;
  const { error } = await authClient.updateUser({
    name: fullName,
    //@ts-expect-error - country is an additional field
    country: country,
  });

  if (error) {
    ToastMessage(error.message || "Failed to update profile", "error");
    return;
  }

  ToastMessage("Profile updated successfully!", "success");
  router.refresh();
};
