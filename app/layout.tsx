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
  title: "Harbor Point Merchant Services",
  description:
    "Harbor Point Merchant Services provides merchant payment solutions and business services for growing companies.",

  keywords:
    "Harbor Point Merchant Services, merchant services, payment processing, business payment solutions, merchant payment solutions",

  openGraph: {
    title: "Harbor Point Merchant Services",
    description:
      "Merchant payment solutions and business services for growing companies.",
    url: "https://nb-digital-viw1.vercel.app",
    siteName: "Harbor Point Merchant Services",
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
