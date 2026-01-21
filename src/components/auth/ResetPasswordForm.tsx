"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { Loader2 } from "lucide-react";
import useResetPasswordForm from "@/hooks/useResetPasswordForm";
import { onResetPasswordSubmit } from "@/utils/onResetPasswordSubmit";

export function ResetPasswordForm({ className, ...props }: React.ComponentProps<"form">) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
  } = useResetPasswordForm();

  const onSubmit = onResetPasswordSubmit(router, token);

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your new password below.
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="password">New Password</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            className="border-primary focus:ring-primary/30!"
            autoComplete="new-password"
            {...register("password")}
          />
          {errors.password && <p className="text-destructive">{errors.password.message}</p>}
        </Field>

        <Field>
          <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
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
                <span>Resetting...</span>
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
