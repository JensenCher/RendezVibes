import { BiBookContent } from "react-icons/bi";
import { defineField } from "sanity";

const genre = {
    name: "genre",
    title: "Genre",
    description: "Genre Schema",
    type: "document",
    icon: BiBookContent,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            description: "Enter the name of the genre",
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
            name: "logo",
            title: "Genre Logo",
            type: "image",
        },
        {
            name: "genreUrl",
            title: "Genre URL",
            type: "url",
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            description: "Write a full description about this genre",
            of: [{ type: "block" }],
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            description: 'Default value for Genre field',
            initialValue: 'genre',
            readOnly: true,
        },
    ],
};

export default genre;