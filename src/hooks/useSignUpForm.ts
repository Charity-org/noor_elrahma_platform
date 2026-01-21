import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import signUpSchema, { SignUpFormData } from "@/lib/validations/signUpSchema";

const useSignUpForm = () => {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
    },
  });

  return form;
};

export default useSignUpForm;
