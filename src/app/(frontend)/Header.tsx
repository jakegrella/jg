import Link from 'next/link';
import { anonymousPro, logoFont } from '@/fonts';

const Header = () => {
  const title = 'JAKE—GRELLA';
  const phone = '310.880.3185';

  return (
    <header className="flex items-center gap-2 py-4 mb-4 justify-between">
      <Link href="/">
        <h1 className={`${logoFont.className} text-lg`}>{title}</h1>
      </Link>
      <div className={`${anonymousPro.className} font-light text-sm flex gap-8`}>
        <Link href={'/blog'}>Blog</Link>
        <a href="tel:3108803185" className={`${anonymousPro.className} font-light text-sm`}>
          {phone}
        </a>
      </div>
    </header>
  );
};

export default Header;
