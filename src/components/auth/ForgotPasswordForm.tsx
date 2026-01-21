"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { Loader2 } from "lucide-react";
import useForgotPassword from "@/hooks/useForgotPassword";
import { onForgotPasswordSubmit } from "@/utils/onForgotPassword";
import { ForgotPasswordFormData } from "@/lib/validations/forgetPasswordSchema";

export function ForgotPasswordForm({ className, ...props }: React.ComponentProps<"form">) {
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    reset,
  } = useForgotPassword();

  const onSubmit = async (data: ForgotPasswordFormData) => {
    await onForgotPasswordSubmit(data);
    reset();
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Forgot Password</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email address and we&apos;ll send you a link to reset your password.
          </p>
        </div>

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
          {errors.email && <p className="text-destructive">{errors.email.message}</p>}
        </Field>

        <Field>
          <Button disabled={isSubmitting} className="rounded-md! flex items-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
                <span>Reset Password...</span>
              </>
            ) : (
              "Reset Password"
            )}
          </Button>
        </Field>

        <FieldSeparator />

        <Link href="/sign-in" className={buttonVariants({ variant: "link" })}>
          Back to Sign In
        </Link>
      </FieldGroup>
    </form>
  );
}
