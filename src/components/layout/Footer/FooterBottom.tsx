// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Constants
import { SocialContactLinks } from "@/constants";

const FooterBottom = () => {
  const t = useTranslations("Layout.Footer");
  return (
    <div className="flex flex-col xl:flex-row gap-5 xl:justify-between items-center">
      <ul className="w-full xl:w-fit flex flex-col xl:flex-row items-center xl:gap-5.5 2xl:gap-7.5">
        {SocialContactLinks.map((link) => (
          <li key={link.description} className="w-full xl:w-fit">
            <a
              href={link.href}
              className="flex items-center justify-center gap-2.5 py-5 xl:py-4 border-b w-full xl:w-fit hover:border-app-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={link.icon}
                alt={link.description}
                width={24}
                height={24}
                sizes="24px"
              />
              <p className="text-app-grey-90">{t(link.description)}</p>
            </a>
          </li>
        ))}
      </ul>

      <p className="text-app-grey-60 hover:text-white transition-colors duration-300 text-center cursor-pointer">
        {t("copyright", { year: new Date().getFullYear() })}
      </p>
    </div>
  );
};

export default FooterBottom;
