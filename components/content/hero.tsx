import Image from "next/image";
import { Button } from "../base/button";
import Link from "next/link";
import homeData from "@/data/pages/home.json";

export function Hero() {
  const { hero } = homeData;

  return (
    <div className="container">
      <div className="relative">
        <div className="w-screen -ml-4 overflow-hidden md:h-[calc(100vh-300px)] md:w-full md:m-0">
          <Image
            src="/images/gdynia-sea-towers-min.jpg"
            alt="Gdynia Sea Towers"
            width={1200}
            height={800}
            loading="eager"
            className="object-cover"
          />
        </div>

        <div className="bg-white bottom-30 left-0 p-9 rounded-sm max-w-[900px] shadow-md absolute md:left-6 md:bottom-6">
          <h1 className="mb-2 text-3xl md:text-4xl font-extrabold md:leading-11">
            {hero.headline}
          </h1>
          <div className="text-lg mb-5">{hero.text}</div>

          <Link href={hero.cta.url}>
            <Button>{hero.cta.text}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
