import TitleSection from "../TitleSection";
import FAQAccordion from "./FAQAccordion";

type Props = {
  container?: boolean;
};

export const FAQ = ({ container = true }: Props) => {
  return (
    <section className={container ? "section-container" : ""}>
      <TitleSection translationNamespace="Sections.FAQ" bgImage={3} />

      <FAQAccordion />
    </section>
  );
};
