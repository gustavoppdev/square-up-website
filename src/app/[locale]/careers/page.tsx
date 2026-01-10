// Components
import TitleSection from "@/components/common/TitleSection";
import AboutCTA from "../about/components/AboutCTA";
import CurrentOpenings from "./components/CurrentOpenings";

const CareersPage = () => {
  return (
    <main className="section-container">
      <TitleSection
        translationNamespace="Pages.Careers.titleSection"
        bgImage={3}
        priority
      />

      <CurrentOpenings />

      <AboutCTA />
    </main>
  );
};

export default CareersPage;
