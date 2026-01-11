import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("Others.Loading");
  return (
    <div
      role="alert"
      aria-busy="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-app-grey-10/50 backdrop-blur-sm h-screen w-screen"
    >
      <Loader2 className="h-10 w-10 animate-spin text-app-primary" />
      <span className="sr-only">{t("title")}</span>
    </div>
  );
}
