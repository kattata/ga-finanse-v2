import { Button } from "@/components/base/button";
import { ImageAndText } from "@/components/base/image-and-text";
import Link from "next/link";
import { JSX } from "react";
import servicesData from "@/data/pages/uslugi.json";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = servicesData.metadata;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Services(): JSX.Element {
  const { title, subtitle, description, services, contact } = servicesData;

  return (
    <div className="container [&_h3]:text-base">
      <section className="text-center mb-10">
        <h1>
          <div>{title}</div>
          <div className="text-sm uppercase text-gray-700 mt-2">{subtitle}</div>
        </h1>
        <p className="md:max-w-2/3 mx-auto">{description}</p>
      </section>

      {services.map((service) => {
        return (
          <ServiceTile
            title={service.title}
            subtitle={service.subtitle}
            groups={service.groups}
            key={service.title}
          />
        );
      })}

      <section className="mt-15 pt-10 border-t border-t-gray-300">
        <ImageAndText
          image={{ url: "/images/gdynia-cranes-min.jpg", alt: "Gdynia Port" }}
          imagePosition="left"
        >
          <div className="mb-4">
            <h2>{contact.headline}</h2>
            <p>{contact.text}</p>
          </div>

          <Link href={contact.cta.url}>
            <Button>{contact.cta.text}</Button>
          </Link>
        </ImageAndText>
      </section>
    </div>
  );
}

interface Service {
  title: string;
  subtitle: string;
  groups: {
    headline: string;
    items: string[];
  }[];
}

function ServiceTile({ title, subtitle, groups }: Service) {
  return (
    <section className="tile mb-6">
      <div className="text-center mb-8 md:max-w-2/3 mx-auto">
        <h2>{title}</h2>
        <p className="text-gray-700">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {groups.map((group) => {
          return (
            <article key={group.headline}>
              <h3>{group.headline}</h3>

              <ul>
                {group.items.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
