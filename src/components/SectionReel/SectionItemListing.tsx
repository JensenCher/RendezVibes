"use client";

import { cn } from "@/lib/utils";
import { fadeInItem } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AlbumType } from "../../../types/Album";
import { ArtistType } from "../../../types/Artist";
import { Skeleton } from "../ui/skeleton";

interface SectionItemListingProps {
  item: ArtistType | AlbumType | null;
  index: number;
  href: string | undefined;
}

const SectionItemListing = ({ item, index, href }: SectionItemListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => {
      clearTimeout(timer);
    };
  }, [index]);

  if (!item || !isVisible) return <ItemPlaceHolder />;

  if (isVisible && item) {
    return (
      <Link
        className={cn("invisible h-full w-full cursor-pointer group/main", {
          "visible animate-in fade-in-5": isVisible,
        })}
        href={`${href}/${item._id}`}
      >
        <motion.div
          variants={fadeInItem("up", 0.005)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.005 }}
          className="flex flex-col w-full h-full bg-secondary/20 hover:bg-secondary/60 duration-300 px-6 pt-8 pb-4 xl:pb-12 xl:px-8 rounded-xl xl:rounded-3xl"
        >
          {/* <ImageSlider urls={[artist.logo]} /> */}
          <div className="relative aspect-square w-full h-full rounded-xl overflow-hidden">
            <Image
              fill
              loading="eager"
              src={item.logo.image}
              className="h-full w-full aspect-square object-center object-cover group-hover/main:scale-100 scale-105 duration-300"
              alt={item.logo.alt ? item.logo.alt : ""}
            />
          </div>
          <h3 className="mt-4 font-medium text-sm md:text-lg text-gray-500 group-hover/main:text-white duration-300">{item.name}</h3>
          {item.type === "artist" && <p className="mt-1 text-xs lg:text-base text-gray-600">{item.genre.name}</p>}
          {item.type === "album" && (
            <>
              <p className="mt-1 text-xs lg:text-base text-gray-600 font-semibold">{item.artist.name}</p>
              <p className="mt-1 text-xs lg:text-base text-gray-600">
                {item.numberOfSongs} {item.numberOfSongs && item.numberOfSongs <= 1 ? "song" : "songs"}
              </p>
            </>
          )}
        </motion.div>
      </Link>
    );
  }

  return <div></div>;
};

const ItemPlaceHolder = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
        <Skeleton className="h-full w-full" />
      </div>
      <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-16 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-12 h-4 rounded-lg" />
    </div>
  );
};

export default SectionItemListing;
