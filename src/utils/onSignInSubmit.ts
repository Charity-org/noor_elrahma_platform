import { SignInFormData } from "@/lib/validations/signInSchema";
import { ToastMessage } from "@/components/global/ToastMessage";

const onSignInSubmit = async (formData: SignInFormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(formData);
  ToastMessage("Welcome back! You've successfully signed in.", "success");
};

export default onSignInSubmit;
