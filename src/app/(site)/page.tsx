import { getProjects } from "../../../sanity/lib/query";
import { ProjectType } from "../../../types/Project";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/global/MaxWidthWrapper";
import ArtistReel from "@/components/artist/ArtistReel";
import AlbumReel from "@/components/album/AlbumReel";

export default async function Home() {
  const projects: ProjectType[] = await getProjects();

  return (
    <MaxWidthWrapper>
      <Hero />
      <ArtistReel />
      <AlbumReel />
      {/* Project Section */}
      {/* <div className="mb-32 flex flex-col items-start justify-start gap-5 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <h1>Project Section</h1>
        {projects &&
          projects.map((project) => (
            <div key={project._id} className="lg:max-w-2xl max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">{project.name}</h1>
              <p className="text-base text-zinc-400 leading-relaxed">{project.tagline}</p>
              <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
                <PortableText value={project.description} />
              </div>
            </div>
          ))}
      </div> */}

      {/* End Project Section */}
    </MaxWidthWrapper>
  );
}
