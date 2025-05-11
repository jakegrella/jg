'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { anonymousPro, logoFont } from '@/fonts';

type HeaderProps = {
  pageTitle?: string;
};

const Header = ({ pageTitle }: HeaderProps) => {
  const pathname = usePathname();

  const title = 'JAKE—GRELLA';
  const phone = '310.880.3185';

  if (pathname === '/') {
    return (
      <header className="flex items-center gap-2 py-4 justify-between">
        <Link href="/">
          <h1 className={`${logoFont.className}`}>{title}</h1>
        </Link>
        <a href="tel:3108803185" className={`${anonymousPro.className} font-light text-sm`}>
          {phone}
        </a>
      </header>
    );
  }

  return (
    <header className="flex items-center gap-4 mb-4 py-4 rounded-b-lg">
      <>
        <Link href="/">
          <h2 className="tracking-tighter">{title}</h2>
        </Link>
        <h1>{pageTitle}</h1>
      </>
      <a href="tel:3108803185" className={`${anonymousPro.className} font-light text-sm`}>
        {phone}
      </a>
    </header>
  );
};

export default Header;
