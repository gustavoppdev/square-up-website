// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";

// Assets & Constants
import { squareUpLogo } from "@/assets";
import { NavigationBarLinks, SocialMediaLinks } from "@/constants";

const FooterTop = () => {
  const t = useTranslations("Layout.NavigationBar");
  const tfooter = useTranslations("Layout.Footer");

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

        <div className="py-4 px-5 w-full xl:w-fit flex flex-col xl:flex-row items-center gap-4 xl:gap-7.5 rounded-lg border">
          <p className="font-medium">{tfooter("stayConnected")}</p>

          <ul className="flex gap-2.5 items-center">
            {SocialMediaLinks.map((link) => (
              <a
                key={link.alt}
                href={link.href}
                rel="noopener noreferrer"
                className="block"
              >
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
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
