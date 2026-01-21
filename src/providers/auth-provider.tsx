"use client";

import { createContext, ReactNode, use } from "react";
import { authClient } from "@/lib/auth-client";
import { AuthContextType } from "@/types/providers";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, isPending, error } = authClient.useSession();

  const value = {
    session,
    isPending,
    error,
    user: session?.user ?? null,
    isAuthenticated: !!session,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
};

export const useAuth = () => {
  const context = use(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
