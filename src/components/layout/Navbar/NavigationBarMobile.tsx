// Next.js & Next-Intl
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Assets
import { menuIcon } from "@/assets";
import { useTranslations } from "next-intl";
import { NavigationBarLinks } from "@/constants";
import { Link } from "@/i18n/navigation";

const NavigationBarMobile = () => {
  const t = useTranslations("Layout.NavigationBar");

  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant={"secondary"} size={"icon-lg"}>
          <Image src={menuIcon} alt="Menu" className="size-9 object-contain" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-app-grey-10 border-l-0">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only"></SheetDescription>
        </SheetHeader>

        <ul className="space-y-4">
          {NavigationBarLinks.map((link) => (
            <li key={link.label}>
              <Button
                variant={"ghost"}
                asChild
                className="w-full justify-start"
              >
                <Link href={link.href}>{t(link.label)}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NavigationBarMobile;
