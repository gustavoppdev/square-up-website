// Next-Intl
import { useTranslations } from "next-intl";

// Components
import SubtitleSection from "@/components/common/SubtitleSection";
import PreviewCard from "@/components/common/PreviewCard";

// Constants
import { CurrentOpeningsArray } from "@/constants";

const CurrentOpenings = () => {
  const t = useTranslations("Sections.CurrentOpenings");

  return (
    <section className="border-x border-b">
      <SubtitleSection
        translationNamespace="Sections.CurrentOpenings"
        badge={false}
      />

      {CurrentOpeningsArray.map((opening) => (
        <div key={opening.title}>
          <h5 className="text-app-grey-60 font-medium text-xl 2xl:text-2xl p-10 text-center sm:text-left border-y">
            {t(opening.title)}
          </h5>

          <ul className="grid grid-cols-1 lg:grid-cols-3">
            {opening.items.map((item) => (
              <PreviewCard
                key={item.title}
                title={t(item.title)}
                description={t(item.description)}
                icon={item.icon}
                href={"#"}
                buttonLabel={t("applyNowBtn")}
              />
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default CurrentOpenings;
