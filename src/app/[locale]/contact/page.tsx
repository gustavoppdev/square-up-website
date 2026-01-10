// Next-Intl
import { useTranslations } from "next-intl";

// Components
import { ContactForm } from "@/components/common/ContactForm";
import { ContactLinks } from "@/components/common/ContactLinks";
import { FAQ } from "@/components/common/FAQ";
import { StayConnectedWidget } from "@/components/common/StayConnectedWidget";
import TitleSection from "@/components/common/TitleSection";
import AboutCTA from "../about/components/AboutCTA";

const ContactPage = () => {
  const t = useTranslations("Layout.Footer");

  return (
    <main className="section-container">
      <TitleSection
        translationNamespace="Pages.Contact.titleSection"
        bgImage={3}
        priority={true}
      />

      <section>
        <div className="border-x border-b py-7.5 px-6 lg:py-10 2xl:py-12.5">
          <ContactLinks variant="card" />
        </div>
        <div className="border-x sm:px-[50px] lg:px-[100px]">
          <ContactForm />
        </div>

        {/*  */}
        <div className="border-x border-t grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:border-r p-5 text-balance flex flex-wrap items-center justify-center text-center gap-3 border-b py-7.5 px-6 lg:py-10 2xl:py-12.5 font-medium text-app-grey-90">
            {t.rich("operatingDays", {
              badge: (chunks) => (
                <span className="bg-app-grey-15 px-5 py-2.5 rounded">
                  {chunks}
                </span>
              ),
            })}
          </div>

          <div className="py-7.5 px-6 lg:py-10 2xl:py-12.5">
            <StayConnectedWidget className="lg:mx-auto border-0 xl:border" />
          </div>
        </div>
      </section>

      <FAQ container={false} />

      <AboutCTA />
    </main>
  );
};

export default ContactPage;
