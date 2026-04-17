import { Button } from "@/components/base/button";
import { ImageAndText } from "@/components/base/image-and-text";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { JSX } from "react";

export default function Services(): JSX.Element {
  const t = useTranslations("Services");

  return (
    <div className="container [&_h3]:text-base">
      <section className="text-center mb-10">
        <h1>
          <div>{t("Title")}</div>
          <div className="text-sm uppercase text-gray-700 mt-2">
            {t("Subtitle")}
          </div>
        </h1>
        <p className="md:max-w-2/3 mx-auto">
          Wspieramy przedsiębiorców w pozyskiwaniu finansowania, dotacji
          unijnych oraz w skutecznym rozwoju biznesu. Zapewniamy kompleksową
          obsługę – od analizy po rozliczenie projektu.
        </p>
      </section>

      <section className="tile mb-6">
        <div className="text-center mb-8 md:max-w-2/3 mx-auto">
          <h2>Doradztwo biznesowe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <article>
            <h3>Pozyskiwanie finansowania</h3>
            <ul>
              <li>analiza potrzeb i dobór źródeł finansowania</li>
              <li>opracowanie analiz finansowych</li>
              <li>
                przygotowanie dokumentacji (biznesplany, studia wykonalności)
              </li>
            </ul>
          </article>

          <article>
            <h3>Finansowanie dla firm i klientów indywidualnych</h3>
            <ul>
              <li>kredyty inwestycyjne i obrotowe</li>
              <li>leasing i faktoring</li>
              <li>kredyty hipoteczne</li>
              <li>finansowanie zakupów i dostaw</li>
              <li>kredyty dla klientów indywidualnych</li>
            </ul>
          </article>

          <article>
            <h3>Usługi dodatkowe</h3>
            <ul>
              <li>współpraca z jednostkami naukowymi i laboratoriami</li>
              <li>doradztwo w zakresie własności intelektualnej</li>
              <li>pozyskiwanie partnerów do projektów</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="tile mb-6">
        <div className="text-center mb-8 md:max-w-2/3 mx-auto">
          <h2>Dotacje unijne i wsparcie bezzwrotne</h2>
          <p className="text-gray-700">
            Pomagamy w pozyskiwaniu i rozliczaniu dotacji unijnych oraz innych
            form wsparcia publicznego.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <article>
            <h3>Zakres usług</h3>
            <ul>
              <li>doradztwo projektowe</li>
              <li>przygotowanie wniosków i dokumentacji</li>
              <li>zarządzanie projektem</li>
              <li>rozliczanie dotacji</li>
            </ul>
          </article>

          <article>
            <h3>Specjalizacje</h3>
            <ul>
              <li>projekty inwestycyjne</li>
              <li>badania i rozwój (B+R)</li>
              <li>eksport i targi</li>
              <li>ochrona środowiska i OZE</li>
              <li>cyfryzacja i IT</li>
              <li>projekty międzynarodowe</li>
            </ul>
          </article>

          <article>
            <h3>Dla kogo</h3>
            <ul>
              <li>małe i średnie przedsiębiorstwa (MŚP)</li>
              <li>duże firmy</li>
              <li>konsorcja</li>
              <li>instytuty badawcze</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="tile mb-6">
        <div className="text-center mb-8 md:max-w-2/3 mx-auto">
          <h2>Rozliczanie dotacji i projektów</h2>
          <p className="text-gray-700">
            Zapewniamy pełne wsparcie w rozliczaniu projektów finansowanych ze
            środków publicznych – od podpisania umowy po końcowe rozliczenie.
          </p>
        </div>

        <article>
          <h3>Oferujemy:</h3>
          <ul>
            <li>przygotowanie dokumentów do umowy</li>
            <li>wnioski o płatności (częściowe i końcowe)</li>
            <li>kontrola poprawności wydatków</li>
            <li>doradztwo księgowe w projektach</li>
            <li>procedury wyboru dostawców (zasada konkurencyjności)</li>
          </ul>
        </article>
      </section>

      <section className="mt-15 pt-10 border-t border-t-gray-300">
        <ImageAndText
          image={{ url: "/images/gdynia-cranes-min.jpg", alt: "Gdynia Port" }}
          imagePosition="left"
        >
          <div className="mb-4">
            <h2>Sprawdź swoje możliwości finansowania</h2>
            <p>
              Chcesz wiedzieć, z jakiego wsparcia możesz skorzystać? Pomożemy
              dobrać najlepsze rozwiązanie dla Ciebie lub Twojej firmy.
            </p>
          </div>

          <Link href={"/kontakt"}>
            <Button>Skontaktuj się z nami</Button>
          </Link>
        </ImageAndText>
      </section>
    </div>
  );
}
