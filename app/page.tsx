import { Hero } from "@/components/content/hero";
import { IconTile } from "@/components/base/icon-tile";
import Link from "next/link";
import { ArrowLink } from "@/components/base/arrow-link";
import { ImageAndText } from "@/components/base/image-and-text";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />

        <div className="container">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9 [&_h2]:text-h3 [&_h2]:leading-h3 [&_strong]:font-semibold">
              <IconTile
                icon={{
                  url: "/icons/interview.svg",
                  alt: "Rozmowa",
                }}
              >
                <div>
                  <h2>Doradztwo biznesowe i finansowanie zwrotne</h2>
                  <p>
                    Analizy finansowe, biznesplany, wnioski kredytowe,
                    finansowanie aktywów obrotowych i zadań inwestycyjnych
                  </p>
                </div>
              </IconTile>

              <IconTile
                icon={{
                  url: "/icons/accounting.svg",
                  alt: "Pieniadze",
                }}
              >
                <div>
                  <h2>Dotacje UE</h2>
                  <ul>
                    <li>
                      <strong>
                        Pozyskiwanie bezzwrotnego wsparcia finansowego
                      </strong>
                    </li>
                    <li className="mb-1">
                      Projekty inwestycyjne, badawczo-rozwojowe, targowe i inne
                    </li>
                    <li>
                      <strong>
                        Skuteczne rozliczanie pozyskanych środków pomocowych
                      </strong>
                    </li>
                    <li>
                      Wnioski o płatność, procedury wyboru dostawców, wzory
                      dokumentów, etc.
                    </li>
                  </ul>
                </div>
              </IconTile>

              <IconTile
                icon={{
                  url: "/icons/leasing1.svg",
                  alt: "Wymiana",
                }}
              >
                <div>
                  <h2>Usługi komplementarne</h2>
                  <p>
                    Współpraca z jednostkami naukowo-badawczymi, procedury
                    patentowania, tłumaczenia, pozyskiwanie partnerów
                    biznesowych do realizacji projektów, etc.
                  </p>
                </div>
              </IconTile>
            </div>

            <div className="w-fit ml-auto mr-0 my-5">
              <ArrowLink href={"/uslugi"}>Dowiedz sie wiecej</ArrowLink>
            </div>
          </section>

          <section className="mt-9">
            <ImageAndText
              image={{
                url: "/images/gdynia-harbour-min.jpg",
                alt: "Gdynia Port",
              }}
              imagePosition="right"
            >
              <h2>O firmie</h2>
              <p className="mb-2">
                Dysponujemy wieloletnim doświadczeniem w pozyskiwaniu
                finansowania ze środków unijnych, popartym licznymi sukcesami,
                które potwierdzają znaczące wolumeny pozyskanych środków oraz
                wysoka skuteczność procentowa.
              </p>
              <p>
                Specjalizujemy się w projektach współfinansowanych ze środków
                unijnych, dedykowanych do szerokiego spektrum odbiorców: zarówno
                przedsiębiorców indywidualnych, jak i konsorcjów, zawiązanych
                przy udziale jednostek naukowych oraz instytutów badawczych.
              </p>
            </ImageAndText>
          </section>
        </div>
      </main>
    </div>
  );
}
