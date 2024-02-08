import { getAlbumsByGenre } from "../../../sanity/lib/query";
import SectionReel from "../SectionReel/SectionReel";

const FALLBACK_LIMIT = 4;

interface GenreReelProps {
  genre: string;
}

const GenreReel = async ({ genre }: GenreReelProps) => {
  const albums = await getAlbumsByGenre("_createdAt", FALLBACK_LIMIT, genre);

  return <SectionReel title={genre} subtitle="" href={`/genres/${genre}`} itemsHref={`/albums`} items={albums} />;
};

export default GenreReel;
