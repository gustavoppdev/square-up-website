// Components
import TitleSection from "@/components/common/TitleSection";
import HeroAbout from "./components/HeroAbout";
import OurStory from "./components/OurStory";
import AboutCTA from "./components/AboutCTA";

const AboutPage = () => {
  return (
    <main className="section-container">
      <TitleSection
        translationNamespace="Pages.About.titleSection"
        bgImage={1}
      />

      <HeroAbout />

      <OurStory />

      <AboutCTA />
    </main>
  );
};

export default AboutPage;
