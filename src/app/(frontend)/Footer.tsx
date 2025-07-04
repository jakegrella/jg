import EmailSignUpForm from './components/EmailSignUpForm/EmailSignUpForm';
import ThemeSwitcher from './components/ThemeSwitcher';

const Footer = async () => {
  return (
    <footer className="pt-4 flex flex-col gap-6 uppercase">
      <ThemeSwitcher />
      {/* <span>Visits: {visits}</span> */}
      {/* <nav>
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
        </nav> */}
      <EmailSignUpForm />
      <span>
        © {new Date().getFullYear()} Jake Grella -{' '}
        <a href="https://www2.dre.ca.gov/publicasp/pplinfo.asp?LICENSE_ID=02254210">DRE 02254210</a>
      </span>
    </footer>
  );
};

export default Footer;
