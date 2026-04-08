import Image from "next/image";

type ImageAndTextProps = {
  children: React.ReactNode;
  image: {
    url: string;
    alt: string;
  };
  imagePosition: "left" | "right";
};

export function ImageAndText({
  children,
  image,
  imagePosition,
}: ImageAndTextProps) {
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
