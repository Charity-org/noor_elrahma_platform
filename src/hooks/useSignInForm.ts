import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import signInSchema, { SignInFormData } from "@/lib/validations/signInSchema";

const useSignInForm = () => {
  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return form;
};

export default useSignInForm;
