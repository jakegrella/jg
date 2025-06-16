import type { CollectionConfig } from 'payload';
// import { revalidatePublish } from './hooks/revalidate';

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: {
    useAsTitle: 'title',
  },
  hooks: {
    // afterChange: [revalidatePublish]
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'text',
      required: true
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
    {
      name: 'publishedStatus',
      label: 'Published Status',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        }
      ],
      defaultValue: 'draft',
      required: true,
    },
    {
      name: 'publishedDate',
      label: 'Published Date',
      type: 'date'
    },
    {
      name: 'author',
      label: 'Author',
      type: 'text',
      required: true,
      defaultValue: 'Jake Grella',
    }
  ],
};
