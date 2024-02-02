import { PortableTextBlockComponent } from "@portabletext/react";
import { GenreType } from "./Genre";

export type ArtistType = {
    type: "artist";
    _id: string;
    _createdAt: Date;
    name: string;
    tagline: string;
    slug: string;
    genre: GenreType;
    logo: {
        alt: string | null;
        image: string;
    };
    artistUrl: string;
    coverImage: {
        alt: string | null;
        image: string;
    };
    description: PortableTextBlockComponent[];
    members: string[];
};