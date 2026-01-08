// Next-Intl
import { useTranslations } from "next-intl";

// Constants
import { OurStorySteps } from "@/constants";

// Components
import Step from "@/components/common/Step";

const OurStory = () => {
  const t = useTranslations("Sections.OurStory");
  return (
    <section className="border-x">
      <h3 className="pt-10 mb-10 lg:pt-20 lg:mb-20 2xl:pt-25 2xl:mb-25 px-6 lg:px-10 2xl:px-12.5 border-t font-semibold text-4xl lg:text-5xl">
        {t("headline")}
      </h3>

      <ul className="grid grid-cols-1 lg:grid-cols-2">
        {OurStorySteps.map((step) => (
          <Step
            key={step.index}
            step={step}
            translationNamespace="Sections.OurStory.steps"
          />
        ))}
      </ul>
    </section>
  );
};

export default OurStory;
