import type { Metadata } from "next";

import { Inter, Teachers, Cairo } from "next/font/google";

import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

import "./globals.css";
import UpButton from "@/components/custom/UpButton";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${teachers.variable} ${cairo.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
        <UpButton />
      </body>
    </html>
  );
}
