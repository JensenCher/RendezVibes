import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/global/Header";
import HeaderMobile from "@/components/global/HeaderMobile";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RendezVibes",
  description: "Where Music Unites Hearts and Beats.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("relative h-full font-sans antialiased vsc-initialized", inter.className)}>
        <Header />
        <HeaderMobile />
        {children}
      </body>
    </html>
  );
}
