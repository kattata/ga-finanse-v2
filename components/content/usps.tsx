import { USP } from "@/types";

interface Props {
  usps: USP[];
}

export default function USPList({ usps }: Props) {
  return (
    <div className="md:border-y md:border-y-gray-300 md:py-20">
      <ul className="!p-0 flex justify-center gap-10 md:gap-x-30 md:gap-y-20 flex-wrap">
        {usps.map((usp) => {
          return (
            <li
              className="!list-none text-center items-center flex flex-col gap-3"
              key={usp.headline}
            >
              <div
                className={`font-bold text-primary-navy leading-12 md:leading-15
                    ${
                      usp.variant === "small"
                        ? " text-[30px] md:text-[40px]"
                        : " text-[40px] md:text-[54px] "
                    }`}
              >
                {usp.headline}
              </div>
              <div className="font-semibold max-w-3/4 uppercase">
                {usp.text}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
