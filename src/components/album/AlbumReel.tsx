import { getAlbums, getArtists } from "../../../sanity/lib/query";
import SectionReel from "../SectionReel/SectionReel";

const FALLBACK_LIMIT = 4;

const AlbumReel = async () => {
  const albums = await getAlbums("name", FALLBACK_LIMIT);

  return <SectionReel title="Albums" subtitle="" href="/albums" items={albums} />;
};

export default AlbumReel;
