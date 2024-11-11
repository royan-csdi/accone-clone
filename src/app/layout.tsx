import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import RQProvider from "@/components/provider/RQProvider";
import { envClient } from "@/lib/env";

const inter = Inter({ subsets: ["latin"] });

// app/layout.tsx
export const metadata: Metadata = {
  title: {
    template: "%s | Circle",
    default: "Circle",
  },
  description:
    "Discover the best products and services at Circle. Join us today for exclusive offers and insights.",
  keywords: ["best products", "best services", "circle"],
  icons: "/favicon.ico",
  robots: {
    index: envClient.NEXT_PUBLIC_ENVIRONMENT === "production",
    follow: envClient.NEXT_PUBLIC_ENVIRONMENT === "production",
    googleBot: {
      index: envClient.NEXT_PUBLIC_ENVIRONMENT === "production",
      follow: envClient.NEXT_PUBLIC_ENVIRONMENT === "production",
    },
  },
  other: {
    "Adsbot-Google": `${
      envClient.NEXT_PUBLIC_ENVIRONMENT === "production"
        ? "index, follow"
        : "noindex, nofollow"
    }`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <RQProvider>{children}</RQProvider>
      </body>
    </html>
  );
}
