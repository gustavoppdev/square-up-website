import {
  adobeLogo,
  amazonLogo,
  batteryIcon,
  communicationIcon,
  crownIcon,
  medalIcon,
  paintbrushIcon,
  puzzleIcon,
  shieldIcon,
  slackLogo,
  spotifyLogo,
  zapierLogo,
  zoomLogo,
} from "@/assets";
import { NavigationLink, Partner, Quality, Service } from "@/types";

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
