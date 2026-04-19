import { Hero } from "@/components/content/hero";
import { IconTile } from "@/components/base/icon-tile";
import { ArrowLink } from "@/components/base/arrow-link";
import { ImageAndText } from "@/components/base/image-and-text";
import { CustomerSlider } from "@/components/content/customer-slider";
import USPList from "@/components/content/usps";
import { frontPageUsps } from "@/constants/usps";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />

        <div className="container">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 [&_h2]:text-h3 [&_h2]:leading-h3 [&_strong]:font-semibold">
              <IconTile
                icon={{
                  url: "/icons/interview.svg",
                  alt: "Rozmowa",
                }}
              >
                <div>
                  <h2>Doradztwo biznesowe i finansowe</h2>
                  <p className="mb-3">
                    Pomagamy dobrać najlepsze rozwiązania finansowe — zarówno
                    dla firm, jak i osób prywatnych.
                  </p>

                  <ul>
                    <li>analizy finansowe i doradztwo</li>
                    <li>przygotowanie dokumentacji i wniosków</li>
                    <li>wsparcie w podejmowaniu decyzji finansowych</li>
                  </ul>
                </div>
              </IconTile>

              <IconTile
                icon={{
                  url: "/icons/accounting.svg",
                  alt: "Pieniadze",
                }}
              >
                <div>
                  <h2>Finansowanie i kredyty</h2>

                  <p className="mb-3">
                    Pomagamy w uzyskaniu finansowania dopasowanego do Twojej
                    sytuacji — niezależnie od tego, czy prowadzisz firmę, czy
                    działasz prywatnie.
                  </p>

                  <ul>
                    <li>kredyty dla firm i klientów indywidualnych</li>
                    <li>leasing i finansowanie inwestycji</li>
                    <li>kredyty hipoteczne i konsumenckie</li>
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
                  <h2>Dotacje unijne</h2>
                  <p className="mb-3">
                    Wspieramy przedsiębiorców w skutecznym pozyskiwaniu dotacji
                    unijnych oraz innych form bezzwrotnego finansowania.
                  </p>

                  <ul>
                    <li>przygotowanie dokumentacji i wniosków</li>
                    <li>projekty inwestycyjne i B+R</li>
                    <li>zarządzanie i rozliczanie dotacji</li>
                  </ul>
                </div>
              </IconTile>
            </div>

            <div className="w-fit ml-auto mr-0 my-5">
              <ArrowLink href={"/uslugi"}>Dowiedz się więcej</ArrowLink>
            </div>
          </section>

          <section className="my-20 md:my-30">
            <USPList usps={frontPageUsps} />
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
                Posiadamy wieloletnie doświadczenie w doradztwie finansowym oraz
                pozyskiwaniu finansowania dla firm i klientów indywidualnych.
                Wspieramy w wyborze najlepszych rozwiązań kredytowych,
                inwestycyjnych oraz dotacyjnych, dbając o skuteczność i
                bezpieczeństwo całego procesu.
              </p>

              <p className="mb-2">
                Pomagamy zarówno przedsiębiorcom, jak i osobom prywatnym — od
                analizy potrzeb, przez przygotowanie dokumentacji, aż po
                uzyskanie finansowania.
              </p>

              <p>
                Realizujemy zarówno projekty oparte na finansowaniu zwrotnym
                (kredyty, leasing), jak i bezzwrotnym, w tym dotacjach unijnych
                — szczególnie przy inwestycjach rozwojowych i innowacyjnych.
              </p>
            </ImageAndText>
          </section>

          <section className="text-center mt-20">
            <h2 className="mb-5">Zaufali nam</h2>
            <CustomerSlider />
          </section>
        </div>
      </main>
    </div>
  );
}
