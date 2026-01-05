// Componentes
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="section-container py-7.5 lg:py-10 2xl:py-12.5 flex flex-col gap-7.5 xl:gap-10">
        {/* Top */}
        <FooterTop />

        <span className="hidden xl:block w-full h-px border-b"></span>

        {/* Bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
};
