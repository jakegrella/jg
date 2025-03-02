import Link from 'next/link';
import { Geist_Mono } from 'next/font/google';
import EmailSignUpForm from './components/EmailSignUpForm/EmailSignUpForm';
import ThemeSwitcher from './components/ThemeSwitcher';

const geistMono = Geist_Mono({ subsets: ['latin'] });

const Footer = async () => {
  return (
    <footer className={`${geistMono.className} font-light flex flex-col gap-6 my-4`}>
      <EmailSignUpForm />
      <ThemeSwitcher />
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
