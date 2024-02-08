import SectionItemListing from "@/components/SectionReel/SectionItemListing";
import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import Title from "@/components/global/Title";
import { getAlbums, getAlbumsByGenre } from "../../../../../sanity/lib/query";

interface GenreNamePageeProps {
  params: {
    genreName: string;
  };
}

const FALLBACK_LIMIT = 10;

const GenreNamePage = async ({ params }: GenreNamePageeProps) => {
  const { genreName } = params;
  const albums = await getAlbumsByGenre("_createdAt", FALLBACK_LIMIT, params.genreName);
  return (
    <MaxWidthWrapper>
      <div className="mt-10">
        <Title title={genreName} subtitle={"Collections of songs we love"} center={true} size="lg" />
      </div>
      <div className="relative my-20">
        <div className="mt-6 flex items-center w-full">
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-4 md:gap-y-10 lg:gap-x-8">
            {albums.map((item, i) => (
              <SectionItemListing key={i} item={item} index={i} href={"/albums"} />
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default GenreNamePage;
