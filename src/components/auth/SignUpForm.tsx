"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import useSignUpForm from "@/hooks/useSignUpForm";
import { onSignUpSubmit } from "@/utils/onSignUpSubmit";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import SociealProviders from "./SociealProviders";
import CountrySelect from "../custom/CountrySelect";

import { Loader2 } from "lucide-react";

export function SignUpForm({ className, ...props }: React.ComponentProps<"form">) {
  const router = useRouter();
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    control,
  } = useSignUpForm();

  const onSubmit = onSignUpSubmit(router);

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            className="border-primary focus:ring-primary/30!"
            autoComplete="name"
            {...register("name")}
          />
          {errors.name && <p className="text-destructive">{errors.name.message}</p>}
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            className="border-primary focus:ring-primary/30!"
            autoComplete="email"
            {...register("email")}
          />
          <FieldDescription>
            We&apos;ll use this to contact you. We will not share your email with anyone else.
          </FieldDescription>
          {errors.email && <p className="text-destructive">{errors.email.message}</p>}
        </Field>

        <CountrySelect
          control={control}
          name="country"
          error={errors.country?.message}
          className="w-full"
        />

        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            className="border-primary focus:ring-primary/30!"
            autoComplete="new-password"
            {...register("password")}
          />
          {errors.password && <p className="text-destructive">{errors.password.message}</p>}
        </Field>

        <Field>
          <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
          <Input
            id="confirm-password"
            type="password"
            className="border-primary focus:ring-primary/30!"
            autoComplete="new-password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-destructive">{errors.confirmPassword.message}</p>
          )}
        </Field>

        <Field>
          <Button disabled={isSubmitting} className="rounded-md! flex items-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
                <span>Creating Account...</span>
              </>
            ) : (
              "Create Account"
            )}
          </Button>
        </Field>

        <FieldSeparator className="text-primary">Or continue with</FieldSeparator>
        <Field>
          <SociealProviders btnText="Sign up with Google" />
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link href="/sign-in">Sign in</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
