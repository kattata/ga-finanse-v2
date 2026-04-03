import { useTranslations } from "next-intl";
import { JSX } from "react";

export default function About(): JSX.Element {
  const t = useTranslations("About");

  return (
    <div className="container">
      <h1>{t("Title")}</h1>
    </div>
  );
}
