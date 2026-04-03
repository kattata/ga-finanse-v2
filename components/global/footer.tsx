import { useTranslations } from "next-intl";
import { ContactInfo } from "../base/contact-info";

export function Footer() {
  const t = useTranslations("Global.Footer");

  return (
    <footer className="bg-primary-navy w-full py-10 text-white">
      <div className="container flex justify-between gap-10 flex-col-reverse md:flex-row">
        <div className="max-w-120">
          <div className="uppercase font-medium mb-2">{t("Col1.Title")}</div>
          <div className="text-sm">{t("Col1.Text")}</div>
        </div>

        <div>
          <div className="uppercase font-medium mb-2">{t("Col2.Title")}</div>
          <ContactInfo className="text-sm text-white" />
        </div>
      </div>
    </footer>
  );
}
