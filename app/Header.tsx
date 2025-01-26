import Link from "next/link";

type HeaderProps = {
  landing?: boolean;
  pageTitle?: string;
};

const Header = ({ landing, pageTitle }: HeaderProps) => {
  return (
    <header className="flex items-center gap-4 bg-zinc-800 mb-4 px-6 py-4 rounded-b-lg">
      {landing ? (
        <Link href="/">
          <h1>Jake Grella</h1>
        </Link>
      ) : (
        <>
          <Link href="/">
            <span className="text-xl">Jake Grella</span>
          </Link>
          <h1>{pageTitle}</h1>
        </>
      )}
    </header>
  );
};

export default Header;
