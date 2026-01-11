"use client";

// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { StayConnectedWidget } from "@/components/common/StayConnectedWidget";

// Assets & Constants
import { menuIcon, squareUpLogo } from "@/assets";
import { NavigationBarLinks } from "@/constants";

const NavigationBarMobile = () => {
  const t = useTranslations("Layout.NavigationBar");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"secondary"} size={"icon-lg"}>
          <Image src={menuIcon} alt="Menu" className="size-9 object-contain" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-app-grey-10 border-l-0">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">Menu</SheetDescription>
          <SheetClose asChild>
            <Link href={"/"} className="relative">
              <Image
                src={squareUpLogo}
                alt="SquareUp Logo"
                width={148}
                height={50}
                sizes="148px"
                className="object-cover"
              />
            </Link>
          </SheetClose>
        </SheetHeader>

        <ul className="space-y-4 px-4">
          {NavigationBarLinks.map((link) => (
            <li key={link.label}>
              <SheetClose asChild>
                <Button
                  variant={"ghost"}
                  className="w-full justify-start px-0 text-base"
                  asChild
                >
                  <Link href={link.href}>{t(link.label)}</Link>
                </Button>
              </SheetClose>
            </li>
          ))}
          <li>{/* <LanguageSwitcher /> */}</li>
        </ul>

        <SheetFooter>
          <div className="flex flex-col gap-4 mb-4">
            <SheetClose className="w-full" asChild>
              <Button
                variant={"secondary"}
                size={"lg"}
                className="w-full h-12"
                asChild
              >
                <Link href={"/portfolio"}>{t("worksBtn")}</Link>
              </Button>
            </SheetClose>
            <SheetClose className="w-full" asChild>
              <Button size={"lg"} className="w-full h-12" asChild>
                <Link href={"/contact"}>{t("contactBtn")}</Link>
              </Button>
            </SheetClose>
          </div>
          <StayConnectedWidget />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavigationBarMobile;
