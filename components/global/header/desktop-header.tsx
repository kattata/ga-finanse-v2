import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export function DesktopHeader() {
  const t = useTranslations("Global.Header.Navigation");

  return (
    <header className="flex items-center justify-between gap-3 uppercase w-full container mx-auto py-5">
      <Link href={"/"}>
        <Image
          src="/icons/ga-finanse.png"
          alt="GA Finanse Logo"
          width={105}
          height={35}
          loading="eager"
        />
      </Link>

      <nav className="flex gap-12 font-medium">
        <Link href={"/"}>{t("Home")}</Link>
        <Link href={"/"}>{t("Services")}</Link>
        <Link href={"/"}>{t("About")}</Link>
        <Link href={"/"}>{t("Contact")}</Link>
      </nav>
    </header>
  );
}
