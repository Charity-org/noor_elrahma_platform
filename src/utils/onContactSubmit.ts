import { contactUsAction } from "@/app/actions";
import { ToastMessage } from "@/components/global/ToastMessage";
import { ContactFormData } from "@/lib/validations/contactSchema";

export const onContactSubmit = async (data: ContactFormData) => {
  const { message, success } = await contactUsAction(data);
  ToastMessage(message, success ? "success" : "error");
};
