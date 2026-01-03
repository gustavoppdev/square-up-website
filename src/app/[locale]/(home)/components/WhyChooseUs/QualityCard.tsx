// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Types
import { Quality } from "@/types";

type Props = {
  quality: Quality;
};

const QualityCard = ({ quality }: Props) => {
  const t = useTranslations("Sections.WhyChooseUs.qualities");
  return (
    <li
      key={quality.title}
      className="p-10 lg:p-15 2xl:p-20 flex flex-col gap-6 lg:gap-7.5 2xl:gap-10 h-full border-x border-b lg:odd:border-r-0 hover:border-b-app-primary/50 transition-colors duration-300 group"
    >
      {/* Header */}
      <div className="flex items-center gap-4 lg:gap-7.5 2xl:gap-10 group-hover:-translate-y-1 transition-transform duration-300">
        <div className="p-0.5 rounded-md bg-linear-to-b from-[#2e2e2e] to-[#2e2e2e]/0 ">
          <div className="p-4 rounded-md bg-linear-to-b from-[#242424] to-[#242424]/0">
            <Image
              src={quality.icon}
              alt={quality.title}
              width={26}
              height={26}
            />
          </div>
        </div>
        <h3 className="font-semibold text-xl lg:text-2xl 2xl:text-3xl">
          {t(quality.title)}
        </h3>
      </div>

      {/* Content */}
      <p className="text-sm lg:text-base 2xl:text-lg text-app-grey-90 flex-1 group-hover:-translate-y-1 transition-transform duration-300">
        {t(quality.description)}
      </p>
    </li>
  );
};

export default QualityCard;
