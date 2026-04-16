import { ContactInfo } from "@/components/base/contact-info";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { JSX } from "react";

export default function Contact(): JSX.Element {
  const t = useTranslations("Contact");

  return (
    <div className="container">
      <div className="relative">
        <div className="h-87.5 md:h-150 w-screen md:w-4/5 -ml-4 md:ml-auto overflow-hidden">
          <Image
            src="/images/gdynia-marina-3-min.jpg"
            alt="Gdynia Marina"
            width={1200}
            height={800}
            className="object-cover w-full h-full"
            loading="eager"
          />
        </div>

        <div className="tile max-w-112.5 -mt-20 relative z-10 md:absolute md:mt-0 left-0 md:top-1/2 md:-translate-y-1/2">
          <h1 className="text-2xl mb-2">{t("Title")}</h1>
          <p className="mb-9">{t("Description")}</p>
          <ContactInfo showDividers className="text-black" />
        </div>
      </div>
    </div>
  );
}
