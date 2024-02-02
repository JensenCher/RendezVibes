import { getArtists } from "../../../sanity/lib/query";
import SectionReel from "../SectionReel/SectionReel";

const FALLBACK_LIMIT = 4;

const ArtistReel = async () => {
  const artists = await getArtists("name", FALLBACK_LIMIT);

  return <SectionReel title="Artists" subtitle="" href="/artists" items={artists} />;
};

export default ArtistReel;
