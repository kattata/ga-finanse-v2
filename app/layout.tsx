import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/global/header/header";
import { NextIntlClientProvider } from "next-intl";
import { Footer } from "@/components/global/footer";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GA Finanse | Doradztwo finansowe i dotacje dla firm",
  description:
    "Pomagamy firmom i klientom indywidualnym w pozyskiwaniu dotacji, kredytów i finansowania inwestycji. Doradztwo finansowe GA Finanse – Gdynia.",
};

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
      </body>
    </html>
  );
}
