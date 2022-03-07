import React from "react";
import Container from "./Container";
import { Link } from "remix";

import { navLinks, NavLinks } from "./NavLinks";

import LogoWide from "../../public/img/logo_wide.svg";
import GithubLogo from "../../public/img/github_logo.svg";
import LinkedInLogo from "../../public/img/linkedin_logo.svg";
import TwitterLogo from "../../public/img/twitter_logo.svg";

const SocialLinks: React.FC = () => {
  return (
    <nav>
      <ul className="flex justify-between mt-4">
        <li>
          <a
            className="block outline-none rounded-xl brightness-75 hover:brightness-150 focus:brightness-150 focus:ring-4 transition-all duration-150"
            href="https://github.com/shreyassanthu77"
          >
            <img src={GithubLogo} alt="Github" />
          </a>
        </li>
        <li>
          <a
            className="block outline-none rounded-xl hover:brightness-150 focus:brightness-150 focus:ring-4 transition-all duration-150"
            href="https://www.linkedin.com/in/shreyas-mididoddi-6692b9200/"
          >
            <img src={LinkedInLogo} alt="Linkedin" />
          </a>
        </li>
        <li>
          <a
            className="block outline-none rounded-xl hover:brightness-150 focus:brightness-150 focus:ring-4 transition-all duration-150"
            href="https://twitter.com/Shreyassanthu77"
          >
            <img src={TwitterLogo} alt="Twitter" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="bg-primary-dark border-t-[1px]">
      <Container as="footer" className="flex justify-between items-center py-8">
        <div>
          <img
            src={LogoWide}
            className="select-none pointer-events-none"
            alt="ShreyasCodes Logo"
          />
          <SocialLinks />
        </div>
        <p className="text-center text-gray-300 text-lg">
          <span className="block">All rights reserved</span>
          <span className="block mt-2">&copy; Shreyas Mididoddi 2022</span>
        </p>
        <div>
          <strong className="text-lg">Useful Links</strong>
          <nav className="mt-4">
            <ul>
              <NavLinks className="my-2 px-0 pl-2" links={navLinks} />
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
