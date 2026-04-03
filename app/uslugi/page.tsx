import { useTranslations } from "next-intl";
import { JSX } from "react";

export default function Services(): JSX.Element {
  const t = useTranslations("Services");

  return (
    <div className="container">
      <h1>{t("Title")}</h1>

      <h2>Doradztwo biznesowe i finansowe</h2>

      <h2>Pozyskiwanie finansowania dla firm i klientów indywidualnych</h2>

      <h2>Usługi doradcze i wsparcie biznesowe</h2>

      <h2>Pozyskiwanie dotacji unijnych dla firm</h2>

      <h2>Rozliczanie dotacji i projektów unijnych</h2>
    </div>
  );
}
