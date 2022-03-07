import Button from "~/components/Button";

import HeroGraphic from "../../../public/img/hero_graphic.svg";
import Container from "../Container";

const HeroSection = () => {
  return (
    <Container
      as="section"
      className="min-h-[78vh] flex justify-between items-center py-20"
    >
      <div>
        <h1 className="block max-w-[17ch] text-5xl font-semibold leading-tight">
          Beautifully Crafted User Experiences
        </h1>
        <p className="max-w-[30ch] mt-4 text-xl">
          To make the world a better place by building the future today!
        </p>
        <div className="flex mt-6">
          <Button as="link" to="/blog">
            Read the blog
          </Button>
          <Button as="link" to="#contact" className="ml-4" variant="outlined">
            Contact Me
          </Button>
        </div>
      </div>
      <img
        src={HeroGraphic}
        className="pointer-events-none select-none"
        alt="user experience design"
      />
    </Container>
  );
};

export default HeroSection;
