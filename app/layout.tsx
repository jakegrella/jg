import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./Footer";
import Header from "./Header";
import ThemeProvider from "./ThemeProvider";

const openingHoursSans = localFont({
  src: "./OpeningHoursSans-Regular.otf",
  display: "swap",
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
      <body
        className={`${openingHoursSans.className} uppercase antialiased mx-4 flex flex-col justify-between min-h-screen`}
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
