import { Hero } from "./components/Hero";
import Partners from "./components/Partners";
import { OurServices } from "./components/OurServices";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "@/components/common/FAQ";
import Contact from "@/components/common/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <OurServices />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <div className="section-container">
        <Contact />
      </div>
    </main>
  );
};

export default Home;
