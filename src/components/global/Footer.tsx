"use client";

import { usePathname } from "next/navigation";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const pathsToMinimize = ["/verify-email", "/sign-up", "/sign-in"];
  const pathname = usePathname();
  return (
    <footer className="bg-background flex-grow-0">
      <MaxWidthWrapper>
        <div className="border-t border-muted-foreground">
          {pathname && pathsToMinimize.includes(pathname) ? null : (
            <div className="pb-8 pt-16">
              <div className="flex justify-center">
                <div className="h-12 w-auto aspect-square rounded-full text-3xl font-bold hover:text-white duration-300 cursor-default group">
                  <Image
                    src={"/logo/RendezVibeslogo.png"}
                    alt="logo"
                    height={30}
                    width={30}
                    className="group-hover:brightness-150 group-hover:rotate-[10deg] filter duration-700"
                  />
                </div>
              </div>
            </div>
          )}
          {pathname && pathsToMinimize.includes(pathname) ? null : (
            <div>
              <div className="relative flex items-center p-6 sm:py-8 lg:mt-0">
                <div className="absolute inset-0 overflow-hidden roudned-lg">
                  <div aria-hidden="true" className="absolute bg-zinc-0 inset-0 bg-gradient-to-br bg-opacity-90" />
                </div>
                <div className="text-center relative mx-auto max-w-sm">
                  <h3 className="font-semibold text-gray-300">RendezVibes</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Where Music Unites Hearts and Beats.</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} RendezVibes. All Rights Reserved.</p>
          </div>
          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600 duration-300">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600 duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600 duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
