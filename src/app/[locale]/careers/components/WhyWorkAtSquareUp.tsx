// Components
import SubtitleSection from "@/components/common/SubtitleSection";
import Step from "@/components/common/Step";

// Constants
import { WhyWorkAtSquareUpSteps } from "@/constants";

const WhyWorkAtSquareUp = () => {
  return (
    <section className="border-x">
      <SubtitleSection translationNamespace="Pages.Careers.subtitleSection" />

      <ul className="grid grid-cols-1 lg:grid-cols-2">
        {WhyWorkAtSquareUpSteps.map((step) => (
          <Step
            key={step.index}
            step={step}
            translationNamespace={"Sections.WhyWorkAtSquareUp"}
            noIndex
          />
        ))}
      </ul>
    </section>
  );
};

export default WhyWorkAtSquareUp;
