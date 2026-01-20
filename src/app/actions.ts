"use server";

import api from "@/lib/api";
import axios from "axios";
import { z } from "zod";
import profileSchema from "@/lib/validations/profileSchema";

console.log("Better Auth URL:", process.env.BETTER_AUTH_URL);

type ActionResponse<T = void> = {
  success: boolean;
  message: string;
  data?: T;
};

export const getUser = async () => {
  try {
    const response = await api.get("/api/auth/get-session");
    return response.data;
  } catch (error) {
    console.error("Error fetching user session:", error);
    return null;
  }
};

export async function updateProfileAction(
  formData: z.infer<typeof profileSchema>,
): Promise<ActionResponse> {
  try {
    const validatedData = profileSchema.parse(formData);
    const { fullName, country } = validatedData;

    await api.post("/api/auth/update-user", {
      name: fullName,
      country,
    });

    return {
      success: true,
      message: "Profile updated successfully!",
    };
  } catch (error) {
    console.error("Profile update error:", error);
    let message = "Failed to update profile";
    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message || message;
    }
    return {
      success: false,
      message,
    };
  }
}
