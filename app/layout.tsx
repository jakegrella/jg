import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./Footer";

const eurostile = localFont({ src: "./eurostile.ttf", display: "swap" });

export const metadata: Metadata = {
  title: "Jake Grella",
  description: "Jake Grella",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${eurostile.className} tracking-wide antialiased mx-4`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
