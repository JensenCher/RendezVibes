import { groq } from "next-sanity";
import { client } from "./client";
import { ArtistType } from "../../types/Artist";
import { AlbumType } from "../../types/Album";
import { SongType } from "../../types/Song";

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

export async function getArtists(field: string | null = null, sliceNumber: number | null = null, artistId: string | null = null): Promise<ArtistType[]> {
  let queryParams = {}
  if (artistId) {
    queryParams = { ...queryParams, artistId }
  }
  const query = groq`*[_type == "artist" ${artistId ? " && _id==$artistId" : ""}]${sliceNumber ? "[0.." + (sliceNumber - 1) + "]" : ""}{
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

  return client.fetch(
    query,
    queryParams
  );
}

export async function getAlbums(field: string | null = null, sliceNumber: number | null = null, artistId: string | null = null, albumId: string | null = null): Promise<AlbumType[]> {
  let queryParams = {}
  if (artistId) {
    queryParams = { ...queryParams, artistId }
  }
  if (albumId) {
    queryParams = { ...queryParams, albumId }
  }
  const query = groq`*[_type == "album" ${artistId ? " && references($artistId)" : ""} ${albumId ? " && _id == $albumId" : ""}]${sliceNumber ? "[0.." + (sliceNumber - 1) + "]" : ""}{
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
  return client.fetch(
    query,
    queryParams
  );
}

export async function getAlbumsByGenre(field: string | null = null, sliceNumber: number | null = null, genreName: string | null = null): Promise<AlbumType[]> {
  let queryParams = {}
  if (genreName) {
    queryParams = { ...queryParams, genreName }
  }

  const query = groq` *[_type == "album" && references(*[_type == "artist" && references(*[_type == "genre" && name == $genreName]._id)]._id)]
  ${sliceNumber ? "[0.." + (sliceNumber - 1) + "]" : ""} {
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
    "numberOfSongs": count(*[_type == "song" && album._ref == ^. _id]),
    type,
  } ${field ? " | order(" + field + " desc)" : ""}`

  return client.fetch(
    query,
    queryParams
  );
}


export async function getSongs(field: string | null = null, sliceNumber: number | null = null, albumId: string | null = null): Promise<SongType[]> {
  let queryParams = {}
  if (albumId) {
    queryParams = { ...queryParams, albumId }
  }
  return client.fetch(
    groq`*[_type == "song" ${albumId ? " && references($albumId)" : ""}]${sliceNumber ? "[0.." + (sliceNumber - 1) + "]" : ""}{
      _id, 
      _createdAt,
      order,
      name,
      tagline,
      "slug": slug.current,
      artist ->{name},
      album ->{name},
      audio { "audio": asset->url },
      description,
      type,
    } ${field ? " | order(" + field + " asc)" : ""}`,
    queryParams
  );
}
