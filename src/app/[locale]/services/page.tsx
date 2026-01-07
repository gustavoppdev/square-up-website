// Components
import TitleSection from "@/components/common/TitleSection";
import ServiceSection from "./components/ServiceSection";

// Constants
import { ServicesArray } from "@/constants";

const ServicesPage = () => {
  return (
    <main className="section-container">
      <TitleSection
        translationNamespace="Sections.OurServices"
        bgImage={1}
        priority={true}
      />

      <div className="flex flex-col border-x">
        {ServicesArray.map((service) => (
          <ServiceSection key={service.title} service={service} />
        ))}
      </div>
    </main>
  );
};

export default ServicesPage;
