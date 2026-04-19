import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/global/header/header";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { Footer } from "@/components/global/footer";
import Script from "next/script";
import { getTranslations } from "next-intl/server";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("FrontPage.Metadata");

  return {
    title: t("Title"),
    description: t("Description"),
    openGraph: {
      title: t("Title"),
      description: t("Description"),
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${robotoSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="pt-6 pb-20">
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </div>
        <Footer />

        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="df632319-06fe-467a-bdc5-998416fe615e"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
