import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} antialiased mx-4`}>
        <header className="bg-zinc-800 mb-4 px-6 py-4 rounded-b-lg">
          <h1>Jake Grella</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
