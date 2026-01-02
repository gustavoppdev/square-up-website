// Next.js
import Image from "next/image";

// Components
import CTAHero from "./CTAHero";
import HeroButtons from "./HeroButtons";

// Assets
import { heroAbstract } from "@/assets";

export const Hero = () => {
  return (
    <section className="section-container bg-[url('/heroBackground.png')] bg-cover bg-center border-x border-b relative">
      <div className="pt-20 pb-[205px] lg:pb-[274px] lg:pt-28 flex flex-col items-center text-center gap-10 2xl:gap-12.5">
        {/* Text Container */}
        <CTAHero />

        {/* Buttons Container */}
        <HeroButtons />
      </div>

      <div className="absolute bottom-0 left-0 w-full min-h-[calc(60dvh-108px)]">
        <Image
          src={heroAbstract}
          alt=""
          fill
          sizes="
          (max-width:640px) 100vw,
          (max-width:768px) 638px,
          (max-width:1024px) 766px,
          (max-width:1280px) 1022px,
          (max-width:1536px) 1278px,
          1534px"
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
};
