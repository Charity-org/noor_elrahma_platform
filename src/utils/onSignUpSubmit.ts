import { signUpAction } from "@/app/actions";
import { ToastMessage } from "@/components/global/ToastMessage";
import { SignUpFormData } from "@/lib/validations/signUpSchema";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const onSignUpSubmit = (router: AppRouterInstance) => async (formData: SignUpFormData) => {
  const { message, success } = await signUpAction(formData);

  ToastMessage(message, success ? "success" : "error");

  if (success) router.push(`/verify?mail=${formData.email}`);
};
