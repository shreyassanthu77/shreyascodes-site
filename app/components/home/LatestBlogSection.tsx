import React from "react";
import { Link } from "remix";
import Container from "../Container";

const LatestBlogSection = () => {
  return (
    <Container as="section" className="py-16">
      <h3 className="text-3xl font-bold">My latest Article</h3>
      <div className="mt-6 flex items-center bg-primary-light p-10 rounded-3xl">
        <div className="w-56 h-56 bg-primary-medium border-2 rounded-2xl"></div>
        <div className="max-w-[65ch] mx-auto">
          <h4 className="text-2xl font-medium mb-4">Web Developer Roadmap</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quaerat dolorem deleniti possimus harum fugit placeat laboriosam
            ratione dolor nesciunt explicabo sint nostrum architecto
            praesentium, dolore, accusamus quam voluptatibus. Ad accusantium
            quibusdam quidem soluta eaque sint repellendus impedit inventore
          </p>
          <Link
            to="/blog/web-developer-roadmap"
            className="py-2 mt-6 text-lg w-max flex items-center border-b-2 border-transparent outline-none hover:border-current focus:border-current transition-colors duration-150"
          >
            Read the full Article
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
      </div>
      <Link
        to="/blog"
        className="py-2 mt-6 ml-auto mr-10 text-lg w-max flex items-center border-b-2 border-transparent outline-none hover:border-current focus:border-current transition-colors duration-150"
      >
        Find more Articles
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
    </Container>
  );
};

export default LatestBlogSection;
