import Link from 'next/link';
import { Geist_Mono } from 'next/font/google';
import EmailSignUpForm from './components/EmailSignUpForm/EmailSignUpForm';
import ThemeSwitcher from './components/ThemeSwitcher';

const geistMono = Geist_Mono({ subsets: ['latin'] });

const Footer = async () => {
  // const visits = 0;

  return (
    <footer
      className={`${geistMono.className} font-light my-4 flex gap-6 flex-col md:flex-row-reverse md:justify-between md:items-end`}
    >
      <div className="flex flex-col gap-2 md:gap-4">
        <ThemeSwitcher />
        {/* <span>Visits: {visits}</span> */}
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
      </div>
      <div className="flex flex-col gap-2">
        <EmailSignUpForm />
        <span>© {new Date().getFullYear()} Jake Grella</span>
      </div>
    </footer>
  );
};

export default Footer;
