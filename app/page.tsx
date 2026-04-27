import { Hero } from "@/components/content/hero";
import { IconTile } from "@/components/base/icon-tile";
import { ArrowLink } from "@/components/base/arrow-link";
import { ImageAndText } from "@/components/base/image-and-text";
import { CustomerSlider } from "@/components/content/customer-slider";
import USPList from "@/components/content/usps";
import homeData from "@/data/pages/home.json";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = homeData;

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Home() {
  const { tiles, usps, about, customers } = homeData;

  return (
    <div>
      <main>
        <Hero />

        <div className="container">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 [&_h2]:text-h3 [&_h2]:leading-h3 [&_strong]:font-semibold">
              {tiles.items.map((tile) => {
                return (
                  <IconTile
                    key={tile.headline}
                    icon={{
                      url: tile.icon.url,
                      alt: tile.icon.alt,
                    }}
                  >
                    <div>
                      <h2>{tile.headline}</h2>
                      <p className="mb-3">{tile.text}</p>

                      <ul>
                        {tile.items.map((item) => {
                          return <li key={item}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </IconTile>
                );
              })}
            </div>

            <div className="w-fit ml-auto mr-0 my-5">
              <ArrowLink href={tiles.cta.url}>{tiles.cta.text}</ArrowLink>
            </div>
          </section>

          <section className="my-20 md:my-30">
            <USPList usps={usps} />
          </section>

          <section className="mt-9">
            <ImageAndText
              image={{
                url: "/images/gdynia-harbour-min.jpg",
                alt: "Gdynia Port",
              }}
              imagePosition="right"
            >
              <h2 className="mb-2">{about.headline}</h2>

              {about.texts.map((text) => {
                return (
                  <p className="mb-2" key={text}>
                    {text}
                  </p>
                );
              })}

              <div className="mt-4">
                <ArrowLink href={about.cta.url}>{about.cta.text}</ArrowLink>
              </div>
            </ImageAndText>
          </section>

          <section className="text-center mt-20">
            <h2 className="mb-5">{customers.headline}</h2>
            <CustomerSlider />
          </section>
        </div>
      </main>
    </div>
  );
}
