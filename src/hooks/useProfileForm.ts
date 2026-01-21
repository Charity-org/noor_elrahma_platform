import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import profileSchema, { ProfileFormData } from "@/lib/validations/profileSchema";

const useProfileForm = (initialData?: Partial<ProfileFormData>) => {
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: initialData?.fullName || "",
      country: initialData?.country || "",
    },
  });

  return form;
};

export default useProfileForm;
