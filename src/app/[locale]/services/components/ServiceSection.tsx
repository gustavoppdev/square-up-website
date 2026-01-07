// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import SubtitleSection from "@/components/common/SubtitleSection";

// Types
import { Service } from "@/types";

type Props = {
  service: Service;
};

const ServiceSection = ({ service }: Props) => {
  const t = useTranslations("Common.Services");

  const translationNamespace = `Common.Services.${service.title.split(".")[0]}`;

  return (
    <section
      className="first:border-t-0 border-t"
      id={service.title.split(".")[0]}
    >
      <SubtitleSection translationNamespace={translationNamespace} />

      {service.groups.map((group) => (
        <div key={group.subtitle}>
          <h5 className="text-app-grey-60 font-medium text-xl 2xl:text-2xl p-10 text-center sm:text-left first:border-t">
            {t(group.subtitle)}
          </h5>

          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {group.inclusions.map((item, index) => (
              <li
                key={index}
                className="p-5 lg:p-10 2xl:p-12.5 flex flex-col items-start gap-5 lg:gap-6 2xl:gap-7.5 border-r last:border-r-0 border-t border-b hover:border-b-app-primary transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Icon */}
                <div className="p-0.5 rounded-md bg-linear-to-b from-[#2e2e2e] to-[#2e2e2e]/0 group-hover:from-app-primary/30 transition-colors duration-300 cursor-pointer">
                  <div className="p-4 rounded-md bg-linear-to-b from-[#242424] to-[#242424]/0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                      sizes="(max-width: 1536px) 20px, 40px"
                      className="size-6 2xl:size-10"
                    />
                  </div>
                </div>
                {/* Title */}
                <p className="text-app-grey-90 font-medium 2xl:text-lg text-balance">
                  {t(item.title)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ServiceSection;
