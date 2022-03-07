import { Link, useLocation } from "remix";

export type NavLink = {
  to: string;
  label: string;
};

export const NavLinks: React.FC<{
  links: NavLink[];
  className?: string;
}> = ({ links, className = "" }) => {
  const location = useLocation();
  return (
    <>
      {links.map(({ to, label }) => (
        <li key={to}>
          <Link
            className={`block text-sm px-4 py-2 border-b-2 border-transparent hover:border-current focus:border-current focus:outline-none transition-colors duration-150 ${className}`}
            to={
              to === "/contact"
                ? location.pathname === "/"
                  ? "#contact"
                  : to
                : to
            }
          >
            {label}
          </Link>
        </li>
      ))}
    </>
  );
};

export const navLinks: NavLink[] = [
  // {
  //   to: "/blog",
  //   label: "Blog",
  // },
  {
    to: "/about",
    label: "About Me",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];
