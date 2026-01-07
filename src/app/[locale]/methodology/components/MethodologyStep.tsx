// Next-Intl
import { useTranslations } from "next-intl";

// Types
import { MethodologyStep as MethodologyStepType } from "@/types";

type Props = {
  step: MethodologyStepType;
};

const MethodologyStep = ({ step }: Props) => {
  const t = useTranslations("Sections.Methodology.steps");
  return (
    <li className="py-10 px-6 lg:py-20 lg:px-10 2xl:py-25 2xl:px-12.5 text-balance space-y-7.5 border-b lg:odd:border-r nth-[-n+2]:border-t hover:border-b-app-primary hover:-translate-y-1 transition-all duration-300 group">
      <div className="flex gap-4 items-end">
        <span className="text-app-green-80 font-semibold text-7xl xl:text-8xl">
          {step.index}
        </span>
        <h3 className="text-app-grey-60 group-hover:text-app-green-90 transition-colors duration-300 font-medium -translate-y-1.5 text-xl lg:text-2xl 2xl:text-3xl pb-3.5 border-b w-full">
          {t(step.title)}
        </h3>
      </div>

      <p className="text-app-grey-60 text-sm lg:text-base 2xl:text-lg">
        {t(step.description)}
      </p>
    </li>
  );
};

export default MethodologyStep;
