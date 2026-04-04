import Link from "next/link";

type Props = {
  className?: string;
  showDividers?: boolean;
};

export function ContactInfo({ className, showDividers }: Props) {
  return (
    <div className={`flex flex-col ${className} [&_a]:underline`}>
      <div
        className={
          showDividers ? "border-b border-b-gray-200 pb-4 mb-4" : "pb-4"
        }
      >
        <div>
          <Link href={"tel:+48 669 998 340"}>+48 669 998 340</Link>
        </div>
        <div>
          <Link href={"mailto:ga.finanse@wp.pl"}>ga.finanse@wp.pl</Link>
        </div>
      </div>

      <div
        className={
          showDividers ? "border-b border-b-gray-200 pb-4 mb-4" : "pb-4"
        }
      >
        <div>ul. Świętojańska 59 lok. nr 4</div>
        <div>81-391 Gdynia</div>
      </div>

      <div>
        <div>NIP 5862314868</div>
        <div>REGON 366577954</div>
      </div>
    </div>
  );
}
