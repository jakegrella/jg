"use client";

import Link from "next/link";
import { Geist_Mono } from "next/font/google";
import useThemeStore, { Theme } from "./store";

const geistMono = Geist_Mono({ subsets: ["latin"] });

const Footer = () => {
  const { theme, setTheme } = useThemeStore();

  const ThemeButton = ({ text }: { text: Theme }) => {
    return (
      <button
        className={
          theme === text.toLowerCase()
            ? "capitalize underline decoration-primary decoration-2 underline-offset-2"
            : "capitalize"
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
    <footer
      className={`${geistMono.className} font-light flex flex-col gap-6 my-4`}
    >
      <div className="flex items-baseline gap-2 w-fit">
        <p>Theme:</p>
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
