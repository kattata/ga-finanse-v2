import { USP } from "@/types";

interface Props {
  usps: USP[];
}

export default function USPList({ usps }: Props) {
  return (
    <ul className="!p-0 flex justify-center gap-10 md:gap-40 flex-wrap">
      {usps.map((usp) => {
        return (
          <li className="!list-none text-center" key={usp.headline}>
            <div className="text-[40px] md:text-[54px] font-bold text-primary-navy">
              {usp.headline}
            </div>
            <div className="uppercase font-semibold">{usp.text}</div>
          </li>
        );
      })}
    </ul>
  );
}
