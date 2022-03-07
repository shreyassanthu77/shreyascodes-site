import { MetaFunction } from "remix";
import Container from "~/components/Container";
import calculateAge from "~/util/calculateAge";

import MyStoryImg from "../../public/img/my_story.svg";
import PersonalInfoImg from "../../public/img/personal_info.svg";
import UserImg from "../../public/img/user_img.svg";

export const meta: MetaFunction = () => ({
  title: "About Me",
});

const About = () => {
  return (
    <>
      <Container
        as="section"
        className="flex justify-between items-start py-28"
      >
        <div className="max-w-[50ch]">
          <h2 className="block text-3xl font-semibold leading-snug">
            Hi I am Shreyas Mididoddi and I make full stack apps to make the
            world a better place by building the future today
          </h2>
          <p className="mt-4 max-w-[35ch] text-xl leading-snug">
            Besides programming I also like solving puzzles like Rubik’s cubes
            and love solving math problems. I also enjoy making DIY projects at
            home and In my leasure time you can find me surfing the interwebs or
            mindlessly scrolling through Twitter 😁
          </p>
        </div>
        <img
          src={UserImg}
          className="pointer-events-none select-none"
          alt="Shreyas Mididoddi"
        />
      </Container>
      <div className="bg-primary-dark">
        <Container className="py-14 flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold">My Skills</h2>
            <p className="mt-4 text-xl max-w-[40ch] leading-8">
              There are a lot of things that I've picked up over the years and
              here are a few of em
            </p>
            <br />
            <div className="flex gap-x-32 text-lg">
              <ul className="list-disc">
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JavScript</li>
                <li>TypeScript</li>
                <li>Redux</li>
                <li>Next JS</li>
                <li>
                  Remix JS <br />
                  <span className="block text-sm font-light -translate-x-6">
                    ( infact this site is built with it )
                  </span>
                </li>
              </ul>
              <ul className="list-disc">
                <li>React</li>
                <li>React Router</li>
                <li>React Native</li>
                <li>Svelte</li>
                <li>VueJS</li>
                <li>Node JS</li>
                <li>Deno</li>
              </ul>
              <ul className="list-disc">
                <li>Python</li>
                <li>Dart</li>
                <li>Flutter</li>
                <li>C / C++</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <img
            src={PersonalInfoImg}
            className="max-w-[500px]"
            alt="Shreyas Mididoddi"
          />
        </Container>
      </div>
      <Container
        as="section"
        className="py-14 flex justify-between items-start"
      >
        <img
          className="block max-w-[500px] mt-14 drop-shadow-lg brightness-90"
          src={MyStoryImg}
          alt="Personal Information graphic"
        />
        <div>
          <h2 className="text-4xl font-bold">My Story</h2>
          <p className="mt-4 text-xl max-w-[65ch] leading-8">
            I am Shreyas Mididoddi an {calculateAge()} years old software
            developer intrested in math and computer science. I am obsessed with
            technology and learning new things every day. I am involved with
            tech from my childhood. When I was approximately 12 years old I came
            across a YouTube titled something like "Make your own social network
            site from scratch" and I was soo intrested in building something
            like that so I started learning HTML4 form{" "}
            <a
              className="text-sky-700 underline underline-offset-2"
              href="http://html.net"
            >
              html.net
            </a>{" "}
            and slowly learnt HTML 5, CSS and some php online and at some point
            I was so addicted to programming that I kept learning from then on.
          </p>
          <p className="mt-4 text-xl max-w-[65ch] leading-8">
            Slowly but consistantly I was learning a lot of things, I learnt web
            dev with php. All of this on my uncle's computer which was like 12 -
            13 years old and on one fine day, I went to my uncle's home and
            turned on the PC which then let out the magic smoke and there went
            all my projects and then came my 11th grade and in India this is a
            big deal because all the maths students are expected to write JEE
            mains and Advanced examinations at the end of 12 th grade so there
            went my 2 years working like 10 hours a day at school, coaching and
            a lot of practice tests
          </p>
          <p className="mt-4 text-xl max-w-[65ch] leading-8">
            Amidst all of this hectic schedule I still managed to practiced a
            lot of pragramming but didn't manage to build any real applications
            due to lack of time. Then I joined college and this was the time
            skipped my classes to learn new frameworks, libraries and
            programming languages and this continues till date; and that was my
            story
          </p>
        </div>
      </Container>
    </>
  );
};

export default About;
