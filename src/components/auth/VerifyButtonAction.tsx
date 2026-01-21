"use client";

import { useState, useEffect } from "react";
import { resendVerificationAction } from "@/app/actions";
import { ToastMessage } from "../global/ToastMessage";

const VerifyMailOptions = ({ email }: { email: string }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleVerifyMail = async () => {
    if (timeLeft > 0) return;

    const response = await resendVerificationAction(email);
    ToastMessage(response.message, response.success ? "success" : "error");

    if (response.success) {
      setTimeLeft(120);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <button
      onClick={handleVerifyMail}
      disabled={timeLeft > 0}
      className={`underline underline-offset-2 transition-colors ${
        timeLeft > 0
          ? "text-muted-foreground cursor-not-allowed no-underline"
          : "text-primary hover:text-primary/80 cursor-pointer"
      }`}
    >
      {timeLeft > 0 ? `Resend in ${formatTime(timeLeft)}` : "Resend"}
    </button>
  );
};

export default VerifyMailOptions;
