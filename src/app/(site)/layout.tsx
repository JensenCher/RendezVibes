import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import HeaderMobile from "@/components/global/HeaderMobile";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

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
      <body className={cn("relative h-full dark font-sans antialiased vsc-initialized ", inter.className)}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> */}
        <main className="relative flex flex-col min-h-screen bg-background text-muted-foreground">
          <Header />
          <HeaderMobile />
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
        </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
