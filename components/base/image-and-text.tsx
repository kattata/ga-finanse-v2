import Image from "next/image";

type ImageAndTextProps = {
  children: React.ReactNode;
  image: {
    url: string;
    alt: string;
  };
  loading?: "eager" | "lazy";
  imagePosition: "left" | "right";
};

export function ImageAndText({
  children,
  image,
  imagePosition,
  loading,
}: ImageAndTextProps) {
  return (
    <section className="relative">
      <div
        className={`h-[300px] md:h-[600px] w-screen -ml-4 md:w-4/5 ${imagePosition === "right" ? "md:ml-auto" : "md:ml-0"}`}
      >
        <Image
          src={image.url}
          alt={image.alt}
          width={1200}
          height={600}
          loading={loading}
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
