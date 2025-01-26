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
        <footer className="flex items-baseline gap-8 my-8">
          <span>© {new Date().getFullYear()} Jake Grella</span>
          <nav>
            <ul className="flex gap-2">
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
