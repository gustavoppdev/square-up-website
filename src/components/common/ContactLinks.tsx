import { SocialContactLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface ContactLinksProps {
  variant?: "footer" | "card";
  className?: string;
  listClassName?: string;
  itemClassName?: string;
}

export const ContactLinks = ({
  variant = "card",
  className,
  listClassName,
  itemClassName,
}: ContactLinksProps) => {
  const t = useTranslations("Layout.Footer");

  return (
    <ul
      className={cn(
        "flex flex-col items-center justify-center",
        variant === "card"
          ? "w-full lg:w-auto lg:flex-row gap-5 2xl:gap-7.5"
          : "w-full xl:w-fit xl:flex-row xl:gap-5.5 2xl:gap-7.5",
        listClassName
      )}
    >
      {SocialContactLinks.map((link) => (
        <li
          key={link.description}
          className={cn(
            "w-full",
            variant === "card" ? "lg:w-auto" : "xl:w-fit",
            itemClassName
          )}
        >
          <a
            href={link.href}
            className={cn(
              "flex items-center justify-center gap-2.5 transition-all duration-300",
              variant === "card"
                ? "p-5 lg:px-6 hover:border-app-primary hover:-translate-y-1 bg-app-grey-15 rounded-md"
                : "py-5 xl:py-4 border-b w-full xl:w-fit hover:border-app-primary hover:-translate-y-1",
              className
            )}
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
  );
};
