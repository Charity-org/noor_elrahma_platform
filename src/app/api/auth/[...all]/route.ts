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

  // Set the host to the backend's host
  forwardedHeaders["host"] = new URL(BETTER_AUTH_URL).host;

  // Ensure Origin header is correctly set to the backend URL if it's missing or null
  // Better Auth often requires the Origin to match BETTER_AUTH_URL or be trusted
  if (!forwardedHeaders["origin"] || forwardedHeaders["origin"] === "null") {
    forwardedHeaders["origin"] = new URL(BETTER_AUTH_URL).origin;
  }

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
        res.headers.set(key, Array.isArray(value) ? value.join(", ") : (value as string));
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
