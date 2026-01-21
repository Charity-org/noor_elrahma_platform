import { authClient } from "@/lib/auth-client";
import { ToastMessage } from "@/components/global/ToastMessage";
import { ForgotPasswordFormData } from "@/lib/validations/forgetPasswordSchema";

export const onForgotPasswordSubmit = async (formData: ForgotPasswordFormData) => {
  const { email } = formData;

  const { error } = await authClient.requestPasswordReset({
    email,
  });

  if (error) {
    ToastMessage(error.message || "Invalid credentials", "error");
    return;
  }
  ToastMessage("Password reset link sent to your email!", "success");
};
