import { ContactForm } from "@/components/common/ContactForm";
import TitleSection from "@/components/common/TitleSection";

const Contact = () => {
  return (
    <section>
      <TitleSection
        translationNamespace="Sections.Contact"
        bgImage={4}
        withLogo
        withBtn
      />

      <div className="border-x sm:px-[50px] lg:px-[100px]">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
