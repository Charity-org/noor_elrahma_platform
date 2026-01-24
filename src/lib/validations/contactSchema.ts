import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(3, "Name must be at least 3 characters long"),
  lastName: z.string().min(3, "Name must be at least 3 characters long"),
  email: z
    .email("Invalid email address")
    .min(5, "Email must be at least 5 characters long")
    .toLowerCase()
    .trim(),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
      "Please enter a valid phone number",
    ),
  subject: z.enum(
    [
      "general-inquiry",
      "donation-support",
      "project-information",
      "technical-issue",
      "feedback-suggestions",
      "other",
    ],
    {
      message: "Please select a subject",
    },
  ),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export default contactSchema;
