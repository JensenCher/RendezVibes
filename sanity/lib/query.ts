import { groq } from "next-sanity";
import { client } from "./client";

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