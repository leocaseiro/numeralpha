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

// Ensure basePath is considered for manifest if not automatically handled by Next.js
// For static export with basePath, manual path is safer.
const manifestPath = process.env.NODE_ENV === 'production' ? '/numeralpha/manifest.json' : '/manifest.json';

export const metadata: Metadata = {
  title: "NumerAlpha - Learn Numbers & Letters",
  description: "Fun and interactive games for kids to learn counting and the alphabet.",
  manifest: manifestPath, // Next.js 13+ way to link manifest
  // Icons for metadata can be configured here too, but manifest.json handles PWA icons.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="manifest" href={manifestPath} /> Already handled by metadata object usually, but direct link can be fallback. Check if next-pwa handles this best. */}
        <meta name="theme-color" content="#007bff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover" />

        {/* iOS specific tags for PWA */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="NumerAlpha" />
        {/*
          Consider adding apple-touch-icon links here if not relying solely on manifest.json
          e.g., <link rel="apple-touch-icon" href="/numeralpha/icons/apple-touch-icon.png" />
        */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
