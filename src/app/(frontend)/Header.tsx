import Link from 'next/link';
import { logoFont } from '@/fonts';

const Header = () => {
  return (
    <header className="flex justify-between items-start gap-2 pb-8 uppercase">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-5 bg-[#ccff00]" />
        <h1 className={`${logoFont.className}`}>JAKE GRELLA</h1>
      </Link>
      <div className="text-sm">
        <div className="flex gap-4">
          <a href="tel:1-310-880-3185">310.880.3185</a>
        </div>
        <a href="mailto:jake@jakegrella.com">jake@jakegrella.com</a>
      </div>
    </header>
  );
};

export default Header;
