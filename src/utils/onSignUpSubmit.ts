import { z } from "zod";
import signUpSchema from "@/lib/validations/signUpSchema";
import { ToastMessage } from "@/components/global/ToastMessage";

const onSignUpSubmit = async (formData: z.infer<typeof signUpSchema>) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(formData);
  ToastMessage("Account created successfully!", "success");
};

export default onSignUpSubmit;
