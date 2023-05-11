

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
            {
              name: 'codeurl',
              title: 'CodeURL',
              type: 'url',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Websites', value: 'Websites' },
          { title: 'Social Media', value: 'Social Media' },
          { title: 'E-commerce', value: 'E-commerce' },
          { title: 'Blogging Platform', value: 'Blogging Platform' },
          { title: 'Web Application', value: 'Web App' },
          { title: 'Small Projects', value: 'Small Projects' },
          { title: 'Other', value: 'other' }
        ],
      },
      validation: Rule => Rule.required(),
    },
  ],
}