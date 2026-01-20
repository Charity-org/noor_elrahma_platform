"use client";

import { useRouter } from "next/navigation";
import useSignInForm from "@/hooks/useSignInForm";
import { onSignInSubmit } from "@/utils/onSignInSubmit";
import Link from "next/link";

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

import { Loader2 } from "lucide-react";

export function SignInForm({ className, ...props }: React.ComponentProps<"form">) {
  const router = useRouter();
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
  } = useSignInForm();

  const onSubmit = onSignInSubmit(router);

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Sign in to your account to continue
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
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            className="border-primary focus:ring-primary/30!"
            autoComplete="current-password"
            {...register("password")}
          />
          {errors.password && <p className="text-destructive">{errors.password.message}</p>}
          <FieldDescription>
            <Link href="/forgot-password" className="text-primary hover:underline">
              Forgot your password?
            </Link>
          </FieldDescription>
        </Field>

        <Field>
          <Button disabled={isSubmitting} className="rounded-md! flex items-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" />
                <span>Signing In...</span>
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </Field>

        <FieldSeparator className="text-primary">Or continue with</FieldSeparator>
        <Field>
          <SociealProviders btnText="Sign in with Google" />
          <FieldDescription className="px-6 text-center">
            Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
