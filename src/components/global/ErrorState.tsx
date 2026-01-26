"use client";

import { AlertTriangle, Home, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  hideHomeButton?: boolean;
}

const ErrorState: React.FC<ErrorStateProps> = ({
  title = "Something went wrong",
  message = "We encountered an unexpected error while loading this content. Please try again or contact support if the problem persists.",
  onRetry,
  hideHomeButton = false,
}) => {
  const router = useRouter();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-red-50 p-6 rounded-full mb-6"
      >
        <AlertTriangle className="w-16 h-16 text-red-500" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold font-teachers text-gray-900 mb-4"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-600 max-w-lg mb-8 font-inter leading-relaxed"
      >
        {message}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        {onRetry && (
          <Button
            onClick={onRetry}
            className="h-12 px-8 rounded-xl font-teachers font-bold text-lg bg-primary hover:bg-primary/90 gap-2 flex items-center"
          >
            <RotateCcw className="w-5 h-5" />
            Try Again
          </Button>
        )}

        {!hideHomeButton && (
          <Button
            onClick={() => router.push("/")}
            variant="outline"
            className="h-12 px-8 rounded-xl font-teachers font-bold text-lg border-primary text-primary hover:bg-primary/5 gap-2 flex items-center"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Button>
        )}
      </motion.div>
    </div>
  );
};

export default ErrorState;
