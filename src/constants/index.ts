import {
  adobeLogo,
  amazonLogo,
  batteryIcon,
  communicationIcon,
  crownIcon,
  design01_1,
  design01_2,
  design01_3,
  design01_4,
  design02_1,
  design02_2,
  design02_3,
  design02_4,
  design03_1,
  design03_2,
  design03_3,
  design03_4,
  emilyPicture,
  engineering01_1,
  engineering01_2,
  engineering01_3,
  engineering01_4,
  engineering02_1,
  engineering02_2,
  engineering02_3,
  engineering02_4,
  engineering03_1,
  engineering03_2,
  engineering03_3,
  engineering03_4,
  facebookIcon,
  johnPicture,
  lauraPicture,
  linkedinIcon,
  mailIcon,
  management01_1,
  management01_2,
  management01_3,
  management01_4,
  management02_1,
  management02_2,
  management02_3,
  management02_4,
  management03_1,
  management03_2,
  management03_3,
  management03_4,
  markPicture,
  medalIcon,
  michaelPicture,
  paintbrushIcon,
  phoneIcon,
  pinIcon,
  puzzleIcon,
  sarahPicture,
  shieldIcon,
  slackLogo,
  spotifyLogo,
  twitterIcon,
  zapierLogo,
  zoomLogo,
} from "@/assets";
import {
  FAQ,
  NavigationLink,
  Partner,
  Quality,
  ReasonContactOption,
  Service,
  SiteConfig,
  SocialContactLink,
  SocialMediaLink,
  Testimonial,
} from "@/types";

export const NavigationBarLinks: NavigationLink[] = [
  {
    href: "/",
    label: "Links.home",
  },
  {
    href: "/services",
    label: "Links.services",
  },
  {
    href: "/portfolio",
    label: "Links.portfolio",
  },
  {
    href: "/methodology",
    label: "Links.methodology",
  },
  {
    href: "/about",
    label: "Links.about",
  },
  {
    href: "/careers",
    label: "Links.careers",
  },
];

export const PartnersArray: Partner[] = [
  {
    img: zapierLogo,
    alt: "Zapier",
  },
  {
    img: spotifyLogo,
    alt: "Spotify",
  },
  {
    img: zoomLogo,
    alt: "Zoom",
  },
  {
    img: slackLogo,
    alt: "Slack",
  },
  {
    img: amazonLogo,
    alt: "Amazon",
  },
  {
    img: adobeLogo,
    alt: "Adobe",
  },
];

export const ServicesArray: Service[] = [
  {
    title: "design.title",
    description: "design.description",
    icon: paintbrushIcon,
    href: "/services",
    groups: [
      {
        subtitle: "design.groups.01.subtitle",
        inclusions: [
          {
            title: "design.groups.01.inclusions.01.title",
            icon: design01_1,
          },
          {
            title: "design.groups.01.inclusions.02.title",
            icon: design01_2,
          },
          {
            title: "design.groups.01.inclusions.03.title",
            icon: design01_3,
          },
          {
            title: "design.groups.01.inclusions.04.title",
            icon: design01_4,
          },
        ],
      },
      {
        subtitle: "design.groups.02.subtitle",
        inclusions: [
          {
            title: "design.groups.02.inclusions.01.title",
            icon: design02_1,
          },
          {
            title: "design.groups.02.inclusions.02.title",
            icon: design02_2,
          },
          {
            title: "design.groups.02.inclusions.03.title",
            icon: design02_3,
          },
          {
            title: "design.groups.02.inclusions.04.title",
            icon: design02_4,
          },
        ],
      },
      {
        subtitle: "design.groups.03.subtitle",
        inclusions: [
          {
            title: "design.groups.03.inclusions.01.title",
            icon: design03_1,
          },
          {
            title: "design.groups.03.inclusions.02.title",
            icon: design03_2,
          },
          {
            title: "design.groups.03.inclusions.03.title",
            icon: design03_3,
          },
          {
            title: "design.groups.03.inclusions.04.title",
            icon: design03_4,
          },
        ],
      },
    ],
  },
  {
    title: "engineering.title",
    description: "engineering.description",
    icon: puzzleIcon,
    href: "/services",
    groups: [
      {
        subtitle: "engineering.groups.01.subtitle",
        inclusions: [
          {
            title: "engineering.groups.01.inclusions.01.title",
            icon: engineering01_1,
          },
          {
            title: "engineering.groups.01.inclusions.02.title",
            icon: engineering01_2,
          },
          {
            title: "engineering.groups.01.inclusions.03.title",
            icon: engineering01_3,
          },
          {
            title: "engineering.groups.01.inclusions.04.title",
            icon: engineering01_4,
          },
        ],
      },
      {
        subtitle: "engineering.groups.02.subtitle",
        inclusions: [
          {
            title: "engineering.groups.02.inclusions.01.title",
            icon: engineering02_1,
          },
          {
            title: "engineering.groups.02.inclusions.02.title",
            icon: engineering02_2,
          },
          {
            title: "engineering.groups.02.inclusions.03.title",
            icon: engineering02_3,
          },
          {
            title: "engineering.groups.02.inclusions.04.title",
            icon: engineering02_4,
          },
        ],
      },
      {
        subtitle: "engineering.groups.03.subtitle",
        inclusions: [
          {
            title: "engineering.groups.03.inclusions.01.title",
            icon: engineering03_1,
          },
          {
            title: "engineering.groups.03.inclusions.02.title",
            icon: engineering03_2,
          },
          {
            title: "engineering.groups.03.inclusions.03.title",
            icon: engineering03_3,
          },
          {
            title: "engineering.groups.03.inclusions.04.title",
            icon: engineering03_4,
          },
        ],
      },
    ],
  },
  {
    title: "projectManagement.title",
    description: "projectManagement.description",
    icon: batteryIcon,
    href: "/services",
    groups: [
      {
        subtitle: "projectManagement.groups.01.subtitle",
        inclusions: [
          {
            title: "projectManagement.groups.01.inclusions.01.title",
            icon: management01_1,
          },
          {
            title: "projectManagement.groups.01.inclusions.02.title",
            icon: management01_2,
          },
          {
            title: "projectManagement.groups.01.inclusions.03.title",
            icon: management01_3,
          },
          {
            title: "projectManagement.groups.01.inclusions.04.title",
            icon: management01_4,
          },
        ],
      },
      {
        subtitle: "projectManagement.groups.02.subtitle",
        inclusions: [
          {
            title: "projectManagement.groups.02.inclusions.01.title",
            icon: management02_1,
          },
          {
            title: "projectManagement.groups.02.inclusions.02.title",
            icon: management02_2,
          },
          {
            title: "projectManagement.groups.02.inclusions.03.title",
            icon: management02_3,
          },
          {
            title: "projectManagement.groups.02.inclusions.04.title",
            icon: management02_4,
          },
        ],
      },
      {
        subtitle: "projectManagement.groups.03.subtitle",
        inclusions: [
          {
            title: "projectManagement.groups.03.inclusions.01.title",
            icon: management03_1,
          },
          {
            title: "projectManagement.groups.03.inclusions.02.title",
            icon: management03_2,
          },
          {
            title: "projectManagement.groups.03.inclusions.03.title",
            icon: management03_3,
          },
          {
            title: "projectManagement.groups.03.inclusions.04.title",
            icon: management03_4,
          },
        ],
      },
    ],
  },
];

