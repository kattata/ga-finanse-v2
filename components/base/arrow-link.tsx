import Link, { LinkProps } from "next/link";
import { ArrowIcon } from "../icons/arrow-icon";

type ArrowLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export function ArrowLink(props: ArrowLinkProps) {
  return (
    <Link {...props} className="flex gap-1 items-center text-primary-navy">
      <div className="font-medium">{props.children}</div>

      <ArrowIcon className="fill-primary-navy w-4.5 h-4.5" />
    </Link>
  );
}
