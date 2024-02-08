import SectionItemListing from "@/components/SectionReel/SectionItemListing";
import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import Title from "@/components/global/Title";
import { getArtists } from "../../../../sanity/lib/query";

const ArtistPage = async () => {
  const artists = await getArtists("name", 10);
  return (
    <MaxWidthWrapper>
      <div className="mt-10">
        <Title title={"Artists"} subtitle={"Explore the musical journeys of these music creators"} center={true} size="lg" />
      </div>
      <div className="relative my-20">
        <div className="mt-6 flex items-center w-full">
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-4 md:gap-y-10 lg:gap-x-8">
            {artists.map((item, i) => (
              <SectionItemListing key={i} item={item} index={i} href={"/artists"} />
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ArtistPage;
