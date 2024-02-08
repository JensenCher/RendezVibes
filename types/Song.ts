import { PortableTextBlockComponent } from "@portabletext/react";
import { ArtistType } from "./Artist";
import { AlbumType } from "./Album";

export type SongType = {
    type: "song";
    _id: string;
    _createdAt: Date;
    order: number;
    name: string;
    tagline: string;
    slug: string;
    artist: ArtistType;
    album: AlbumType;
    audio: {
        audio: string,
    };
    description: PortableTextBlockComponent[];
};