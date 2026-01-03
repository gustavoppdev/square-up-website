import { Button } from "@/components/ui/button";
import { Testimonial } from "@/types";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Props = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: Props) => {
  const t = useTranslations("Sections.Testimonials");

  return (
    <li className="py-10 lg:py-20 2xl:py-25 px-6 lg:px-15 2xl:px-20 flex flex-col gap-y-6 lg:gap-y-7.5 h-full border-x border-b lg:odd:border-r-0 hover:border-b-app-primary/50 transition-colors duration-300 group">
      {/* Header */}
      <div className="space-y-5 2xl:space-y-6 flex-1 group-hover:-translate-y-1 transition-transform duration-300">
        <h3 className="font-medium text-app-green-80 text-lg lg:text-xl 2xl:text-2xl">
          {t(testimonial.title)}
        </h3>
        <p className="text-app-grey-90 text-sm lg:text-base 2xl:text-lg">
          {t(testimonial.quote)}
        </p>
      </div>

      {/* Bottom */}
      <div className="bg-[#242424]/20 border p-3.5 2xl:p-5 flex items-center justify-between rounded-lg hover:bg-[#242424]/40 transition-all duration-300 group-hover:-translate-y-1 cursor-pointer">
        <div className="flex gap-2.5 lg:gap-4.5">
          <Image
            src={testimonial.img}
            alt={t(testimonial.author)}
            width={60}
            height={60}
            sizes="(max-width: 1024px) 40px, 50px"
            className="size-10 lg:size-12.5"
          />

          <div>
            <h4 className="font-medium 2xl:text-lg">{t(testimonial.author)}</h4>
            <p className="text-app-grey-90 text-sm 2xl:text-base">
              {t(testimonial.position)}
            </p>
          </div>
        </div>

        <Button
          variant={"secondary"}
          size={"lg"}
          className="hidden lg:flex h-fit"
        >
          {t("openWebsiteBtn")}
        </Button>
      </div>
    </li>
  );
};

export default TestimonialCard;
