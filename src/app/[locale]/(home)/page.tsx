import { Hero } from "./components/Hero";
import Partners from "./components/Partners";
import { OurServices } from "./components/OurServices";
import { WhyChooseUs } from "./components/WhyChooseUs";

const Home = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <OurServices />
      <WhyChooseUs />
    </main>
  );
};

export default Home;
