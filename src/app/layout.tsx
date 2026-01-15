import type { Metadata } from "next";

import { Inter, Teachers } from "next/font/google";

import NavBar from "@/components/layout/NavBar";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const teachers = Teachers({
  variable: "--font-teachers",
  subsets: ["latin"],
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
      <body className={`${inter.variable} ${teachers.variable} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
