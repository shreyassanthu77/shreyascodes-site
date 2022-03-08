import Button from "~/components/Button";

import HeroGraphic from "../../../public/img/hero_graphic.svg";
import Container from "../Container";

const HeroSection = () => {
  return (
    <Container
      as="section"
      className="lg:min-h-[78vh] flex flex-col lg:flex-row text-center lg:text-left justify-between items-center py-40 lg:py-20"
    >
      <div>
        <h1 className="block max-w-[17ch] text-5xl font-semibold leading-tight">
          Beautifully Crafted User Experiences
        </h1>
        <p className="max-w-[30ch] mt-4 text-xl mx-auto lg:mx-0">
          To make the world a better place by building the future today!
        </p>
        <div className="flex flex-col lg:flex-row mt-6 justify-center lg:justify-start px-6 gap-6 lg:px-0">
          <Button as="link" to="#contact" className="">
            Contact Me
          </Button>
          <Button as="link" to="/about" variant="outlined">
            About Me
          </Button>
        </div>
      </div>
      <img
        src={HeroGraphic}
        className="pointer-events-none select-none hidden lg:block"
        alt="user experience design"
      />
    </Container>
  );
};

export default HeroSection;
