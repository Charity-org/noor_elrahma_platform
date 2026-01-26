import type { Metadata } from "next";

import { Inter, Teachers, Cairo } from "next/font/google";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

import UpButton from "@/components/custom/UpButton";
import SmoothScroll from "@/components/common/SmoothScroll";
import { Toaster } from "sonner";
import { AuthProvider } from "@/providers/auth-provider";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

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
  title: "Noor Elrahmat",
  description: "Noor Elrahmat Platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body className={`${inter.variable} ${teachers.variable} ${cairo.variable} antialiased`}>
        <AuthProvider>
          <SmoothScroll root>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <NavBar />
              {children}
              <Footer />
            </NextIntlClientProvider>
            <UpButton />
            <Toaster richColors position="top-right" />
          </SmoothScroll>
        </AuthProvider>
      </body>
    </html>
  );
}
