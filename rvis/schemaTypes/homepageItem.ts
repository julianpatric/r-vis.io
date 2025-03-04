import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepageItem',
  title: 'Homepage Items',
  type: 'document',
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
    }),
    defineField({
      name: 'slug',
      title: 'Links to',
      type: 'string',
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      subtitle: 'slug',
      media: 'image',
    },
  },
})
