// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Assets
import { titleSectionBg1, titleSectionBg2, titleSectionBg3 } from "@/assets";

const BG_MAP = {
  1: titleSectionBg1,
  2: titleSectionBg2,
  3: titleSectionBg3,
};

type Props = {
  translationNamespace: string;
  bgImage: keyof typeof BG_MAP;
};

const TitleSection = ({ translationNamespace, bgImage }: Props) => {
  const t = useTranslations(translationNamespace);

  const imageSizes =
    "(max-width: 640px) 100vw, (max-width: 768px) 608px, (max-width: 1024px) 688px, (max-width: 1280px) 944px, (max-width: 1536px) 1120px, 1376px";

  return (
    <div className="py-12.5 lg:py-25 2xl:py-30 text-center relative border-x border-b">
      <Image
        src={BG_MAP[bgImage]}
        alt=""
        fill
        sizes={imageSizes}
        className="object-cover object-center -z-20 opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-[#ACFF24]/25 mix-blend-overlay" />
      <div className="absolute inset-0 -z-10 bg-black/70 mix-blend-overlay" />

      <Image
        src={"/heroBackground.png"}
        alt=""
        fill
        sizes={imageSizes}
        className="object-cover object-center -z-10"
      />

      <div className="z-10 space-y-1.5 lg:space-y-2.5 2xl:space-y-4 px-4 text-balance">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
          {t("headline")}
        </h2>
        <p className="text-sm md:text-base 2xl:text-lg max-w-5xl mx-auto">
          {t("paragraph")}
        </p>
      </div>
    </div>
  );
};

export default TitleSection;
