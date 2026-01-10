// Next-Intl
import { useTranslations } from "next-intl";

// Types
import { Step as StepType } from "@/types";
import { cn } from "@/lib/utils";

type Props = {
  step: StepType;
  translationNamespace: string;
  noIndex?: boolean;
};

const Step = ({ step, translationNamespace, noIndex = false }: Props) => {
  const t = useTranslations(translationNamespace);
  return (
    <li className="py-10 px-6 lg:py-20 lg:px-10 2xl:py-25 2xl:px-12.5 text-balance space-y-7.5 border-b lg:odd:border-r nth-[-n+2]:border-t hover:border-b-app-primary hover:-translate-y-1 transition-all duration-300 group h-full">
      <div className="flex gap-4 items-end">
        {!noIndex && (
          <span className="text-app-green-80 font-semibold text-7xl xl:text-8xl">
            {step.index}
          </span>
        )}
        <h3
          className={cn(
            "transition-colors duration-300 font-medium border-b w-full",
            noIndex
              ? "text-app-green-80 group-hover:text-app-green-60 pb-5 lg:pb-10 text-2xl lg:text-3xl 2xl:text-4xl"
              : "text-app-grey-60 group-hover:text-app-green-90 text-xl lg:text-2xl 2xl:text-3xl -translate-y-1.5 pb-3.5"
          )}
        >
          {t(step.title)}
        </h3>
      </div>

      <p className="text-app-grey-60 text-sm lg:text-base 2xl:text-lg">
        {t(step.description)}
      </p>
    </li>
  );
};

export default Step;
