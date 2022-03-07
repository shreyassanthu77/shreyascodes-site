import { Link } from "remix";

import LogoWide from "../../public/img/logo_wide.svg";
import { navLinks, NavLinks } from "./NavLinks";

function Header() {
  return (
    <header className="px-2 py-4 sticky top-0 z-50 backdrop-blur-xl bg-primary-medium/80 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          className="px-4 py-2 border-b-2 border-transparent hover:border-current focus:border-current focus:outline-none transition-colors duration-150"
          to="/"
        >
          <img src={LogoWide} className="h-10" alt="shreyascodes.tech" />
        </Link>
        <nav>
          <ul className="flex items-center">
            <NavLinks className="mx-1" links={navLinks} />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
