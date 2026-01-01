import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const HeroButtons = () => {
  const t = useTranslations("Sections.Hero");
  return (
    <div className="space-x-3.5 z-10">
      <Button
        variant={"outline"}
        size={"lg"}
        className="bg-app-grey-15/40! backdrop-blur-xs 2xl:text-lg"
      >
        {t("worksBtn")}
      </Button>
      <Button variant={"default"} size={"lg"} className="2xl:text-lg">
        {t("contactBtn")}
      </Button>
    </div>
  );
};

export default HeroButtons;
