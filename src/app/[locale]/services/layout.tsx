import { createPageMetadata } from "@/lib/createPageMetadata";
import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return createPageMetadata({
    locale,
    namespace: "Pages.Services",
    path: "/services",
  });
}

export default function ServicesLayout({ children }: Props) {
  return <>{children}</>;
}
