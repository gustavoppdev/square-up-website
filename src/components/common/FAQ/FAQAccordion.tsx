// Next-Intl
import { useTranslations } from "next-intl";

// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Constants & Types
import { FAQArray } from "@/constants";
import { FAQ } from "@/types";

const FAQAccordion = () => {
  const t = useTranslations("Sections.FAQ.questions");

  // Dividimos o array em dois para as colunas
  const half = Math.ceil(FAQArray.length / 2);
  const leftColumn = FAQArray.slice(0, half);
  const rightColumn = FAQArray.slice(half);

  const renderItem = (faq: FAQ, index: number) => (
    <AccordionItem
      key={faq.question}
      value={`item-${index}`}
      className="p-6 lg:px-10 2xl:px-12.5 2xl:py-7.5 border-x border-b last:border-b hover:border-b-app-primary transition-all duration-300 hover:-translate-y-1"
    >
      <AccordionTrigger className="group hover:no-underline transition-colors duration-300 items-center gap-4">
        <div className="p-0.5 rounded-md bg-linear-to-b from-[#2e2e2e] to-[#2e2e2e]/0 shrink-0">
          <div className="p-4 rounded-md bg-linear-to-b from-[#242424] to-[#242424]/0 font-semibold text-xl lg:text-2xl group-data-[state=open]:text-app-primary transition-colors duration-300">
            {faq.index}
          </div>
        </div>
        <p className="font-medium text-left w-full group-data-[state=open]:text-app-green-70 text-base lg:text-lg 2xl:text-xl transition-colors duration-300">
          {t(faq.question)}
        </p>
      </AccordionTrigger>
      <AccordionContent className="text-app-grey-90 text-sm lg:text-base 2xl:text-lg ">
        {t(faq.answer)}
      </AccordionContent>
    </AccordionItem>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
      {/* Coluna 1 */}
      <Accordion
        type="single"
        defaultValue="item-0"
        collapsible
        className="w-full"
      >
        {leftColumn.map((faq, index) => renderItem(faq, index))}
      </Accordion>

      {/* Coluna 2 */}
      <Accordion
        type="single"
        defaultValue="item-6"
        collapsible
        className="w-full hidden lg:block"
      >
        {rightColumn.map((faq, index) => renderItem(faq, index + half))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
