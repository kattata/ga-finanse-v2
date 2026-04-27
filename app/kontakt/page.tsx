import { ContactInfo } from "@/components/base/contact-info";
import { MapEmbed } from "@/components/base/map-embed";
import { Metadata } from "next";
import Image from "next/image";
import contactData from "@/data/pages/kontakt.json";
import { JSX } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = contactData;

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

export default function Contact(): JSX.Element {
  const { title, text, map } = contactData;

  return (
    <div className="container">
      <div className="relative">
        <section>
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
            <h1 className="text-2xl mb-2">{title}</h1>
            <p className="mb-9">{text}</p>
            <ContactInfo showDividers className="text-black" />
          </div>
        </section>
      </div>

      <section className="mt-15">
        <h2 className="mb-7 text-center">{map.headline}</h2>
        <MapEmbed />
      </section>
    </div>
  );
}
