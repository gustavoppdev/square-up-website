import {
  adobeLogo,
  amazonLogo,
  batteryIcon,
  communicationIcon,
  crownIcon,
  emilyPicture,
  johnPicture,
  lauraPicture,
  markPicture,
  medalIcon,
  michaelPicture,
  paintbrushIcon,
  puzzleIcon,
  sarahPicture,
  shieldIcon,
  slackLogo,
  spotifyLogo,
  zapierLogo,
  zoomLogo,
} from "@/assets";
import {
  FAQ,
  NavigationLink,
  Partner,
  Quality,
  Service,
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
        subtitle: "",
        inclusions: [],
      },
      {
        subtitle: "",
        inclusions: [],
      },
      {
        subtitle: "",
        inclusions: [],
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
        subtitle: "",
        inclusions: [],
      },
      {
        subtitle: "",
        inclusions: [],
      },
      {
        subtitle: "",
        inclusions: [],
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
        subtitle: "",
        inclusions: [],
      },
      {
        subtitle: "",
        inclusions: [],
      },
      {
        subtitle: "",
        inclusions: [],
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
