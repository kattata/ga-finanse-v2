import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between gap-3 uppercase w-full container mx-auto py-5">
      <Link href={"/"}>
        <Image
          src="/icons/ga-finanse.png"
          alt="GA Finanse Logo"
          width={105}
          height={35}
        />
      </Link>

      <nav className="flex gap-12 font-medium">
        <Link href={"/"}>Strona główna</Link>
        <Link href={"/"}>Usługi</Link>
        <Link href={"/"}>O firmie</Link>
        <Link href={"/"}>Kontakt</Link>
      </nav>
    </header>
  );
}
