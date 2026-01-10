// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";

// Assets & Constants
import { squareUpLogo } from "@/assets";
import { StayConnectedWidget } from "@/components/common/StayConnectedWidget";
import { NavigationBarLinks } from "@/constants";

const FooterTop = () => {
  const t = useTranslations("Layout.NavigationBar");

  return (
    <div className="flex flex-col gap-7.5 items-center xl:flex-row xl:justify-between">
      <Image
        src={squareUpLogo}
        alt="Square Up"
        width={148}
        height={50}
        sizes="148px"
        className="object-cover"
      />

      <span className="w-full h-px block border-b xl:hidden"></span>

      <div className="flex flex-col gap-7.5 items-center xl:flex-row">
        <ul className="flex gap-2 flex-wrap justify-center items-center">
          {NavigationBarLinks.map((link) => (
            <li key={link.label}>
              <Button
                variant={"link"}
                size={"sm"}
                className="text-base"
                asChild
              >
                <Link href={link.href}>{t(link.label)}</Link>
              </Button>
            </li>
          ))}
        </ul>

        <StayConnectedWidget />
      </div>
    </div>
  );
};

export default FooterTop;
