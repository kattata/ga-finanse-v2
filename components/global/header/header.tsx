import { NextIntlClientProvider } from "next-intl";
import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";

export function Header() {
  return (
    <>
      {/* TODO: Hide with isMobile */}
      <div className="hidden md:block">
        <DesktopHeader />
      </div>

      <NextIntlClientProvider>
        <div className="block md:hidden">
          <MobileHeader />
        </div>
      </NextIntlClientProvider>
    </>
  );
}
