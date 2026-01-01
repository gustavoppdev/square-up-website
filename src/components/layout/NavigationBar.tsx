// 
import { squareUpLogo } from "@/assets";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import NavigationBarMobile from "./NavigationBarMobile";
import { NavigationBarLinks } from "@/constants";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const NavigationBar = () => {
  const t = useTranslations("Layout.NavigationBar");
  return (
    <header className="border-b">
      <nav className="section-container pt-10 pb-5 flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={squareUpLogo}
            alt="Square Up"
            priority
            className="w-36 object-cover"
          />
        </Link>

        <ul className="hidden lg:flex gap-4 xl:gap-6">
          {NavigationBarLinks.map((link) => (
            <li key={link.label}>
              <Button variant={"ghost"} size={"lg"} asChild>
                <Link href={link.href}>{t(link.label)}</Link>
              </Button>
            </li>
          ))}
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

export default NavigationBar;
