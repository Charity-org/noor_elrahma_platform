import { ToastMessage } from "@/components/global/ToastMessage";
import { ProfileFormData } from "@/lib/validations/profileSchema";

const onProfileSubmit = async (formData: ProfileFormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(formData);
  ToastMessage("You've successfully updated your profile info.", "success");
};

export default onProfileSubmit;
