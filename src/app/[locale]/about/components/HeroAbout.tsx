// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Assets
import { aboutHeroImg } from "@/assets";

const HeroAbout = () => {
  const t = useTranslations("Sections.About");
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-7.5 lg:gap-20 2xl:gap-25 py-10 px-4 lg:py-20 lg:px-25 2xl:py-25 2xl:px-37.5 border-x">
      {/* Text */}
      <div className="space-y-4 2xl:space-y-5">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
          {t("title")}
        </h2>

        <p className="text-app-grey-60 text-sm lg:text-base 2xl:text-xl">
          {t("description")}
        </p>
      </div>

      {/* Image */}
      <div className="relative aspect-598/571">
        <Image
          src={aboutHeroImg}
          alt="SquareUp Logo"
          fill
          sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 768px) 574px, (max-width: 1024px) 312px, (max-width: 1280px) 331px, (max-width: 1536px) 419px, 487px"
          className="object-contain"
          priority
          fetchPriority="high"
        />
      </div>
    </section>
  );
};

export default HeroAbout;
