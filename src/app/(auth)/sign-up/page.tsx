import { SignUpForm } from "@/components/auth/SignUpForm";
import { AuthPageLayout } from "@/components/auth/AuthPageLayout";

export default function SignupPage() {
  return (
    <AuthPageLayout backgroundImage="/assets/sign-up-form.png">
      <SignUpForm />
    </AuthPageLayout>
  );
}