export const QualitiesArray: Quality[] = [
  {
    title: "01.title",
    description: "01.description",
    icon: medalIcon,
  },
  {
    title: "02.title",
    description: "02.description",
    icon: communicationIcon,
  },
  {
    title: "03.title",
    description: "03.description",
    icon: shieldIcon,
  },
  {
    title: "04.title",
    description: "04.description",
    icon: crownIcon,
  },
];

export const TestimonialsArray: Testimonial[] = [
  {
    title: "depoiments.01.title",
    quote: "depoiments.01.quote",
    author: "depoiments.01.author",
    position: "depoiments.01.position",
    img: johnPicture,
  },
  {
    title: "depoiments.02.title",
    quote: "depoiments.02.quote",
    author: "depoiments.02.author",
    position: "depoiments.02.position",
    img: sarahPicture,
  },
  {
    title: "depoiments.03.title",
    quote: "depoiments.03.quote",
    author: "depoiments.03.author",
    position: "depoiments.03.position",
    img: markPicture,
  },
  {
    title: "depoiments.04.title",
    quote: "depoiments.04.quote",
    author: "depoiments.04.author",
    position: "depoiments.04.position",
    img: lauraPicture,
  },
  {
    title: "depoiments.05.title",
    quote: "depoiments.05.quote",
    author: "depoiments.05.author",
    position: "depoiments.05.position",
    img: michaelPicture,
  },
  {
    title: "depoiments.06.title",
    quote: "depoiments.06.quote",
    author: "depoiments.06.author",
    position: "depoiments.06.position",
    img: emilyPicture,
  },
];

export const FAQArray: FAQ[] = [
  {
    question: "01.question",
    answer: "01.answer",
    index: "01",
  },
  {
    question: "02.question",
    answer: "02.answer",
    index: "02",
  },
  {
    question: "03.question",
    answer: "03.answer",
    index: "03",
  },
  {
    question: "04.question",
    answer: "04.answer",
    index: "04",
  },
  {
    question: "05.question",
    answer: "05.answer",
    index: "05",
  },
  {
    question: "06.question",
    answer: "06.answer",
    index: "06",
  },
  {
    question: "07.question",
    answer: "07.answer",
    index: "07",
  },
  {
    question: "08.question",
    answer: "08.answer",
    index: "08",
  },
];

export const CONTACT_OPTIONS = [
  "Web Design",
  "Mobile App Design",
  "Collaboration",
  "Others",
] as const;

export const ReasonContactOptions: ReasonContactOption[] = [
  {
    label: "webDesign", // Chave de tradução
    value: "Web Design",
  },
  {
    label: "mobileApp",
    value: "Mobile App Design",
  },
  {
    label: "collaboration",
    value: "Collaboration",
  },
  {
    label: "others",
    value: "Others",
  },
];

export const SocialMediaLinks: SocialMediaLink[] = [
  {
    href: "#",
    alt: "Facebook",
    icon: facebookIcon,
  },
  {
    href: "#",
    alt: "Twitter",
    icon: twitterIcon,
  },
  {
    href: "#",
    alt: "LinkedIn",
    icon: linkedinIcon,
  },
];

export const SocialContactLinks: SocialContactLink[] = [
  {
    href: "#",
    description: "email",
    icon: mailIcon,
  },
  {
    href: "#",
    description: "phone",
    icon: phoneIcon,
  },
  {
    href: "#",
    description: "localization",
    icon: pinIcon,
  },
];

export const SITE_CONFIG: SiteConfig = {
  url: "https://squareup.vercel.app",
  siteName: "SquareUp",
};
