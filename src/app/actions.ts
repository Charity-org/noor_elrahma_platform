"use server";

import api from "@/lib/api";
import axios from "axios";
import { z } from "zod";
import profileSchema, { ProfileFormData } from "@/lib/validations/profileSchema";

import signUpSchema, { SignUpFormData } from "@/lib/validations/signUpSchema";
import { cookies, headers } from "next/headers";
import { getLocale } from "next-intl/server";
import { revalidatePath } from "next/cache";
import contactSchema, { ContactFormData } from "@/lib/validations/contactSchema";

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

export async function signUpAction(formData: SignUpFormData): Promise<ActionResponse> {
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

export async function verfiyToken(token: string): Promise<ActionResponse> {
  try {
    await api.get(`api/users/verify-token/${token}`);
    return { success: true, message: "token verfiyed successfully!" };
  } catch (error) {
    return handleActionError(error, "Failed to verfiy token");
  }
}

export async function updateProfileAction(formData: ProfileFormData): Promise<ActionResponse> {
  try {
    const { fullName, country } = profileSchema.parse(formData);
    await api.patch(
      `/api/users/`,
      { name: fullName, country },
      {
        headers: {
          cookie: (await cookies()).toString(),
        },
      },
    );

    return { success: true, message: "Profile updated successfully!" };
  } catch (error) {
    return handleActionError(error, "Failed to update profile");
  }
}

export async function toggleFavAction(projectId: number): Promise<ActionResponse> {
  const lang = await getLocale();
  try {
    const res = await api.post(
      `/api/favorites`,
      { projectId },
      {
        headers: {
          cookie: (await cookies()).toString(),
          lang,
        },
      },
    );

    revalidatePath("/favourites");
    revalidatePath("/");

    return { success: true, message: res.data.message || "Project added to favourites!" };
  } catch (error) {
    return handleActionError(error, "Failed to update favourites");
  }
}

export async function getDonationsAction(): Promise<ActionResponse> {
  try {
    const res = await api.get(`/api/donations/me`, {
      headers: {
        cookie: (await cookies()).toString(),
      },
    });

    return { success: true, message: "Donations fetched successfully!", data: res.data };
  } catch (error) {
    return handleActionError(error, "Failed to fetch donations");
  }
}

export async function contactUsAction(formData: ContactFormData): Promise<ActionResponse> {
  try {
    const { email, firstName, lastName, message, phone, subject } = contactSchema.parse(formData);

    await api.post("/api/contact-us", {
      email,
      firstName,
      lastName,
      message,
      phone,
      subject,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    return handleActionError(error, "Failed to send message");
  }
}

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
