import { MetaFunction } from "remix";
import ContactForm from "~/components/ContactForm";
import HeroSection from "~/components/home/HeroSection";
import IntroSection from "~/components/home/IntroSection";

export const meta: MetaFunction = () => ({
  title: "ShreyasCodes",
});

export default function Index() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ContactForm />
    </main>
  );
}
