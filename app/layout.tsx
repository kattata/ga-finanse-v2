import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/global/header";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GA Finanse",
  description:
    "GA Finanse wspomaga przedsiębiorców w pozyskiwaniu i rozliczaniu dotacji unjinych, oferuje również doradztwo biznesowe i finansowe. Dysponuje wieloletnim doświadczeniem i licznymi sukcesami w dziedzinie środków unijnych i nie tylko.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
