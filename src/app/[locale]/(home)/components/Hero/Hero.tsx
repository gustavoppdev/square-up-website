// Next.js
import Image from "next/image";

// Components
import CTAHero from "./CTAHero";
import HeroButtons from "./HeroButtons";

// Assets
import { heroAbstract, heroBackground } from "@/assets";

const sizes =
  "(max-width:640px) calc(100vw - 1rem), (max-width:768px) 638px, (max-width:1024px) 766px, (max-width:1280px) 1022px, (max-width:1536px) 1278px, 1534px";

export const Hero = () => {
  return (
    <section className="section-container border-x border-b relative">
      <div className="pt-20 pb-[205px] lg:pb-[274px] lg:pt-28 flex flex-col items-center text-center gap-10 2xl:gap-12.5 z-10">
        {/* Text Container */}
        <CTAHero />

        {/* Buttons Container */}
        <HeroButtons />

        <Image
          src={heroBackground}
          alt=""
          fill
          priority
          className="object-cover select-none -z-10"
          placeholder="blur"
          blurDataURL={heroBackground.blurDataURL}
          sizes={sizes}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full min-h-[calc(60dvh-108px)] z-0">
        <Image
          src={heroAbstract}
          alt=""
          fill
          priority
          className="object-cover"
          placeholder="blur"
          blurDataURL={heroAbstract.blurDataURL}
          sizes={sizes}
        />
      </div>
    </section>
  );
};
