import Container from "../Container";

import UserImg from "../../../public/img/user_img.svg";
import { Link } from "remix";

const IntroSection = () => {
  return (
    <div className="bg-primary-dark">
      <Container
        as="section"
        className="flex justify-between items-start py-28"
      >
        <img
          src={UserImg}
          className="pointer-events-none select-none"
          alt="Shreyas Mididoddi"
        />
        <div>
          <h2 className="block max-w-[21ch] text-3xl font-semibold leading-snug">
            Hi I am Shreyas Mididoddi and I make full stack apps to make the
            world a better place by building the future today
          </h2>
          <p className="max-w-[34ch] mt-4 text-xl leading-snug">
            Besides programming I also like solving puzzles like Rubik’s cubes
            and love solving math problems. I also enjoy making DIY projects at
            home and In my leasure time you can find me surfing the interwebs or
            mindlessly scrolling through Twitter 😁
          </p>
          <Link
            to="/about"
            className="py-2 mt-6 text-lg w-max flex items-center border-b-2 border-transparent outline-none hover:border-current focus:border-current transition-colors duration-150"
          >
            Learn more about me here
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default IntroSection;
