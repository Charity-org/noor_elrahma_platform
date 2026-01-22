import { NextRequest, NextResponse } from "next/server";
import { verfiyToken } from "@/app/actions";

/**
 * Production-grade authentication middleware for Better Auth
 * Handles all authentication flows with proper token validation and security
 */
export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // === SESSION DETECTION ===
  // Extract Better Auth session token from cookies
  const sessionCookie = request.cookies.get("__Secure-better-auth.session_token");
  const hasSession = !!sessionCookie?.value?.trim();

  // === ROUTE DEFINITIONS ===
  const authPages = ["/sign-in", "/sign-up"];
  const protectedRoutes = ["/profile", "/donations", "/favorites", "/notifications"];
  const resetPasswordPath = "/reset-password";

  // === ROUTE CLASSIFICATION ===
  const isAuthPage = authPages.includes(pathname);
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));
  const isResetPasswordPage = pathname.startsWith(resetPasswordPath);

  // === RESET TOKEN VALIDATION ===
  const resetToken = request.nextUrl.searchParams.get("token");
  const hasResetToken = !!resetToken?.trim();

  // ========================================
  // AUTHENTICATION FLOW LOGIC
  // ========================================

  // RULE 1: Authenticated users cannot access sign-in/sign-up pages
  // Redirect to home to prevent confusion
  if (hasSession && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // RULE 2: Unauthenticated users cannot access protected routes
  // Redirect to sign-in with return URL for post-login redirect
  if (!hasSession && isProtectedRoute) {
    const signInUrl = new URL("/sign-in", request.url);
    signInUrl.searchParams.set("redirect", pathname + search);
    return NextResponse.redirect(signInUrl);
  }

  // RULE 3: Reset password page - ANYONE can access, but token must be valid
  if (isResetPasswordPage) {
    // CASE A: No token provided - redirect to forgot password
    if (!hasResetToken) {
      return NextResponse.redirect(new URL("/forgot-password", request.url));
    }

    // send the verfiy token to check if the user can continue the process
    const verifyResponse = await verfiyToken(resetToken!);

    if (!verifyResponse.success)
      return NextResponse.redirect(new URL("/forgot-password", request.url));
  }

  // RULE 4: Allow all other valid requests
  return NextResponse.next();
}

/**
 * Matcher configuration
 * Only runs middleware on routes that need authentication checks
 */
export const config = {
  matcher: [
    // Protected routes - require authentication
    "/profile/:path*",
    "/donations/:path*",
    "/favorites/:path*",
    "/notifications/:path*",

    // Auth pages - redirect if already authenticated
    "/sign-in",
    "/sign-up",

    // Reset password - token verification required (accessible to all)
    "/reset-password",
  ],
};
