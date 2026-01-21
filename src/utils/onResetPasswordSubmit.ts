import { authClient } from "@/lib/auth-client";
import { ToastMessage } from "@/components/global/ToastMessage";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ResetPasswordFormData } from "@/lib/validations/resetPasswordSchema";

export const onResetPasswordSubmit =
  (router: AppRouterInstance, token: string) => async (formData: ResetPasswordFormData) => {
    const { password } = formData;

    const { error } = await authClient.resetPassword({
      newPassword: password,
      token,
    });

    if (error) {
      ToastMessage(error.message || "Failed to reset password", "error");
      return;
    }

    ToastMessage("Password reset successful! You can now sign in.", "success");
    router.push("/sign-in");
  };
