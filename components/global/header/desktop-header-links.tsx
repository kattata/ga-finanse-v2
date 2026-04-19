"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/hooks/use-navigation";

interface Props {
  navItems: NavItem[];
}

export function DesktopHeaderLinks({ navItems }: Props) {
  const pathname = usePathname();

  return (
    <nav className="flex gap-12 font-medium">
      {navItems.map((item) => {
        return (
          <Link
            key={item.url}
            href={item.url}
            className={
              pathname === item.url
                ? "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.75 after:w-full after:bg-primary-yellow"
                : "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.75 after:w-0 after:bg-primary-yellow after:transition-all after:duration-300 hover:after:w-full"
            }
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
