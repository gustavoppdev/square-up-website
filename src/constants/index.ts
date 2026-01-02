import {
  adobeLogo,
  amazonLogo,
  batteryIcon,
  paintbrushIcon,
  puzzleIcon,
  slackLogo,
  spotifyLogo,
  zapierLogo,
  zoomLogo,
} from "@/assets";
import { NavigationLink, Partner, Service } from "@/types";

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
