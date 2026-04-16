import { useTranslations } from "next-intl";
import { JSX } from "react";
import { ImageAndText } from "@/components/base/image-and-text";

export default function About(): JSX.Element {
  const t = useTranslations("About");

  return (
    <div className="container [&_h3]:text-base">
      <h1 className="mb-6 text-center">{t("Title")}</h1>

      <div className="mb-10">
        <ImageAndText
          image={{
            url: "/images/gdynia-seatowers-2-min.jpg",
            alt: "Gdynia Seatowers",
          }}
          imagePosition="left"
          loading="eager"
        >
          <>
            <h2 className="mb-2">{t("Section1.Headline")}</h2>
            <div className="flex flex-col gap-4">
              <p>{t("Section1.Text1")}</p>
              <p>{t("Section1.Text2")}</p>
            </div>
          </>
        </ImageAndText>
      </div>

      <ImageAndText
        image={{
          url: "/images/gdynia-blyskawica-min.jpg",
          alt: "Gdynia Seatowers",
        }}
        imagePosition="right"
        loading="eager"
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
      </ImageAndText>
    </div>
  );
}
