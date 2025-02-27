import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import Header from "./Header";
import ThemeProvider from "./ThemeProvider";

export const metadata: Metadata = {
  title: "Jake Grella",
  description: "Jake Grella",
};

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased px-4 flex flex-col justify-between min-h-svh`}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
