"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { Loader2 } from "lucide-react";
import useProfileForm from "@/hooks/useProfileForm";
import { onProfileSubmit } from "@/utils/onProfileSubmit";
import { useRouter } from "next/navigation";
import CountrySelect from "../custom/CountrySelect";

interface ProfileFormProps extends React.ComponentProps<"form"> {
  initialData?: {
    name?: string;
    country?: string;
  };
}

export function ProfileForm({ className, initialData, ...props }: ProfileFormProps) {
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    control,
  } = useProfileForm({
    fullName: initialData?.name,
    country: initialData?.country,
  });

  const router = useRouter();
  const onSubmit = onProfileSubmit(router);

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <FieldGroup className="gap-0">
        <div className="flex mt-10 gap-10">
          <Field className="basis-1/2">
            <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
            <Input
              id="fullName"
              type="text"
              placeholder="John Doe"
              className="border-primary focus:ring-primary/30!"
              autoComplete="email"
              {...register("fullName")}
            />
            {errors.fullName && <p className="text-destructive">{errors.fullName.message}</p>}
          </Field>

          <CountrySelect
            control={control}
            name="country"
            error={errors.country?.message}
            className="basis-1/2"
          />
        </div>

        <Field className="mt-10">
          <Button
            disabled={isSubmitting}
            className="rounded-3xl! w-fit! px-10 h-15 hover:bg-primary-hover cursor-pointer font-bold font-teachers text-[16px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
                <span>Editing...</span>
              </>
            ) : (
              "Edit Profile"
            )}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
