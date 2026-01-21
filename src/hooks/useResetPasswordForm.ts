import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import resetPasswordSchema, { ResetPasswordFormData } from "@/lib/validations/resetPasswordSchema";

const useResetPasswordForm = () => {
  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  return form;
};

export default useResetPasswordForm;
