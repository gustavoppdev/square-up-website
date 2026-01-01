import { Pathnames } from "@/i18n/routing";
import { StaticImageData } from "next/image";

export type TranslationKey = string;

export type NavigationLink = {
  href: Pathnames;
  label: TranslationKey;
};

export type Partner = {
  img: StaticImageData;
  alt: string
}