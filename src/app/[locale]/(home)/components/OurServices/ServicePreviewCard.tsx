// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Types & Components
import { Service } from "@/types";
import { Button } from "@/components/ui/button";

type Props = {
  service: Service;
};

const ServicePreviewCard = ({ service }: Props) => {
  const t = useTranslations("Common.Services");
  return (
    <li
      key={service.title}
      className="p-7.5 lg:p-10 2xl:p-12.5 flex flex-col gap-6 h-full border-b last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-0.5 rounded-md bg-linear-to-b from-[#2e2e2e] to-[#2e2e2e]/0 ">
          <div className="p-4 rounded-md bg-linear-to-b from-[#242424] to-[#242424]/0">
            <Image
              src={service.icon}
              alt={service.title}
              width={26}
              height={26}
            />
          </div>
        </div>
        <h3 className="font-semibold text-xl lg:text-2xl 2xl:text-3xl">
          {t(service.title)}
        </h3>
      </div>

      {/* Content */}
      <p className="text-sm lg:text-base 2xl:text-lg text-app-grey-90 flex-1">
        {t(service.description)}
      </p>

      {/* Button */}
      <Button
        variant={"secondary"}
        size={"lg"}
        className="hover:-translate-y-1"
      >
        {t("learnMoreBtn")}
      </Button>
    </li>
  );
};

export default ServicePreviewCard;
