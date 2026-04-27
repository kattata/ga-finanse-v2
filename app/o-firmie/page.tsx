import { JSX } from "react";
import { ImageAndText } from "@/components/base/image-and-text";
import aboutData from "@/data/pages/o-firmie.json";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = aboutData;

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

export default function About(): JSX.Element {
  const { title, sections } = aboutData;

  return (
    <div className="container [&_h3]:text-base">
      <h1 className="mb-6 text-center">{title}</h1>

      {sections.map((section, index) => {
        return (
          <div key={section.title} className="not-last-of-type:mb-20">
            <ImageAndText
              image={{
                url: "/images/gdynia-seatowers-2-min.jpg",
                alt: "Gdynia Seatowers",
              }}
              imagePosition={index % 2 ? "right" : "left"}
              loading="eager"
            >
              <>
                <h2 className="mb-2">{section.title}</h2>
                <div className="flex flex-col gap-4">
                  {section.texts.map((item) => {
                    return (
                      <div key={item.text}>
                        <h3>{item.headline}</h3>
                        <p>{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            </ImageAndText>
          </div>
        );
      })}
    </div>
  );
}
