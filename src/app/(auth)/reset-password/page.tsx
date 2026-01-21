import { AuthPageLayout } from "@/components/auth/AuthPageLayout";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <AuthPageLayout backgroundImage="/assets/login-form.png">
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <Loader2 className="animate-spin" />
            <span className="text-primary font-medium text-lg">Loading...</span>
          </div>
        }
      >
        <ResetPasswordForm />
      </Suspense>
    </AuthPageLayout>
  );
}
