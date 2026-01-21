"use client";

import { AuthPageLayout } from "@/components/auth/AuthPageLayout";
import VerifyMailOptions from "@/components/auth/VerifyButtonAction";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const VerifyPage = () => {
  const searchParams = useSearchParams();
  const mail = searchParams.get("mail");

  return (
    <AuthPageLayout backgroundImage="/assets/verify-page.png" style={"max-w-3xl"}>
      <div className="space-y-6 text-center">
        <h1 className="text-[clamp(1.5rem,4vw,2rem)] font-bold leading-tight">
          Mail sent to
          <br />
          <span className="text-foreground">{mail || "your email"}</span>
        </h1>

        <div className="space-y-3">
          <p className="text-[clamp(0.875rem,2vw,1rem)] text-muted-foreground">
            <span>Not your mail? </span>
            <Link
              href="/sign-up"
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              Change it
            </Link>
          </p>

          <p className="text-[clamp(0.875rem,2vw,1rem)] text-muted-foreground">
            <span>Didn&apos;t receive an email? </span>
            <VerifyMailOptions email={mail || ""} />
          </p>
        </div>
      </div>
    </AuthPageLayout>
  );
};

export default VerifyPage;
