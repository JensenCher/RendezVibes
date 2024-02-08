"use client";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import MaxWidthWrapper from "./MaxWidthWrapper";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(`sticky inset-x-0 top-0 z-30 w-full transition-all py-2 text-muted-foreground bg-background`, {
        "bg-background/75 backdrop-blur-lg": scrolled,
        "bg-background": selectedLayout,
      })}
    >
      <MaxWidthWrapper>
        <div className="flex h-[47px] items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex flex-row space-x-3 items-center justify-center">
              <span className="font-bold text-3xl flex hover:text-white duration-300">Rv</span>
            </Link>
            <NavigationMenuDemo />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Header;

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Yoasobi",
    href: "/artists/eebb6285-f4a1-43fd-b1af-35ee16b6b843",
    description: "YOASOBI (stylized in all caps) is a Japanese music duo composed of vocaloid music producer Ayase and vocalist Ikura (幾田りら).",
  },
  {
    title: "Official Hige Dandism",
    href: "/artists/943254e6-9d02-4e43-a7a6-5e25b9be7b63",
    description:
      "Official Hige Dandism: Japanese pop-rock sensations crafting infectious melodies and heartfelt lyrics, captivating global audiences with their dynamic and soulful sound.",
  },
  {
    title: "More...",
    href: "/artists",
    description: "",
  },
];
const albumComponents: { title: string; href: string; description: string }[] = [
  {
    title: "The Book",
    href: "/albums/a966079a-6f95-4961-8030-cd7fd39881f0",
    description:
      '"The Book" by Yoasobi is a captivating musical narrative, weaving tales through diverse genres. Released in 2021, this Japanese masterpiece delivers a symphony of emotions, from the upbeat resonance of "Tabun" to the melancholic beauty of "Ano Yume o Nazotte."',
  },
  {
    title: "Traveller",
    href: "/albums/d1240415-98a0-4448-b265-336cc6ae1447",
    description:
      '"Traveller" by Official Hige Dandism is a musical odyssey that transcends genres, seamlessly blending pop, rock, and soul. Released in 2019, this Japanese album is a treasure trove of infectious melodies, introspective lyrics, and versatile instrumentation.',
  },
  {
    title: "More...",
    href: "/albums",
    description: "",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Genres</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/genres"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">Genres</div>
                    <p className="text-sm leading-tight text-muted-foreground">Explore & Expand your music taste and venture new styles.</p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/genres/J-Pop" title="J-Pop">
                Japan's eclectic music scene, blending diverse genres with a unique cultural flair, creating an enchanting sonic landscape.
              </ListItem>
              <ListItem href="/genres/K-Pop" title="K-Pop">
                Dynamic South Korean music genre fusing catchy tunes, impressive choreography, and vibrant visuals, defining global pop culture.
              </ListItem>
              <ListItem href="/genres" title="More..."></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Artists</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Albums</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {albumComponents.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
