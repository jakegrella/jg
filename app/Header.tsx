"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type HeaderProps = {
  pageTitle?: string;
};

const Header = ({ pageTitle }: HeaderProps) => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <header className="flex items-center gap-2 py-4 justify-between">
        <Link href="/">
          <h1 className="text-[1rem]">Jake Grella</h1>
        </Link>
        <button>310.123.4567</button>
      </header>
    );
  }

  return (
    <header className="flex items-center gap-4 mb-4 py-4 rounded-b-lg">
      <>
        <Link href="/">
          <span className="text-xl">Jake Grella</span>
        </Link>
        <h1>{pageTitle}</h1>
      </>
      <button>310.123.4567</button>
    </header>
  );
};

export default Header;
