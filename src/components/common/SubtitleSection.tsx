import { useTranslations } from "next-intl";

type Props = {
  translationNamespace: string;
};

const SubtitleSection = ({ translationNamespace }: Props) => {
  const t = useTranslations(translationNamespace);

  return (
    <div className="pt-10 lg:pt-20 2xl:pt-30 mb-10 flex flex-col gap-1.5 lg:gap-2.5 2xl:gap-4 items-start px-4 lg:px-10 2xl:px-12.5">
      <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl ">
        {t("title")}
      </h3>
      <p className="text-app-grey-90 text-sm lg:text-base 2xl:text-lg max-w-5xl ">
        {t("description")}
      </p>

      <h4 className="mt-6 lg:mt-7.5 2xl:mt-9 rounded-lg bg-app-grey-15 p-2.5 2xl:py-3.5 px-3 lg:text-lg hover:bg-app-grey-15/80 cursor-pointer transition-all duration-300 hover:-translate-y-1">
        {t("badge")}
      </h4>
    </div>
  );
};

export default SubtitleSection;
