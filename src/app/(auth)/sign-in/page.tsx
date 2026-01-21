import { SignInForm } from "@/components/auth/SignInForm";
import { AuthPageLayout } from "@/components/auth/AuthPageLayout";

export default function SignInPage() {
  return (
    <AuthPageLayout backgroundImage="/assets/login-form-bg.png">
      <SignInForm />
    </AuthPageLayout>
  );
}
