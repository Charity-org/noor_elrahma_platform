import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import contactSchema, { type ContactFormData } from "@/lib/validations/contactSchema";

const useContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: undefined,
      message: "",
    },
  });

  return form;
};

export default useContactForm;
