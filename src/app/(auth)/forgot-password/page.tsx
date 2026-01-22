import { AuthPageLayout } from "@/components/auth/AuthPageLayout";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <AuthPageLayout backgroundImage="/assets/login-form-bg.png">
      <ForgotPasswordForm />
    </AuthPageLayout>
  );
};

export default ForgotPasswordPage;
