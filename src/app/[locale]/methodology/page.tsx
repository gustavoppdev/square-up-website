import SubtitleSection from "@/components/common/SubtitleSection";
import TitleSection from "@/components/common/TitleSection";
import { MethodologySteps } from "@/constants";
import MethodologyStep from "@/components/common/Step";
import Contact from "@/components/common/Contact";

const MethodologyPage = () => {
  return (
    <main className="section-container">
      <TitleSection
        translationNamespace="Pages.Methodology.titleSection"
        bgImage={3}
        priority
      />

      <section className="border-x">
        <SubtitleSection translationNamespace="Pages.Methodology.subtitleSection" />

        <ul className="grid grid-cols-1 lg:grid-cols-2">
          {MethodologySteps.map((step) => (
            <MethodologyStep
              key={step.index}
              step={step}
              translationNamespace="Sections.Methodology.steps"
            />
          ))}
        </ul>
      </section>

      <Contact />
    </main>
  );
};

export default MethodologyPage;
