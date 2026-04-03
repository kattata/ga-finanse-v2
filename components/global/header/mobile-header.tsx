"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "../logo";

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = useTranslations("Global.Header.Navigation");

  return (
    <>
      <header className="flex items-center justify-between gap-3 uppercase w-full container mx-auto py-5">
        <Link href={"/"}>
          <Logo />
        </Link>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="burger"></div>
        </button>
      </header>

      <div
        className={
          isMenuOpen
            ? "block px-4 py-5 bg-white absolute top-0 left-0 w-full h-screen"
            : "hidden"
        }
      >
        <Link href={"/"}>
          <Logo />
        </Link>

        <nav className="flex flex-col gap-4 font-medium mt-10 uppercase">
          <Link href={"/"}>{t("Home")}</Link>
          <Link href={"/"}>{t("Services")}</Link>
          <Link href={"/"}>{t("About")}</Link>
          <Link href={"/"}>{t("Contact")}</Link>
        </nav>
      </div>
    </>
  );
}
