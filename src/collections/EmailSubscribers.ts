import type { CollectionConfig } from 'payload';

export const EmailSubscribers: CollectionConfig = {
  slug: 'email-subscribers',
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      unique: true,
    },
  ],
};
