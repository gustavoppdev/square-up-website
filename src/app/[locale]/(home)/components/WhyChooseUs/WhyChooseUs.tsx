// Components
import TitleSection from "@/components/common/TitleSection";
import QualityCard from "./QualityCard";

// Constants
import { QualitiesArray } from "@/constants";

export const WhyChooseUs = () => {
  return (
    <section className="section-container">
      <TitleSection translationNamespace="Sections.WhyChooseUs" bgImage={2} />

      <ul className="grid grid-cols-1 lg:grid-cols-2">
        {QualitiesArray.map((quality) => (
          <QualityCard key={quality.title} quality={quality} />
        ))}
      </ul>
    </section>
  );
};
