import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Automation Agency for Small Businesses | NB Digital",
  description: "NB Digital helps businesses automate lead generation, marketing workflows and client follow-ups using AI automation systems.",

  keywords: "AI automation agency, marketing automation agency, AI business automation, AI lead generation, automation consulting",

  openGraph: {
    title: "AI Automation Agency | NB Digital",
    description: "Automate your marketing, lead generation and operations with AI-powered automation systems.",
    url: "https://nb-digital-viw1.vercel.app",
    siteName: "NB Digital",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
