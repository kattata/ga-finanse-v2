import Image from "next/image";
import Link, { LinkProps } from "next/link";

type ArrowLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export function ArrowLink(props: ArrowLinkProps) {
  return (
    <Link {...props} className="flex gap-1 items-center">
      <div className="font-medium">{props.children}</div>

      <Image
        src={"/icons/right-arrow.svg"}
        alt="Strzalka w prawo"
        width={10}
        height={10}
      />
    </Link>
  );
}
