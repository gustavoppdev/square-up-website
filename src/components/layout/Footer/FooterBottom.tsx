// Next.js & Next-Intl
import { useTranslations } from "next-intl";

// Constants
import { ContactLinks } from "@/components/common/ContactLinks";

const FooterBottom = () => {
  const t = useTranslations("Layout.Footer");
  return (
    <div className="flex flex-col xl:flex-row gap-5 xl:justify-between items-center">
      <ContactLinks variant="footer" />

      <p className="text-app-grey-60 hover:text-white transition-colors duration-300 text-center cursor-pointer">
        {t("copyright", { year: new Date().getFullYear() })}
      </p>
    </div>
  );
};

export default FooterBottom;
