export default {
    name: 'research',
    type: 'document',
    title: 'Research Articles',
    fields: [
      {
        name: "id",
        type: "number",
        title: "Id"
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title of Research Article',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug of Research Article',
        options: {
          source: 'title',
        },
      },
      {
        name: 'imageUrl',
        type: 'image',
        title: 'Image Url',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'date',
        type: 'date',
        title: 'Date',
      },
      {
        name: 'link',
        type: 'url',
        title: 'Research Link',
      },
      {
        name: 'researchedEntity',
        type: 'string',
        title: 'Researched Entity',
      },
      {
        name: 'category',
        type: 'object',
        title: 'Category',
        fields: [
          {
            name: 'title',
            type: 'string',
            title: 'Title',
          },
          {
            name: 'href',
            type: 'string',
            title: 'Href',
          },
        ],
      },
    ],
  }
  