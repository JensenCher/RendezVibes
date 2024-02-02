import { PortableTextBlockComponent } from "@portabletext/react";

export type GenreType = {
    type: "genre";
    _id: string;
    _createdAt: Date;
    name: string;
    tagline: string;
    slug: string;
    artistUrl: string;
    logo: {
        alt: string | null;
        image: string;
    };
    coverImage: {
        alt: string | null;
        image: string;
    };
    description: PortableTextBlockComponent[];
};