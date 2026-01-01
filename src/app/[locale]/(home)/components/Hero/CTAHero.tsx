import { useTranslations } from "next-intl";

const CTAHero = () => {
  const t = useTranslations("Sections.Hero");
  return (
    <div className="space-y-7.5 2xl:space-y-10 z-10">
      <h1 className="font-semibold text-4xl lg:text-5xl 2xl:text-6xl">
        {t.rich("headline", {
          block: (chunks) => <span className="block">{chunks}</span>,
        })}
      </h1>

      <p className="lg:hidden text-app-grey-60 rounded-lg py-5 px-4.5 border border-app-grey-15 bg-app-grey-15/40 backdrop-blur-xs max-w-sm">
        {t("paragraphMobile")}
      </p>

      <div className="hidden lg:flex items-center gap-1.5 text-lg 2xl:text-xl rounded-lg border text-app-grey-60 bg-app-grey-15/40 backdrop-blur-xs px-7.5 py-4.5">
        {t.rich("paragraphDesktop", {
          badge: (chunks) => (
            <span className="text-white capitalize px-2.5 py-2 2xl:px-3.5 2xl:py-3 rounded-md bg-app-grey-15 hover:bg-app-grey-15/80 cursor-pointer transition-colors duration-100">
              {chunks}
            </span>
          ),
        })}
      </div>
    </div>
  );
};

export default CTAHero;
