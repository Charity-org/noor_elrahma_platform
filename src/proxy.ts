import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hasSession = (request.headers.get("cookie") || "").includes("better-auth.session_token");

  // Define route categories
  const authPages = ["/sign-in", "/sign-up"];
  const protectedRoutes = ["/profile", "/donations", "/favorites", "/notifications"];

  const isAuthPage = authPages.some((page) => pathname === page);
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));
  const isResetPasswordPage = pathname.startsWith("/reset-password");
  const hasResetToken = request.nextUrl.searchParams.has("token");

  // Redirect authenticated users away from auth pages
  if (hasSession && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect unauthenticated users from protected routes to sign-in
  if (!hasSession && isProtectedRoute) {
    const signInUrl = new URL("/sign-in", request.url);
    // Preserve the original destination for redirect after login
    signInUrl.searchParams.set("redirect", pathname + search);
    return NextResponse.redirect(signInUrl);
  }

  // Redirect unauthenticated users from reset password page without token
  if (!hasSession && isResetPasswordPage && !hasResetToken) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/donations/:path*",
    "/favorites/:path*",
    "/notifications/:path*",
    "/sign-in",
    "/sign-up",
    "/forgot-password",
    "/reset-password/:path*",
  ],
};
