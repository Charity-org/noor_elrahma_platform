"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    // Set cookie for next-intl
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    // Refresh to apply changes
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-center cursor-pointer p-2 hover:bg-white/10 rounded-full transition-colors">
          <Languages className="text-white h-5 w-5" />
          <span className="sr-only">Toggle language</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-30">
        <DropdownMenuItem
          className={locale === "en" ? "bg-accent" : ""}
          onClick={() => handleLanguageChange("en")}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          className={locale === "ar" ? "bg-accent" : ""}
          onClick={() => handleLanguageChange("ar")}
        >
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
