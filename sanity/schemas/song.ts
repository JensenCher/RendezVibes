import { BiMusic } from "react-icons/bi";
import { defineField } from "sanity";

const song = {
    name: "song",
    title: "Song",
    description: "Song Schema",
    type: "document",
    icon: BiMusic,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            description: "Enter the name of the song",
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
            name: 'album',
            title: 'Album',
            type: 'reference',
            to: [{ type: 'album' }],
        },
        {
            name: "songUrl",
            title: "Song URL",
            type: "url",
        },
        defineField({
            name: 'audio',
            title: 'Song Audio',
            type: 'file',
            options: { accept: 'audio/*' },
        }),
        {
            name: "description",
            title: "Description",
            type: "array",
            description: "Write a full description about this song",
            of: [{ type: "block" }],
        },
    ],
};

export default song;