"use server";

import api from "@/lib/api";
import axios from "axios";
import { z } from "zod";
import profileSchema, { ProfileFormData } from "@/lib/validations/profileSchema";

import signUpSchema from "@/lib/validations/signUpSchema";
import { headers } from "next/headers";

type ActionResponse<T = void> = {
  success: boolean;
  message: string;
  data?: T;
};

export const getUser = async () => {
  try {
    const nextHeaders = await headers();
    const headersList: Record<string, string> = {};

    // Standardize headers: forward browser cookies while stripping target-specific values
    // to prevent connection resets (ECONNRESET) on remote environments like Vercel.
    const forbidden = ["host", "connection", "content-length"];
    nextHeaders.forEach((value, key) => {
      if (!forbidden.includes(key.toLowerCase())) {
        headersList[key] = value;
      }
    });

    const { data: session } = await api.get("/api/auth/get-session", { headers: headersList });
    return session || null;
  } catch (error) {
    // Session fetching is a background task; fail gracefully without crashing
    console.error(
      `[Auth] Session sync failed: ${error instanceof Error ? error.message : "Network error"}`,
    );
    return null;
  }
};

export async function signUpAction(
  formData: z.infer<typeof signUpSchema>,
): Promise<ActionResponse> {
  try {
    const { email, password, name, country } = signUpSchema.parse(formData);
    await api.post("/api/users/signup", { email, password, name, country });

    return { success: true, message: "Account created successfully!" };
  } catch (error) {
    return handleActionError(error, "Failed to create account");
  }
}

export async function resendVerificationAction(email: string): Promise<ActionResponse> {
  try {
    if (!email) throw new Error("Email is required");
    await api.post("/api/users/resend-verification", { email });

    return { success: true, message: "Verification email sent!" };
  } catch (error) {
    return handleActionError(error, "Failed to send verification");
  }
}

export async function updateProfileAction(formData: ProfileFormData): Promise<ActionResponse> {
  try {
    const session = await getUser();
    if (!session?.user?.id) {
      return { success: false, message: "Authentication required" };
    }

    const { fullName, country } = profileSchema.parse(formData);
    await api.patch(`/api/users/${session.user.id}`, { name: fullName, country });

    return { success: true, message: "Profile updated successfully!" };
  } catch (error) {
    return handleActionError(error, "Failed to update profile");
  }
}

/**
 * Standardized error handler for server actions
 */
function handleActionError(error: unknown, defaultMessage: string): ActionResponse {
  console.error(`[Action Error] ${defaultMessage}:`, error);

  let message = defaultMessage;
  if (axios.isAxiosError(error)) {
    message = error.response?.data?.message || error.message || message;
  } else if (error instanceof z.ZodError) {
    message = error.issues[0]?.message || "Validation failed";
  } else if (error instanceof Error) {
    message = error.message;
  }

  return { success: false, message };
}
