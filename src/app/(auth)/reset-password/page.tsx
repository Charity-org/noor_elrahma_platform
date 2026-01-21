import { AuthPageLayout } from "@/components/auth/AuthPageLayout";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <AuthPageLayout backgroundImage="/assets/login-form.png">
      <ResetPasswordForm />
    </AuthPageLayout>
  );
}
