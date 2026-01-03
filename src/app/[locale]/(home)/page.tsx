import { Hero } from "./components/Hero";
import Partners from "./components/Partners";
import { OurServices } from "./components/OurServices";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "@/components/common/FAQ";

const Home = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Home;
