// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";
import NavigationBarMobile from "./NavigationBarMobile";

// Assets & Constants
import { squareUpLogo } from "@/assets";
import { NavigationBarLinks } from "@/constants";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";

export const NavigationBar = () => {
  const t = useTranslations("Layout.NavigationBar");
  return (
    <header className="border-b">
      <nav className="section-container pt-10 pb-5 flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={squareUpLogo}
            alt="Square Up"
            width={148}
            height={50}
            priority
            sizes="148px"
            className="object-cover"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-2 xl:gap-6">
          {NavigationBarLinks.map((link) => (
            <li key={link.label}>
              <Button variant={"ghost"} size={"lg"} asChild>
                <Link href={link.href}>{t(link.label)}</Link>
              </Button>
            </li>
          ))}
          <li>
            <LanguageSwitcher desktop />
          </li>
        </ul>

        <Button
          variant={"default"}
          size={"lg"}
          className="hidden lg:flex"
          asChild
        >
          <Link href={"/contact"}>{t("contactBtn")}</Link>
        </Button>

        <div className="lg:hidden">
          <NavigationBarMobile />
        </div>
      </nav>
    </header>
  );
};
