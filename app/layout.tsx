import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/global/header/header";
import { NextIntlClientProvider } from "next-intl";
import { Footer } from "@/components/global/footer";
import Script from "next/script";
import globalData from "@/data/global.json";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = globalData;

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
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
