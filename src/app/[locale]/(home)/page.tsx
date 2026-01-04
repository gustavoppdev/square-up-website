import { Hero } from "./components/Hero";
import Partners from "./components/Partners";
import { OurServices } from "./components/OurServices";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "@/components/common/FAQ";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
