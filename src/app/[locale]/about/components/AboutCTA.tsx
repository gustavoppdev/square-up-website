// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";

// Assets
import { squareUp2Logo } from "@/assets";

const AboutCTA = () => {
  const t = useTranslations("Sections.AboutCTA");
  return (
    <section className="border-x py-10 px-6 lg:p-15 2xl:p-20 flex flex-col gap-7.5 lg:gap-10 2xl:gap-12.5 text-center lg:text-left group">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-7.5 2xl:gap-10">
        <Image
          src={squareUp2Logo}
          alt="SquareUp"
          sizes="(max-width:1024px) 81px, (max-width:1536px) 100px, 151px"
          className="object-cover size-[81px] lg:size-[100px] 2xl:size-[150px] aspect-square"
        />

        <div className="space-y-2.5 lg:space-y-3.5 2xl:space-y-5">
          <h4 className="font-medium text-app-grey-60 text-xl lg:text-2xl 2xl:text-3xl group-hover:text-app-primary transition-colors duration-300">
            {t("title")}
          </h4>
          <p className="text-app-grey-60 text-sm lg:text-base 2xl:text-lg">
            {t("description")}
          </p>
        </div>
      </div>

      {/* Bottom */}

      <div className="p-5 lg:px-7.5 2xl:py-10 2xl:px-6 border rounded-2xl flex flex-col lg:flex-row lg:justify-between items-center gap-5 group-hover:border-app-primary transition-colors duration-400">
        <div className="flex flex-col lg:flex-row lg:items-center gap-3.5">
          <p className="text-app-grey-60 text-lg">
            {t("emphasis.introduction")}
          </p>

          <p className="py-2.5 px-3.5 bg-app-grey-15 rounded-lg 2xl:text-lg">
            {t("emphasis.badge")}
          </p>
        </div>

        <Button className="w-full lg:w-fit" size={"lg"}>
          {t("emphasis.startProjectBtn")}
        </Button>
      </div>
    </section>
  );
};

export default AboutCTA;
