import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasSession = (request.headers.get("cookie") || "").includes("better-auth.session_token");

  // Authentication Gates
  const isAuthPage = pathname === "/sign-in" || pathname === "/sign-up";
  const isProtectedRoute = pathname.startsWith("/profile");
  const isResetFlow =
    pathname.startsWith("/reset-password") && !request.nextUrl.searchParams.has("token");

  if (hasSession && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!hasSession && (isProtectedRoute || isResetFlow)) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

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
    "/reset-password/:token*",
  ],
};
