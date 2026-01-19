"use client";

import { useEffect, useState } from "react";
import MainLoader from "@/components/global/MainLoader";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Wait for the exit animation to complete (duration is ~1.2s total)
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {children}
      {showLoader && <MainLoader mode="transition" />}
    </>
  );
}
