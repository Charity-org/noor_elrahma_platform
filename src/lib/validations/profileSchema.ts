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

  country: z.string().min(1, "Please select a country"),
});

export type ProfileFormData = z.infer<typeof profileSchema>;

export default profileSchema;
