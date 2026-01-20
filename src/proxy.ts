import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { pathname } = request.nextUrl;

  // Define public routes (login/signup pages)
  const isPublicRoute = pathname === "/sign-in" || pathname === "/sign-up";

  // Define protected routes
  const isProtectedRoute = ["/profile", "/donations", "/favorites", "/notifications"].some(
    (route) => pathname.startsWith(route),
  );

  // If user is logged in and tries to access public routes, redirect to dashboard
  if (session && isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If user is not logged in and tries to access protected routes, redirect to sign-in
  if (!session && isProtectedRoute) {
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
  ],
};
