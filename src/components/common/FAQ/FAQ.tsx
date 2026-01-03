import TitleSection from "../TitleSection";
import FAQAccordion from "./FAQAccordion";

export const FAQ = () => {
  return (
    <section className="section-container">
      <TitleSection translationNamespace="Sections.FAQ" bgImage={3} />

      <FAQAccordion />
    </section>
  );
};
