import GenreReel from "@/components/genre/GenreReel";
import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import Title from "@/components/global/Title";

const GenresPage = async () => {
  return (
    <MaxWidthWrapper>
      <div className="mt-10">
        <Title title={"Genres"} subtitle={"Explore new genres expand your music taste"} center={true} size="lg" />
      </div>
      <div className="relative my-12">
        <GenreReel genre="J-Pop" />
        <GenreReel genre="K-Pop" />
      </div>
    </MaxWidthWrapper>
  );
};

export default GenresPage;
