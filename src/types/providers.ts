import { authClient } from "@/lib/auth-client";

type Session = typeof authClient.$Infer.Session;

interface AuthContextType {
  session: Session | null;
  isPending: boolean;
  error: unknown;
  user: Session["user"] | null;
  isAuthenticated: boolean;
}

export type { AuthContextType };
