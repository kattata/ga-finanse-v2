import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "../base/button";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <div className="container">
      <div className="relative">
        <div className="w-screen -ml-4 overflow-hidden md:h-[calc(100vh-150px)] md:w-full md:m-0">
          <Image
            src="/images/gdynia-sea-towers-min.jpg"
            alt="Gdynia Sea Towers"
            width={1200}
            height={800}
            loading="eager"
            className="object-cover"
          />
        </div>

        <div className="bg-white bottom-30 left-0 p-9 rounded-sm max-w-[900px] shadow-md absolute md:left-6 md:bottom-6">
          <h1 className="mb-2 text-3xl md:text-4xl font-extrabold md:leading-11">
            {t("Title")}
          </h1>
          <div className="text-lg mb-5">{t("Subtitle")}</div>

          <Button>{t("CTA")}</Button>
        </div>
      </div>
    </div>
  );
}
