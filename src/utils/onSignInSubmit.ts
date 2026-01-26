import { authClient } from "@/lib/auth-client";
import { ToastMessage } from "@/components/global/ToastMessage";
import { SignInFormData } from "@/lib/validations/signInSchema";

export const onSignInSubmit = async (formData: SignInFormData) => {
  const { email, password } = formData;

  await authClient.signIn.email({
    email,
    password,
    callbackURL: "/",
    fetchOptions: {
      onSuccess: () => {
        ToastMessage("Signed in successfully!", "success");
      },
      onError: (ctx) => {
        ToastMessage(ctx.error.message || "Invalid credentials", "error");
      },
    },
  });
};
