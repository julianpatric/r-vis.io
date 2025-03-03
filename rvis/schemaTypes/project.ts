import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'coverPhoto',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'images',
      title: 'Photos',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'displayType',
              type: 'string',
              title: 'Display Type',
              description: 'How should we display this image?',
              options: {
                list: [
                  {title: 'Full-row image', value: 'full-row'},
                  {title: 'Two-column image', value: 'two-column'},
                  {title: 'Isolated image', value: 'isolate'},
                ],
                layout: 'radio',
              },
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
            {
              name: 'hoverCaption',
              type: 'string',
              title: 'Hover Caption',
            },
            {
              name: 'link',
              type: 'string',
              title: 'Links to',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverPhoto',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
