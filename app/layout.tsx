import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { fiFI } from "@clerk/localizations";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ilmo-app",
  description: "Ilmoittaudu ja osallistu kilpailuihin helposti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={fiFI}>
      <html lang="fi">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="bg-green-800 min-h-svh">{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
