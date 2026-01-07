// Components
import TitleSection from "@/components/common/TitleSection";
import SubtitleSection from "@/components/common/SubtitleSection";
import WorkCard from "./components/WorkCard";

// Constants
import { WorksArray } from "@/constants";

const PortfolioPage = () => {
  return (
    <main className="section-container">
      <TitleSection
        translationNamespace="Pages.Portfolio.titleSection"
        bgImage={4}
        priority={true}
      />
      <section className="border-x">
        <SubtitleSection translationNamespace="Pages.Portfolio.subtitleSection" />

        <ul className="grid grid-cols-1 lg:grid-cols-2">
          {WorksArray.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default PortfolioPage;
