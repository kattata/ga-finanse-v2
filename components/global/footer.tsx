import { ContactInfo } from "../base/contact-info";
import Link from "next/link";
import globalData from "@/data/global.json";

export function Footer() {
  const { footer } = globalData;

  return (
    <footer className="bg-primary-navy w-full py-10 text-white">
      <div className="container flex justify-between gap-10 flex-col-reverse md:flex-row">
        <div className="max-w-120">
          <div className="uppercase font-medium mb-2">
            {footer.columns[0].headline}
          </div>
          <div className="text-sm">{footer.columns[0].text}</div>

          <div className="mt-3">
            {footer.columns[0].links.map((link) => {
              return (
                <Link
                  key={link.text}
                  href={link.url}
                  className="text-sm underline"
                >
                  {link.text}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <div className="uppercase font-medium mb-2">
            {footer.columns[1].headline}
          </div>
          <ContactInfo className="text-sm text-white" />
        </div>
      </div>
    </footer>
  );
}
