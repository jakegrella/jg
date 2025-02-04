import Link from "next/link";

type HeaderProps = {
  landing?: boolean;
  pageTitle?: string;
};

const Header = ({ landing, pageTitle }: HeaderProps) => {
  if (landing) {
    return (
      <header className="flex items-center gap-2 py-4">
        <Link href="/">
          <span className="text-[1rem]">Jake Grella</span>
        </Link>
        <hr className="grow" />
        <button>Menu</button>
      </header>
    );
  }

  return (
    <header className="flex items-center gap-4 mb-4 py-4 rounded-b-lg">
      <Link href="/">
        <span className="text-xl">Jake Grella</span>
      </Link>
      <h1>{pageTitle}</h1>
    </header>
  );
};

export default Header;
