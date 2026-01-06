// Next.js
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";

// Next-Intl
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

// Components
import { NavigationBar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

// Css
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { getTranslations } from "next-intl/server";
import { SITE_CONFIG } from "@/constants";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: "Layout.Metadata" });

  const title = t("title");
  const description = t("description");
  const keywords = t.raw("keywords") as string[];

  return {
    metadataBase: new URL(SITE_CONFIG.url),

    title: {
      default: title,
      template: `%s | ${SITE_CONFIG.siteName}`,
    },
    description,
    keywords,
    openGraph: {
      type: "website",
      siteName: SITE_CONFIG.siteName,
      title,
      description,
      url: SITE_CONFIG.url,
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: SITE_CONFIG.siteName,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${barlow.className} antialiased`}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
        >
          <NextIntlClientProvider locale={locale}>
            <NavigationBar />
            {children}
            <Footer />
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
