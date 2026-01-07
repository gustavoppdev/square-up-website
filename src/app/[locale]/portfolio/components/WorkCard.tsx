// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

// Components
import { Button } from "@/components/ui/button";

// Types & Icons
import { Work } from "@/types";
import { ArrowRight } from "lucide-react";

type Props = {
  work: Work;
};

const WorkCard = ({ work }: Props) => {
  const t = useTranslations("Common.Works");
  return (
    <li className="odd:border-r flex flex-col h-full pb-10 lg:pb-20 border-b hover:border-b-app-primary hover:-translate-y-1 transition-all duration-300 group">
      <h4 className="font-medium text-app-grey-60 text-xl 2xl:text-2xl first:border-t border-b py-5 px-6 lg:py-6 lg:px-10 2xl:py-7.5 2xl:px-12.5 mb-5 lg:mb-7.5 group-hover:border-b-app-primary transition-colors duration-300 group-hover:text-app-green-70">
        {t(work.title)}
      </h4>

      <div className="px-6 lg:px-10 flex flex-col gap-y-5 lg:gap-y-6 2xl:gap-y-7.5">
        <Image
          src={work.img}
          alt={t(work.nameOfProject)}
          placeholder="blur"
          sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 768px) 557px, (max-width: 1024px) 637px, (max-width: 1280px) 391px, (max-width: 1536px) 479px, 607px"
          blurDataURL={work.img.blurDataURL}
          className="aspect-698/423 object-cover"
        />
        {/* Title, Link */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2.5">
            <h5 className="font-medium text-app-grey-90 text-lg 2xl:text-2xl">
              {t(work.nameOfProject)}
            </h5>
            <Link
              href={"#"}
              className="py-2 px-2.5 lg:px-3 2xl:py-2.5 2xl:px-4 bg-app-grey-15 rounded-lg text-app-grey-60 text-sm lg:text-base 2xl:text-xl group-hover:text-white group-hover:bg-app-grey-20 transition-colors duration-300 hover:underline"
            >
              {work.link}
            </Link>
          </div>

          <Button size={"icon-lg"} variant={"secondary"}>
            <ArrowRight className="size-6 text-app-primary -rotate-45" />
          </Button>
        </div>

        {/* Description */}
        <p className="text-app-grey-60 font-sm lg:text-base 2xl:text-lg">
          {t(work.description)}
        </p>
      </div>
    </li>
  );
};

export default WorkCard;
