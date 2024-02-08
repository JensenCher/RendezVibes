import Link from "next/link";
import { ArtistType } from "../../../types/Artist";
import SectionItemListing from "./SectionItemListing";
import { AlbumType } from "../../../types/Album";

interface SectionReelProps {
  title: string;
  subtitle?: string;
  href?: string;
  itemsHref?: string;
  items: ArtistType[] | AlbumType[] | [];
}

const FALLBACK_LIMIT = 4;

const SectionReel = async (props: SectionReelProps) => {
  const { title, subtitle, href, itemsHref, items } = props;
  const slicedItems = items.slice(0, FALLBACK_LIMIT);

  return (
    <section className="py-12">
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          {title ? <h1 className="text-2xl font-bold text-primary sm:text-3xl">{title}</h1> : null}
          {subtitle ? <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p> : null}
        </div>
        {href ? (
          <Link href={href} className="hidden text-base font-medium text-primary hover:brightness-150 md:block duration-200">
            View All <span className="capitalize">{title}</span> <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null}
      </div>
      <div className="relative">
        <div className="mt-6 flex items-center w-full">
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-4 md:gap-y-10 lg:gap-x-8">
            {slicedItems.map((item, i) => (
              <SectionItemListing key={i} item={item} index={i} href={itemsHref ? itemsHref : href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionReel;
