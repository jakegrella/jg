"use client";

import { usePathname } from "next/navigation";
import { Geist_Mono } from "next/font/google";
import Link from "next/link";

type HeaderProps = {
  pageTitle?: string;
};

const geistMono = Geist_Mono({ subsets: ["latin"] });

const Header = ({ pageTitle }: HeaderProps) => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <header className="flex items-center gap-2 py-4 justify-between">
        <Link href="/">
          <h1>Jake Grella</h1>
        </Link>
        <button className={`${geistMono.className} font-light text-sm`}>
          310.880.3185
        </button>
      </header>
    );
  }

  return (
    <header className="flex items-center gap-4 mb-4 py-4 rounded-b-lg">
      <>
        <Link href="/">
          <h1 className="text-[1rem] font-">Jake Grella</h1>
        </Link>
        <h1>{pageTitle}</h1>
      </>
      <button className={`${geistMono.className} font-light text-sm`}>
        310.880.3185
      </button>
    </header>
  );
};

export default Header;
