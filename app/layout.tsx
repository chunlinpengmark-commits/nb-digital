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
  title: "AI Automation for Small Businesses | NB Digital",
  description:
    "NB Digital builds AI automation systems for small businesses, including marketing automation, lead generation systems, and business process automation.",

  keywords:
    "AI automation agency, AI automation for small businesses, marketing automation agency, business process automation, AI lead generation systems",

  openGraph: {
    title: "AI Automation for Small Businesses | NB Digital",
    description:
      "NB Digital builds AI automation systems for small businesses, including marketing automation, lead generation systems, and business process automation.",
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
