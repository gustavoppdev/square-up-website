// Components
import TitleSection from "@/components/common/TitleSection";
import ServicePreviewCard from "./ServicePreviewCard";

// Constants
import { ServicesArray } from "@/constants";

export const OurServices = () => {
  return (
    <section className="section-container">
      {/* Title Section */}
      <TitleSection translationNamespace="Sections.OurServices" bgImage={1} />

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 border-x border-b">
        {ServicesArray.map((service) => (
          <ServicePreviewCard key={service.title} service={service} />
        ))}
      </ul>
    </section>
  );
};
