import { CONTACT_OPTIONS } from "@/constants";
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
  groups: ServiceGroup[];
};

export type Quality = {
  title: TranslationKey;
  description: TranslationKey;
  icon: StaticImageData;
};

export type Testimonial = {
  title: TranslationKey;
  quote: TranslationKey;
  author: TranslationKey;
  position: TranslationKey;
  img: StaticImageData;
};

export type FAQ = {
  question: TranslationKey;
  answer: TranslationKey;
  index: string;
};

export type ContactReason = (typeof CONTACT_OPTIONS)[number];

export type ReasonContactOption = {
  label: TranslationKey;
  value: ContactReason;
};

export type SocialMediaLink = {
  href: string;
  icon: StaticImageData;
  alt: string;
};

export type SocialContactLink = {
  href: string;
  description: TranslationKey;
  icon: StaticImageData;
};

export type SiteConfig = {
  url: string;
  siteName: string;
};

export type Work = {
  title: TranslationKey;
  nameOfProject: TranslationKey;
  link: string;
  img: StaticImageData;
  description: TranslationKey;
};

export type Step = {
  index: string;
  title: TranslationKey;
  description: TranslationKey;
};
