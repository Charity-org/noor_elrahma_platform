"use client";

import { Share2, Check } from "lucide-react";
import { useState, useTransition } from "react";
import { ToastMessage } from "@/components/global/ToastMessage";

const ProjectShareBtn = ({ projectId }: { projectId: number }) => {
  const [copied, setCopied] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleCopy = () => {
    startTransition(async () => {
      try {
        const url = `${window.location.origin}/projects/${projectId}`;
        await navigator.clipboard.writeText(url);
        setCopied(true);
        ToastMessage("Project link copied to clipboard!", "success");
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        ToastMessage((error as string) || "Failed to copy link", "error");
      }
    });
  };

  return (
    <button
      className="tooltip group/share right-3"
      onClick={handleCopy}
      disabled={isPending}
      type="button"
      aria-label="Copy project link"
    >
      {copied ? (
        <Check className="text-green-600 transition-colors" size={20} />
      ) : (
        <Share2 className="text-primary group-hover/share:text-white transition-colors" size={20} />
      )}
    </button>
  );
};

export default ProjectShareBtn;
