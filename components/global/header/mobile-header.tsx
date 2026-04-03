"use client";
import { Menu } from "@deemlol/next-icons";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "../logo";
import { useNavigation } from "@/hooks/use-navigation";

export function MobileHeader() {
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between gap-3 uppercase w-full container mx-auto py-5">
        <Link href={"/"}>
          <Logo />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-primary-yellow relative z-30"
        >
          <Menu color="currentColor" />
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
          {navigation.map((item) => {
            return (
              <Link key={item.url} href={item.url}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
