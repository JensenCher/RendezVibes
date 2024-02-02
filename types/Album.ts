import { PortableTextBlockComponent } from "@portabletext/react";
import { ArtistType } from "./Artist";

export type AlbumType = {
    type: "album";
    _id: string;
    _createdAt: Date;
    name: string;
    tagline: string;
    slug: string;
    artist: ArtistType;
    logo: {
        alt: string | null;
        image: string;
    };
    albumUrl: string;
    coverImage: {
        alt: string | null;
        image: string;
    };
    description: PortableTextBlockComponent[];
    numberOfSongs?: number;
};