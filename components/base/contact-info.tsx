import Link from "next/link";
import globalData from "@/data/global.json";

type Props = {
  className?: string;
  showDividers?: boolean;
};

export function ContactInfo({ className, showDividers }: Props) {
  const { phone, address, email, nip, regon } = globalData.contactInfo;

  return (
    <div className={`flex flex-col ${className} [&_a]:underline`}>
      <div
        className={
          showDividers ? "border-b border-b-gray-300 pb-4 mb-4" : "pb-4"
        }
      >
        <div>
          <Link href={"tel:+48 669 998 340"}>{phone}</Link>
        </div>
        <div>
          <Link href={"mailto:ga.finanse@wp.pl"}>{email}</Link>
        </div>
      </div>

      <div
        className={
          showDividers ? "border-b border-b-gray-300 pb-4 mb-4" : "pb-4"
        }
      >
        <div>{address.street}</div>
        <div>
          {address.postalCode} {address.city}
        </div>
      </div>

      <div>
        <div>{nip}</div>
        <div>{regon}</div>
      </div>
    </div>
  );
}
