import { useTranslations } from "next-intl";
import Link from "next/link";
import { Logo } from "../logo";
import { useNavigation } from "@/hooks/use-navigation";

export function DesktopHeader() {
  const navigation = useNavigation();

  return (
    <header className="flex items-center justify-between gap-3 uppercase w-full container mx-auto py-5">
      <Link href={"/"}>
        <Logo />
      </Link>

      <nav className="flex gap-12 font-medium">
        {navigation.map((item) => {
          return (
            <Link key={item.url} href={item.url}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
