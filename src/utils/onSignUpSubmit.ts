import { authClient } from "@/lib/auth-client";
import { ToastMessage } from "@/components/global/ToastMessage";
import { z } from "zod";
import signUpSchema from "@/lib/validations/signUpSchema";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const onSignUpSubmit =
  (router: AppRouterInstance) => async (formData: z.infer<typeof signUpSchema>) => {
    const { email, password, name, country } = formData;

    const { error } = await authClient.signUp.email({
      email,
      password,
      name,
      //@ts-expect-error - country is an additional field
      country,
      callbackURL: "/",
    });

    if (error) {
      ToastMessage(error.message || "Failed to create account", "error");
      return;
    }

    ToastMessage("Account created successfully!", "success");
    router.push("/verify");
    router.refresh();
  };
