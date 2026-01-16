"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Progress } from "@/components/ui/progress";

import { ProgressBarProps } from "@/types/layoutTypes";

export function ProgressBar({ className, value }: ProgressBarProps) {
  const [progress, setProgress] = React.useState(value || 13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return <Progress value={progress} className={cn("w-[60%]", className)} />;
}
