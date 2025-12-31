import { Pathnames } from "@/i18n/routing";

export type TranslationKey = string;

export type NavigationLink = {
  href: Pathnames;
  label: TranslationKey;
};
