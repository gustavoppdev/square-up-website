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
    namespace: "Pages.Careers",
    path: "/careers",
  });
}

export default function CareersLayout({ children }: Props) {
  return <>{children}</>;
}
