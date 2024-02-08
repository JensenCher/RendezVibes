import Hero from "@/components/Hero";
import AlbumReel from "@/components/album/AlbumReel";
import ArtistReel from "@/components/artist/ArtistReel";
import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";

export default async function Home() {
  return (
    <MaxWidthWrapper>
      <Hero />
      <ArtistReel />
      <AlbumReel />
    </MaxWidthWrapper>
  );
}
