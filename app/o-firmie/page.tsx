import { useTranslations } from "next-intl";
import { JSX } from "react";
import Image from "next/image";

export default function About(): JSX.Element {
  const t = useTranslations("About");

  return (
    <div className="container">
      <h1 className="mb-6 text-center">{t("Title")}</h1>

      <div className="mb-10">
        <AboutImageSection
          image={{
            url: "/images/gdynia-seatowers-2-min.jpg",
            alt: "Gdynia Seatowers",
          }}
          imagePosition="left"
        >
          <>
            <h2 className="mb-2">{t("Section1.Headline")}</h2>
            <div className="flex flex-col gap-4">
              <p>{t("Section1.Text1")}</p>
              <p>{t("Section1.Text2")}</p>
            </div>
          </>
        </AboutImageSection>
      </div>

      <AboutImageSection
        image={{
          url: "/images/gdynia-blyskawica-min.jpg",
          alt: "Gdynia Seatowers",
        }}
        imagePosition="right"
      >
        <>
          <h2 className="mb-2">{t("Section2.Headline")}</h2>

          <div className="flex flex-col gap-4">
            <div>
              <h3>{t("Section2.SubSection1.Headline")}</h3>
              <p>{t("Section2.SubSection1.Text")}</p>
            </div>

            <div>
              <h3>{t("Section2.SubSection2.Headline")}</h3>
              <p>{t("Section2.SubSection2.Text")}</p>
            </div>

            <div>
              <h3>{t("Section2.SubSection3.Headline")}</h3>
              <p>{t("Section2.SubSection3.Text")}</p>
            </div>
          </div>
        </>
      </AboutImageSection>
    </div>
  );
}

type AboutImageSectionProps = {
  children: React.ReactNode;
  image: {
    url: string;
    alt: string;
  };
  imagePosition: "left" | "right";
};

function AboutImageSection({
  children,
  image,
  imagePosition,
}: AboutImageSectionProps) {
  return (
    <section className="relative">
      <div
        className={`h-[300px] md:h-[600px] w-screen -ml-4 md:w-4/5 ${imagePosition === "right" ? "md:ml-auto" : ""}`}
      >
        <Image
          src={image.url}
          alt={image.alt}
          width={1200}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className={`tile md:absolute max-w-[500px] md:top-6 -mt-30 md:mt-0 relative z-10 ${
          imagePosition === "right" ? "md:left-6" : "md:right-6"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
