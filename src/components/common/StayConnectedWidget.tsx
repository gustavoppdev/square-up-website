import { SocialMediaLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface StayConnectedWidgetProps {
  className?: string;
}

export const StayConnectedWidget = ({
  className,
}: StayConnectedWidgetProps) => {
  const t = useTranslations("Layout.Footer");

  return (
    <div
      className={cn(
        "py-4 px-5 w-full xl:w-fit flex flex-col xl:flex-row items-center gap-4 xl:gap-7.5 rounded-lg border",
        className
      )}
    >
      <p className="font-medium">{t("stayConnected")}</p>

      <ul className="flex gap-2.5 items-center">
        {SocialMediaLinks.map((link) => (
          <li key={link.alt}>
            <a href={link.href} rel="noopener noreferrer" className="block">
              <div className="p-0.5 rounded-md bg-linear-to-b from-[#2e2e2e] to-[#2e2e2e]/0 hover:from-app-primary/30 hover:to-app-primary/0 transition-colors duration-300 cursor-pointer">
                <div className="p-4 rounded-md bg-linear-to-b from-[#242424] to-[#242424]/0">
                  <Image
                    src={link.icon}
                    alt={link.alt}
                    width={20}
                    height={20}
                    sizes="20px"
                  />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
