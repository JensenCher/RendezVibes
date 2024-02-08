import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import { getAlbums } from "../../../../../sanity/lib/query";
import Title from "@/components/global/Title";
import AlbumSlider from "@/components/album/AlbumSlider";

interface AlbumPageProps {
  params: {
    albumId: string;
  };
}

const AlbumPage = async ({ params }: AlbumPageProps) => {
  const { albumId } = params;
  const albums = await getAlbums("name", 1, null, albumId);

  if (!albums.length) return <MaxWidthWrapper>No Albums found.</MaxWidthWrapper>;
  const album = albums[0];
  return (
    <MaxWidthWrapper>
      <div className="mt-10">
        <Title title={album.name} subtitle={`${album.artist.name}`} size="lg" center={true} />
      </div>
      <div className="my-20">
        <AlbumSlider albums={albums} multipleAlbums={false} />
      </div>
    </MaxWidthWrapper>
  );
};

export default AlbumPage;
