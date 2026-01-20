import { authClient } from "@/lib/auth-client";
import { ToastMessage } from "@/components/global/ToastMessage";
import { z } from "zod";
import signInSchema from "@/lib/validations/signInSchema";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const onSignInSubmit =
  (router: AppRouterInstance) => async (formData: z.infer<typeof signInSchema>) => {
    const { email, password } = formData;

    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      ToastMessage(error.message || "Invalid credentials", "error");
      return;
    }

    ToastMessage("Signed in successfully!", "success");
    router.push("/");
    router.refresh();
  };
