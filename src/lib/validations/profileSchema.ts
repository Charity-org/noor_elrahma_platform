import { z } from "zod";

const profileSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .min(2, "Full name must be at least 2 characters long")
    .max(100, "Full name must not exceed 100 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Full name can only contain letters, spaces, hyphens, and apostrophes",
    )
    .trim(),

  nickname: z
    .string()
    .min(1, "Nickname is required")
    .min(2, "Nickname must be at least 2 characters long")
    .max(100, "Nickname must not exceed 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Nickname can only contain letters, spaces, hyphens, and apostrophes")
    .trim(),

  email: z
    .email("Please enter a valid email address")
    .min(1, "Email is required")
    .max(255, "Email must not exceed 255 characters")
    .toLowerCase()
    .trim(),

  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(128, "Password must not exceed 128 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});

export type ProfileFormData = z.infer<typeof profileSchema>;

export default profileSchema;
