"use client";

import Link from "next/link";
import useThemeStore from "./store";

const Footer = () => {
  const { theme, setTheme } = useThemeStore();

  const ThemeButton = ({ text }: { text: "light" | "dark" | "system" }) => {
    return (
      <button
        className={
          theme === text.toLowerCase() ? "underline uppercase" : "uppercase"
        }
        onClick={() => {
          setTheme(text);
        }}
      >
        {text}
      </button>
    );
  };

  return (
    <footer className="flex flex-col gap-8 my-8">
      <div className="flex items-baseline gap-2 w-fit">
        <p>theme:</p>
        <ThemeButton text="light" />
        <ThemeButton text="system" />
        <ThemeButton text="dark" />
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/tools/bubsy/grid-planner">Tools</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
        </ul>
      </nav>
      <span>© {new Date().getFullYear()} Jake Grella</span>
    </footer>
  );
};

export default Footer;
