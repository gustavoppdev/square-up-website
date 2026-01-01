import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "pt"],

  // Used when no locale matches
  defaultLocale: "pt",

  pathnames: {
    "/": {
      pt: "/",
      en: "/",
    },
    "/services": {
      pt: "/solucoes",
      en: "/services",
    },
    "/portfolio": {
      pt: "/portfolio",
      en: "/portfolio",
    },
    "/methodology": {
      pt: "/metodologia",
      en: "/methodology",
    },
    "/about": {
      pt: "/quem-somos",
      en: "/about-us",
    },
    "/careers": {
      pt: "/carreiras",
      en: "/careers",
    },
    "/contact": {
      pt: "/fale-conosco",
      en: "/contact-us",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
