import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <main>{children}</main>
        <footer className="flex items-baseline gap-4 my-8">
          <span>©Jake Grella</span>
          <nav>
            <ul>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
