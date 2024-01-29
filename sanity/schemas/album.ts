import { BiAlbum } from "react-icons/bi";
import { defineField } from "sanity";

const album = {
    name: "album",
    title: "Album",
    description: "Album Schema",
    type: "document",
    icon: BiAlbum,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            description: "Enter the name of the album",
        },
        defineField({
            name: "tagline",
            title: "Tagline",
            type: "string",
            validation: (rule) => rule.max(60).required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            description:
                "Add a custom slug for the URL or generate one from the name",
            options: { source: "name" },
            validation: (rule) => rule.required(),
        }),
        {
            name: 'artist',
            title: 'Artist',
            type: 'reference',
            to: [{ type: 'artist' }],
        },
        {
            name: "logo",
            title: "Album Logo",
            type: "image",
        },
        {
            name: "albumUrl",
            title: "Album URL",
            type: "url",
        },
        {
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            description: "Upload a cover image for this album",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            description: "Write a full description about this album",
            of: [{ type: "block" }],
        },
    ],
};

export default album;