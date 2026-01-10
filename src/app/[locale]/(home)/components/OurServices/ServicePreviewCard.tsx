// Next.js & Next-Intl
import { useTranslations } from "next-intl";

// Types & Components
import { Service } from "@/types";
import PreviewCard from "@/components/common/PreviewCard";

type Props = {
  service: Service;
};

const ServicePreviewCard = ({ service }: Props) => {
  const t = useTranslations("Common.Services");
  return (
    <PreviewCard
      title={t(service.title)}
      description={t(service.description)}
      icon={service.icon}
      href={service.href}
      buttonLabel={t("learnMoreBtn")}
    />
  );
};

export default ServicePreviewCard;
