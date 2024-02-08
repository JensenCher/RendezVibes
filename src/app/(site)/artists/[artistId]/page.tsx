import AlbumSlider from "@/components/album/AlbumSlider";
import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import Title from "@/components/global/Title";
import { getAlbums, getArtists } from "../../../../../sanity/lib/query";
import artist from "../../../../../sanity/schemas/artist";

interface ArtistPageProps {
  params: {
    artistId: string;
  };
}

const ArtistPage = async ({ params }: ArtistPageProps) => {
  const artists = await getArtists("name", 1, params.artistId);
  const artist = artists[0];
  const albums = await getAlbums("name", null, params.artistId);
  return (
    <MaxWidthWrapper>
      <div className="mt-10">
        <Title title={artist.name} subtitle={`Popular Albums by ${artist.name}`} size="lg" center={true} />
      </div>
      <div className="my-20">
        <AlbumSlider albums={albums} />
      </div>
    </MaxWidthWrapper>
  );
};

export default ArtistPage;
