import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

const BETTER_AUTH_URL = process.env.BETTER_AUTH_URL || "";

async function proxyAuthRequest(req: NextRequest) {
  const url = new URL(req.url);
  const backendUrl = new URL(url.pathname + url.search, BETTER_AUTH_URL).toString();

  // Prepare headers for forwarding
  const forwardedHeaders: Record<string, string> = {};
  req.headers.forEach((value, key) => {
    // Skip some headers that might cause issues when proxied
    if (!["host", "connection", "content-length"].includes(key.toLowerCase())) {
      forwardedHeaders[key] = value;
    }
  });

  // Pass through client info
  forwardedHeaders["x-forwarded-host"] = url.host;
  forwardedHeaders["x-forwarded-proto"] = url.protocol.replace(":", "");

  try {
    const body =
      req.method !== "GET" && req.method !== "HEAD" ? await req.arrayBuffer() : undefined;

    const response = await axios({
      method: req.method,
      url: backendUrl,
      data: body,
      headers: forwardedHeaders,
      responseType: "arraybuffer", // Handle binary data correctly
      validateStatus: () => true, // Handle all status codes
    });

    const res = new NextResponse(response.data, {
      status: response.status,
      statusText: response.statusText,
    });

    // Copy response headers back
    Object.entries(response.headers).forEach(([key, value]) => {
      if (value) {
        if (key.toLowerCase() === "set-cookie") {
          // IMPORTANT: Better Auth on Vercel might send a cookie with Domain=.vercel.app
          // This will fail on localhost. We must strip the Domain or rewrite it.
          const cookies = Array.isArray(value) ? value : [value as string];
          const fixedCookies = cookies.map((cookie) => {
            // Remove Domain attribute to allow localhost to save it
            return cookie.replace(/Domain=[^;]+;?\s*/gi, "");
          });

          fixedCookies.forEach((cookie) => {
            res.headers.append("Set-Cookie", cookie);
          });
        } else {
          res.headers.set(key, Array.isArray(value) ? value.join(", ") : (value as string));
        }
      }
    });

    return res;
  } catch (error) {
    console.error("Auth proxy error:", error);
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return NextResponse.json(
        { error: axiosError.message || "Authentication service unavailable" },
        { status: axiosError.response?.status || 503 },
      );
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export const GET = proxyAuthRequest;
export const POST = proxyAuthRequest;
