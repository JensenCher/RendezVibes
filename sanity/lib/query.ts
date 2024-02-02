import { groq } from "next-sanity";
import { client } from "./client";
import { ArtistType } from "../../types/Artist";

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
        _id, 
        name,
        "slug": slug.current,
        tagline,
        "logo": logo.asset->url,
      }`
  );
}

export async function getSingleProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        name,
        projectUrl,
        coverImage { alt, "image": asset->url },
        tagline,
        description
      }`,
    { slug }
  );
}

export async function getArtists(field: string | null = null, sliceNumber: number | null = null): Promise<ArtistType[]> {
  return client.fetch(
    groq`*[_type == "artist"]${sliceNumber ? "[0.." + (sliceNumber - 1) + "]" : ""}{
      _id, 
      _createdAt,
      name,
      genre ->{name},
      artistUrl,
      "slug": slug.current,
      tagline,
      logo { alt, "image": asset->url },
      coverImage { alt, "image": asset->url },
      members,
      type,
    } ${field ? " | order(" + field + " asc)" : ""}`
  );
}

export async function getAlbums(field: string | null = null, sliceNumber: number | null = null): Promise<ArtistType[]> {
  return client.fetch(
    groq`*[_type == "album"]${sliceNumber ? "[0.." + (sliceNumber - 1) + "]" : ""}{
      _id, 
      _createdAt,
      name,
      tagline,
      "slug": slug.current,
      artist ->{name},
      logo { alt, "image": asset->url },
      albumUrl,
      coverImage { alt, "image": asset->url },
      description,
      "numberOfSongs": count(*[_type == "song" && album._ref ==^._id]),
      type,
    } ${field ? " | order(" + field + " asc)" : ""}`
  );
}
