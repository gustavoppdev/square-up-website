// Next-Intl
import { useTranslations } from "next-intl";

// Components
import TitleSection from "@/components/common/TitleSection";
import PreviewCard from "@/components/common/PreviewCard";

// Constants
import { ServicesArray } from "@/constants";

export const OurServices = () => {
  const t = useTranslations("Common.Services");

  return (
    <section className="section-container">
      {/* Title Section */}
      <TitleSection translationNamespace="Sections.OurServices" bgImage={1} />

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 border-x border-b">
        {ServicesArray.map((service) => (
          <PreviewCard
            key={service.title}
            title={t(service.title)}
            description={t(service.description)}
            icon={service.icon}
            href={service.href}
            buttonLabel={t("learnMoreBtn")}
          />
        ))}
      </ul>
    </section>
  );
};
