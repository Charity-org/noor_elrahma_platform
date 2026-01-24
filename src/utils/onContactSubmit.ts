import { ContactFormData } from "@/lib/validations/contactSchema";

export const onContactSubmit = async (data: ContactFormData) => {
  console.log(data);
};
