"use client";

import ErrorState from "@/components/global/ErrorState";
import SubPagesHero from "@/components/custom/SubPagesHero";

// Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <SubPagesHero bgImage="/assets/hero-1.jpg">
        <h1 className="text-white font-bold text-center w-full capitalize md:w-[80%] font-teachers text-[clamp(2.5rem,4vw,6rem)] leading-[1.1] drop-shadow-2xl">
          Oops! Error
        </h1>
      </SubPagesHero>

      <main className="container my-20">
        <ErrorState
          title="Something went wrong!"
          message={
            error.message ||
            "We couldn't load the requested page. Please check your internet connection and try again."
          }
          onRetry={reset}
        />
      </main>
    </>
  );
}
