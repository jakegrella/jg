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
        className={`${dmSans.className} antialiased mx-4 flex flex-col justify-between min-h-screen`}
      >
        <ThemeProvider>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
