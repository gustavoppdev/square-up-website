import { Pathnames } from "@/i18n/routing";
import { StaticImageData } from "next/image";

export type TranslationKey = string;

export type NavigationLink = {
  href: Pathnames;
  label: TranslationKey;
};

export type Partner = {
  img: StaticImageData;
  alt: string;
};

export type ServiceInclusion = {
  title: TranslationKey;
  icon: StaticImageData;
};

export type ServiceGroup = {
  subtitle: TranslationKey;
  inclusions: ServiceInclusion[];
};

export type Service = {
  title: TranslationKey;
  description: TranslationKey;
  icon: StaticImageData;
  href: Pathnames;
  groups?: ServiceGroup[];
};
