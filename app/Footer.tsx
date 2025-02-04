import Link from "next/link";

const Footer = () => (
  <footer className="flex items-baseline justify-between my-8">
    <span>© {new Date().getFullYear()} Jake Grella</span>
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/tools/bubsy/grid-planner">Tools</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
