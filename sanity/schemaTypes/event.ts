export default {
    name: 'event',
    type: 'document',
    title: 'Events',
    fields: [
      {
        name: "id",
        type: "number",
        title: "Id"
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title of Event',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug of Event',
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
        name: 'location',
        type: 'string',
        title: 'Location',
      },
      {
        name: 'link',
        type: 'url',
        title: 'Event Link',
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
  