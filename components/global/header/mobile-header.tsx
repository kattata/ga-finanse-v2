"use client";

import { Menu } from "@deemlol/next-icons";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "../logo";
import globalData from "@/data/global.json";

export function MobileHeader() {
  const { navigation } = globalData;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleLinkClick() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="flex items-center justify-between gap-3 uppercase w-full container mx-auto py-5">
        <Link href={"/"} onClick={handleLinkClick}>
          <Logo />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-primary-yellow relative z-60"
        >
          <Menu color="currentColor" />
        </button>
      </header>

      <div
        className={
          isMenuOpen
            ? "block px-4 py-5 bg-white absolute top-0 left-0 w-full h-screen z-50"
            : "hidden"
        }
      >
        <Link href={"/"} onClick={handleLinkClick}>
          <Logo />
        </Link>

        <nav className="flex flex-col gap-4 font-medium mt-10 uppercase">
          {navigation.items.map((item) => {
            return (
              <Link key={item.url} href={item.url} onClick={handleLinkClick}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
