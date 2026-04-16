import Image from "next/image";

type IconTileProps = {
  icon: {
    url: string;
    alt: string;
  };
  children: React.ReactNode;
};

export function IconTile({ icon, children }: IconTileProps) {
  return (
    <div className="tile flex flex-col items-start gap-5">
      <Image src={icon.url} alt={`${icon.alt} icon`} width={70} height={70} />

      <div>{children}</div>
    </div>
  );
}
