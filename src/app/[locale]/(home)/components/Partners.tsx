// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Constants
import { PartnersArray } from "@/constants";

const Partners = () => {
  const t = useTranslations("Sections.Partners");

  return (
    <section className="section-container relative">
      <p className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-3.5 border rounded-full text-sm font-medium bg-app-grey-10 hover:border-app-grey-35 hover:bg-app-grey-10/80 transition-all whitespace-nowrap hover:-translate-y-1 duration-300">
        {t("paragraph")}
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-x border-b">
        {PartnersArray.map((partner) => (
          <li
            key={partner.alt}
            className="
              flex items-center justify-center p-7.5 
              border-app-grey-15 
              
              /* 1. Borda padrão em todos (Direita e Baixo) */
              border-r border-b

              /* 2. Lógica para MOBILE (2 colunas) */
              /* Remove a borda direita do 2º, 4º, 6º... */
              [&:nth-child(2n)]:border-r-0
              /* Remove a borda de baixo dos últimos 2 itens */
              [&:nth-last-child(-n+2)]:border-b-0

              /* 3. Lógica para TABLET (3 colunas) */
              /* Reseta a do mobile e aplica: remove do 3º, 6º, 9º... */
              sm:[&:nth-child(2n)]:border-r
              sm:[&:nth-child(3n)]:border-r-0
              /* Remove a borda de baixo dos últimos 3 itens */
              sm:[&:nth-last-child(-n+3)]:border-b-0

              /* 4. Lógica para DESKTOP (6 colunas) */
              lg:border-none
            "
          >
            <Image
              src={partner.img}
              alt={partner.alt}
              className="p-2 object-contain"
              width={120}
              height={60}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 120px"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Partners;
