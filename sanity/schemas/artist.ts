import { BiUser } from "react-icons/bi";
import { defineField } from "sanity";

const artist = {
    name: "artist",
    title: "Artist",
    description: "Artist Schema",
    type: "document",
    icon: BiUser,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            description: "Enter the name of the artist",
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
        defineField({
            name: "genre",
            title: "Genre",
            type: "reference",
            to: { type: "genre" },
            description:
                "What type of genre does this artist?",
            validation: (rule) => rule.required(),
        }),
        {
            name: "logo",
            title: "Artist Logo",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "artistUrl",
            title: "Artist URL",
            type: "url",
        },
        {
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            description: "Upload a cover image for this artist",
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
            description: "Write a full description about this artist",
            of: [{ type: "block" }],
        },
        {
            name: "members",
            title: "Members",
            type: "array",
            description: "The Members in this group",
            of: [{ type: "string" }],
        },
    ],
};

export default artist;