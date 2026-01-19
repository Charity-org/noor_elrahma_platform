import type { Metadata } from "next";
import { Inter, Teachers, Cairo } from "next/font/google";
import SmoothScroll from "@/components/common/SmoothScroll";

import { Toaster } from "@/components/ui/sonner";

import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const teachers = Teachers({
  variable: "--font-teachers",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Auth | Noor Elrahmat",
  description: "Authentication pages for Noor Elrahmat Platform",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${teachers.variable} ${cairo.variable} antialiased`}>
        <SmoothScroll root>{children}</SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}
