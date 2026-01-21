import { signUpAction } from "@/app/actions";
import { ToastMessage } from "@/components/global/ToastMessage";
import { SignUpFormData } from "@/lib/validations/signUpSchema";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const onSignUpSubmit = (router: AppRouterInstance) => async (formData: SignUpFormData) => {
  const response = await signUpAction(formData);

  if (!response.success) {
    ToastMessage(response.message, "error");
    return;
  }

  ToastMessage(response.message, "success");
  router.push(`/verify?mail=${formData.email}`);
};
