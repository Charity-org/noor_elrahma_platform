import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import forgotPasswordSchema, {
  ForgotPasswordFormData,
} from "@/lib/validations/forgetPasswordSchema";

const useForgotPassword = () => {
  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  return form;
};

export default useForgotPassword;
